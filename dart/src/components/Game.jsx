import points from "../points";
import { useEffect, useState } from "react";
export default function Game({ onMovesChange, activePlayer }) {
  const [multiplier, setMultiplier] = useState(1);
  const [dartsThrown, setDartsThrown] = useState(0);
  const [scoreArrayPlayer1, setScoreArrayPlayer1] = useState(
    new Array(3).fill(0)
  );
  const [scoreArrayPlayer2, setScoreArrayPlayer2] = useState(
    new Array(3).fill(0)
  );
  const handleMultiplierChange = (value) => {
    if (multiplier === value) {
      setMultiplier(1);
      return;
    }
    setMultiplier(value);
  };
  useEffect(() => {
    setDartsThrown(0);
  }, [activePlayer]);
  const handleScore = (point) => {
    if (activePlayer === 1) {
      const newScoreArray = [...scoreArrayPlayer1];
      newScoreArray[dartsThrown] = point * multiplier;
      setScoreArrayPlayer1(newScoreArray);
    }
    if (activePlayer === 2) {
      const newScoreArray = [...scoreArrayPlayer2];
      newScoreArray[dartsThrown] = point * multiplier;
      setScoreArrayPlayer2(newScoreArray);
    }
    onMovesChange(point * multiplier, 1, multiplier);
    setMultiplier(1);
    setDartsThrown(dartsThrown + 1);
  };
  const handleScoreFromInput = (point) => {
    onMovesChange(point, 3, 2);
    setMultiplier(1);
  };
  if (dartsThrown === 3) {
    setDartsThrown(0);
  }
  return (
    <div className="flex flex-wrap justify-center">
      <div>
        <div className="flex flex-wrap justify-around px-40">
          <div className="flex space-x-2 justify-center items-center m-2">
            {scoreArrayPlayer1.map((_, index) => (
              <div
                key={index}
                className={`w-12 h-12 border-2 border-black rounded text-center flex justify-center items-center ${
                  activePlayer === 1 && index === dartsThrown
                    ? "border-green-500"
                    : null
                }`}
              >
                {scoreArrayPlayer1[index]}
              </div>
            ))}
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const score = e.target[0].value;
              // if (isNaN(score) || score < 0 || score > 180) {
              //   alert("Please enter a valid score (0-180)");
              //   e.target.reset();
              //   return;
              // }
              handleScoreFromInput(score);
              e.target.reset();
            }}
          >
            <input
              disabled={dartsThrown !== 0}
              type="number"
              placeholder="Enter score (3 darts)"
              className="border-2 border-gray-300 p-2 rounded-md focus:outline-none disabled:bg-gray-200 text-center m-4"
            />
          </form>

          <div className="flex space-x-2 justify-center items-center m-2">
            {scoreArrayPlayer2.map((_, index) => (
              <div
                key={index}
                className={`w-12 h-12 border-2 border-black rounded text-center flex justify-center items-center ${
                  activePlayer === 2 && index === dartsThrown
                    ? "border-green-500"
                    : null
                }`}
              >
                {scoreArrayPlayer2[index]}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {points.map((point) => {
            return (
              <button
                disabled={point === 25 && multiplier === 3}
                onClick={() => handleScore(point)}
                key={point}
                className="text-black p-2 rounded-md transition-colors duration-200 m-1 w-10 sm:w-20 text-center bg-slate-600 hover:bg-slate-800"
              >
                {point}
              </button>
            );
          })}
        </div>
      </div>

      <button
        onClick={() => handleMultiplierChange(2)}
        className={`text-black p-2 rounded-md transition-colors duration-200 m-1 w-20 text-center ${
          multiplier === 2 ? "bg-red-500" : "bg-slate-600 hover:bg-slate-800"
        }`}
      >
        2X{" "}
      </button>
      <button
        onClick={() => handleMultiplierChange(3)}
        className={`text-black p-2 rounded-md transition-colors duration-200 m-1 w-20 text-center ${
          multiplier === 3 ? "bg-red-500" : "bg-slate-600 hover:bg-slate-800"
        }`}
      >
        3X{" "}
      </button>
    </div>
  );
}

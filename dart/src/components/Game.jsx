import points from "../points";
import { useState } from "react";
export default function Game({ onMovesChange }) {
  const [multiplier, setMultiplier] = useState(1);
  const [dartsThrown, setDartsThrown] = useState(0);
  const handleMultiplierChange = (value) => {
    if (multiplier === value) {
      setMultiplier(1);
      return;
    }
    setMultiplier(value);
  };
  const handleScore = (point) => {
    onMovesChange(point * multiplier, 1);
    setMultiplier(1);
    setDartsThrown(dartsThrown + 1);
  };
  const handleScoreFromInput = (point) => {
    onMovesChange(point, 3);
    setMultiplier(1);
  };
  if (dartsThrown === 3) {
    setDartsThrown(0);
  }
  return (
    <div className="flex flex-wrap justify-center">
      <div>
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
        {points.map((point) => {
          return (
            <button
              onClick={() => handleScore(point)}
              key={point}
              className="text-black p-2 rounded-md transition-colors duration-200 m-1 w-20 text-center bg-slate-600 hover:bg-slate-800"
            >
              {point}
            </button>
          );
        })}
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

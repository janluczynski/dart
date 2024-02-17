import points from "../points";
import { useState } from "react";
export default function Game({ onMovesChange }) {
  const [multiplier, setMultiplier] = useState(1);
  const [score, setScore] = useState(0);
  const handleMultiplierChange = (value) => {
    if (multiplier === value) {
      setMultiplier(1);
      return;
    }
    setMultiplier(value);
  };
  const handleScore = (point) => {
    setScore(score + point * multiplier);
    setMultiplier(1);
    onMovesChange();
  };
  return (
    <div className="flex flex-wrap justify-center">
      {points.map((point) => {
        return (
          <button
            onClick={() => handleScore(point)}
            key={point}
            className="text-black p-2 rounded-md transition-colors duration-200 m-1 w-20 text-center bg-slate-600"
          >
            {point}
          </button>
        );
      })}
      <button
        onClick={() => handleMultiplierChange(2)}
        className={`text-black p-2 rounded-md transition-colors duration-200 m-1 w-20 text-center ${
          multiplier === 2 ? "bg-red-500" : "bg-slate-600"
        }`}
      >
        2X{" "}
      </button>
      <button
        onClick={() => handleMultiplierChange(3)}
        className={`text-black p-2 rounded-md transition-colors duration-200 m-1 w-20 text-center ${
          multiplier === 3 ? "bg-red-500" : "bg-slate-600"
        }`}
      >
        3X{" "}
      </button>
    </div>
  );
}

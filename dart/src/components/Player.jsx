import { useState } from "react";
export default function Player({ points, isActive, legs, sets }) {
  const [playername, setPlayername] = useState("Player");
  const [isChanging, setIsChanging] = useState(false);
  function changePlayerName(value) {
    setPlayername(value);
  }
  function toggleChange(prev) {
    setIsChanging((prev) => !prev);
  }
  return (
    <>
      <div
        className={`flex flex-col items-center mt-8 md:mb-16 rounded-md transition-colors duration-1000 ${
          isActive ? "bg-green-400 ring-2 ring-green-500 p-8" : "bg-red-400 p-8"
        }`}
      >
        <section className=" font-bold text-xl">
          S: {sets} L: {legs}
        </section>
        <section className=" font-bold text-xl">Pts: {points}</section>

        <input
          type="text"
          onChange={(event) => changePlayerName(event.target.value)}
          value={playername}
          disabled={!isChanging}
          className="border-2 border-gray-300 p-2 rounded-md focus:outline-none disabled:bg-gray-200 text-center"
        />
        <button
          onClick={toggleChange}
          className="text-black p-2 rounded-md transition-colors duration-200"
        >
          {isChanging ? "Save name" : "Change name"}
        </button>
      </div>
    </>
  );
}

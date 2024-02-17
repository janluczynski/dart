import { useState } from "react";
export default function Player({ scoredPoints }) {
  const [playername, setPlayername] = useState("Player 1");
  const [isChanging, setIsChanging] = useState(false);
  const [points, setPoints] = useState(501);
  function changePlayerName(value) {
    setPlayername(value);
  }
  function toggleChange(prev) {
    setIsChanging((prev) => !prev);
  }
  return (
    <>
      <div className="flex flex-col items-center mt-8 md:mb-16 bg-slate-500 p-8 rounded-md">
        <section className=" font-bold text-xl mb-8">{points}</section>
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

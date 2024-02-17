import { useState } from "react";
import "./App.css";
import Player from "./components/Player";
import Header from "./components/Header";
import Game from "./components/Game";

function App() {
  const [activePlayer, setActivePlayer] = useState(1);
  const [noMoves, setNoMoves] = useState(0);
  const [scoreinTurn, setScoreInTurn] = useState(0);
  const [scoreInThrow, setScoreInThrow] = useState(0);
  function handleMoves() {
    if (noMoves === 3) {
      setActivePlayer(activePlayer === 1 ? 2 : 1);
      setNoMoves(0);
    } else {
      setNoMoves(noMoves + 1);
    }
  }
  console.log(noMoves);
  console.log(activePlayer);
  return (
    <>
      <Header />
      <div className="flex justify-around w-100">
        <Player scoredPoints={scoreinTurn} />
        <Player />
      </div>
      <Game onMovesChange={handleMoves} />
    </>
  );
}

export default App;

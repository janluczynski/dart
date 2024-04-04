import { useState } from "react";
import "../App.css";
import Player from "../components/Player";
import Header from "../components/Header";
import Game from "../components/Game";

function App() {
  const [activePlayer, setActivePlayer] = useState(1);
  const [noMoves, setNoMoves] = useState(0);
  const [player1Score, setPlayer1Score] = useState(501);
  const [player2Score, setPlayer2Score] = useState(501);
  const [player1Legs, setPlayer1Legs] = useState(0);
  const [player2Legs, setPlayer2Legs] = useState(0);
  const [player1Sets, setPlayer1Sets] = useState(0);
  const [player2Sets, setPlayer2Sets] = useState(0);
  const [legStartPlayer, setLegStartPlayer] = useState(1);

  function handleMoves(points, noDarts) {
    let newNoMoves = noMoves;
    if (noDarts === 1) {
      newNoMoves = noMoves + 1;
      setNoMoves(newNoMoves);
    } else if (noDarts === 3) {
      newNoMoves = 3;
      setNoMoves(newNoMoves);
    }
    if (activePlayer === 1) {
      if (player1Score - points < 0 || player1Score - points === 1) {
        setActivePlayer(activePlayer === 1 ? 2 : 1);
        setNoMoves(0);
        return;
      }
      setPlayer1Score(player1Score - points);
    } else {
      if (player2Score - points < 0 || player2Score - points === 1) {
        setActivePlayer(activePlayer === 1 ? 2 : 1);
        setNoMoves(0);
        return;
      }
      setPlayer2Score(player2Score - points);
    }
    if (newNoMoves === 3) {
      setActivePlayer(activePlayer === 1 ? 2 : 1);
      setNoMoves(0);
    }
  }
  if (player1Score === 0) {
    setPlayer1Legs(player1Legs + 1);
    setPlayer1Score(501);
    setPlayer2Score(501);
  }
  if (player2Score === 0) {
    setPlayer2Legs(player2Legs + 1);
    setPlayer1Score(501);
    setPlayer2Score(501);
  }
  if (player1Legs === 3) {
    setPlayer1Sets(player1Sets + 1);
    setPlayer1Legs(0);
    setPlayer2Legs(0);
  }
  if (player2Legs === 3) {
    setPlayer2Sets(player2Sets + 1);
    setPlayer1Legs(0);
    setPlayer2Legs(0);
  }

  //console.log(noMoves);
  //console.log(activePlayer + "is active");
  return (
    <>
      <div className="flex justify-around w-full flex-col sm:flex-row">
        <Player
          sets={player1Sets}
          legs={player1Legs}
          points={player1Score}
          isActive={activePlayer === 1}
        />
        <Player
          sets={player2Sets}
          legs={player2Legs}
          points={player2Score}
          isActive={activePlayer === 2}
        />
      </div>
      <Game onMovesChange={handleMoves} />
    </>
  );
}

export default App;

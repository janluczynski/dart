import { useState } from "react";

export default function useGameLogic() {
  const [activePlayer, setActivePlayer] = useState(1);
  const [noMoves, setNoMoves] = useState(0);
  const [player1Score, setPlayer1Score] = useState(501);
  const [player2Score, setPlayer2Score] = useState(501);
  const [player1Legs, setPlayer1Legs] = useState(0);
  const [player2Legs, setPlayer2Legs] = useState(0);
  const [player1Sets, setPlayer1Sets] = useState(0);
  const [player2Sets, setPlayer2Sets] = useState(0);
  const [legStartPlayer, setLegStartPlayer] = useState(1);
  const [setStartPlayer, setSetStartPlayer] = useState(1);

  function handleMoves(points, noDarts, multiplier) {
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
      if (player1Score - points === 0 && multiplier !== 2) {
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
      if (player2Score - points === 0 && multiplier !== 2) {
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
    if (legStartPlayer === 1) {
      setActivePlayer(2);
      setLegStartPlayer(2);
    } else {
      setActivePlayer(1);
      setLegStartPlayer(1);
    }
  }
  if (player2Score === 0) {
    setPlayer2Legs(player2Legs + 1);
    setPlayer1Score(501);
    setPlayer2Score(501);
    if (legStartPlayer === 1) {
      setActivePlayer(2);
      setLegStartPlayer(2);
    } else {
      setActivePlayer(1);
      setLegStartPlayer(1);
    }
  }
  if (player1Legs === 3) {
    setPlayer1Sets(player1Sets + 1);
    setPlayer1Legs(0);
    setPlayer2Legs(0);
    if (setStartPlayer === 1) {
      setActivePlayer(2);
      setSetStartPlayer(2);
    } else {
      setActivePlayer(1);
      setSetStartPlayer(1);
    }
  }
  if (player2Legs === 3) {
    setPlayer2Sets(player2Sets + 1);
    setPlayer1Legs(0);
    setPlayer2Legs(0);
    if (setStartPlayer === 1) {
      setActivePlayer(2);
      setSetStartPlayer(2);
    } else {
      setActivePlayer(1);
      setSetStartPlayer(1);
    }
  }

  return {
    player1Sets,
    player2Sets,
    player1Legs,
    player2Legs,
    player1Score,
    player2Score,
    activePlayer,
    setPlayer1Sets,
    setPlayer2Sets,
    setPlayer1Legs,
    setPlayer2Legs,
    setPlayer1Score,
    setPlayer2Score,
    setActivePlayer,
    handleMoves,
  };
}

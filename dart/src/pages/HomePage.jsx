import useGameLogic from "../hooks/useGameLogic";
import Player from "../components/Player";
import Game from "../components/Game";
import "../App.css";
function App() {
  const {
    player1Sets,
    player2Sets,
    player1Legs,
    player2Legs,
    player1Score,
    player2Score,
    activePlayer,
    handleMoves,
  } = useGameLogic();

  return (
    <>
      <div className="bg-gray-300 p-4 rounded">
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
        <Game onMovesChange={handleMoves} activePlayer={activePlayer} />
      </div>
    </>
  );
}

export default App;

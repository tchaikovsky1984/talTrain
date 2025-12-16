import { useState } from "react";

import Board from "./components/Board";
import GameMessage from "./components/GameMessage";

import "./App.css";

function App() {
  let [boardState, updateBoardState] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
  let [gameState, updateGameState] = useState("prog");
  let [currentPlayer, setCurrentPlayer] = useState("X");

  return (
    <>
      <div className="app-container">
        <Board boardState={boardState} updateBoardState={updateBoardState}
          gameState={gameState} updateGameState={updateGameState}
          currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
        <GameMessage gameState={gameState} currentPlayer={currentPlayer} />
      </div>
    </>
  );

}

export default App;

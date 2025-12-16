import { useState } from "react";

import Parent from "./components/chaa/Parent.tsx";
import Board from "./components/Board";
import GameMessage from "./components/GameMessage";
import "./App.css";

import "./App.css";

function App() {
  let [boardState, updateBoardState] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
  let [gameState, updateGameState] = useState("prog");
  let [currentPlayer, setCurrentPlayer] = useState("X");

  return (
    <>
      {/*<h1>TicTacToe :3</h1>
      <div className="app-container">
        <Board boardState={boardState} updateBoardState={updateBoardState}
          gameState={gameState} updateGameState={updateGameState}
          currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
        <GameMessage gameState={gameState} currentPlayer={currentPlayer} />
      </div>*/}
      <Parent />
    </>
  );

}

export default App;

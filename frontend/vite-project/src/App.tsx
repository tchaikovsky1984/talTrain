import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Parent from "./components/chaa/Parent.tsx";
import NewParent from "./components/cha2/Parent.tsx";
import Board from "./components/Board";
import GameMessage from "./components/GameMessage";
import RestartButton from "./components/RestartButton.tsx";
import "./App.css";

import "./App.css";

function App() {
  let [boardState, updateBoardState] = useState([["", "", ""], ["", "", ""], ["", "", ""]]);
  let [gameState, updateGameState] = useState("prog");
  let [currentPlayer, setCurrentPlayer] = useState("X");

  return (
    <>
      <Router>
        <nav >
          <Link to="/"><p>Home</p></Link>
          <Link to="/tic"><p>Tic Tac Toe</p></Link>
          <Link to="/color"><p>Colour</p></Link>
          <Link to="/timer"><p>Timer</p></Link>
        </nav>

        <Routes>
          <Route path="/" />
          <Route path="/tic" element={
            <div className="full-container" >
              <h1>TicTacToe :3</h1>
              <div className="app-container">
                <Board boardState={boardState} updateBoardState={updateBoardState}
                  gameState={gameState} updateGameState={updateGameState}
                  currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
                <GameMessage gameState={gameState} currentPlayer={currentPlayer} />
              </div>
              <RestartButton setGameState={updateGameState} setBoardState={updateBoardState} gameState={gameState} />
            </div>} />
          <Route path="/color" element={<Parent />} />
          <Route path="/timer" element={<NewParent />} />
        </Routes>
      </Router>
    </>
  );

}

export default App;

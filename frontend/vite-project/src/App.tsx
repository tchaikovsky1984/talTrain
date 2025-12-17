import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

import Board from "./components/Board";
import TimerParent from "./components/cha2/Parent.tsx";
import Greet from "./components/Greet.tsx";
import ColourParent from "./components/chaa/Parent.tsx";
import GameMessage from "./components/GameMessage";
import RestartButton from "./components/RestartButton.tsx";
import Challenge from "./components/Challenge.tsx";

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
          <Link to="/challenge"><p>Challenges</p></Link>
          <Link to="/greeting"><p>Greet</p></Link>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Home Page buddy</h1>} />
          <Route path="/tic" element={
            <div className="flex justify-between content-center flex-col" >
              <h1 className="text-5xl text-[#101a2f] font-extrabold font-[Helvetica]">TicTacToe :3</h1>
              <div className="bg-[#fbfbda] border-2 border-solid border-[#d9d9ba] rounded-[40px] p-5 flex justify-evenly items-center">
                <Board boardState={boardState} updateBoardState={updateBoardState}
                  gameState={gameState} updateGameState={updateGameState}
                  currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
                <GameMessage gameState={gameState} currentPlayer={currentPlayer} />
              </div>
              <RestartButton setGameState={updateGameState} setBoardState={updateBoardState} gameState={gameState} />
            </div>} />
          <Route path="/challenge" element={<Challenge />}>
            <Route path="color" element={<ColourParent />} />
            <Route path="timer" element={<TimerParent />} />
          </Route>
          <Route path="/greeting" element={<Outlet />}>
            <Route path=":name" element={<Greet />} />
          </Route>
        </Routes>
      </Router>
    </>
  );

}

export default App;

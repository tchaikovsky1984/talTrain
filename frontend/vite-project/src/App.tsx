import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

import Board from "./components/Board";
import TimerParent from "./components/cha2/Parent.tsx";
import Greet from "./components/Greet.tsx";
import ColourParent from "./components/chaa/Parent.tsx";
import GameMessage from "./components/GameMessage";
import RestartButton from "./components/RestartButton.tsx";
import Challenge from "./components/Challenge.tsx";
import Analytics from "./components/events/analytics.tsx";
import Access from "./components/events/Access.tsx";
import Hijacker from "./components/events/Hijacker.tsx";
import Settings from "./components/control/Settings.tsx";
import Mirror from "./components/control/Mirror.tsx";
import Enforcer from "./components/control/Enforcer.tsx";
import Wizard from "./components/control/Wizard.tsx";
import Bomb, { ErrorBoundary } from "./components/Bomb.tsx";
import Dashboard from "./components/Dashboard.tsx";
import GQL from "./components/api/graphql.tsx";

import "./App.css";
import EventPage from "./components/EventPage.tsx";
import Modal from "./components/events/Modal.tsx";
import ControlPage from "./components/ControlPage.tsx";
import Apis from "./components/Apis.tsx";
import ToDos from "./components/api/todos.tsx";

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
          <Link to="/events"><p>Events</p></Link>
          <Link to="/control"><p>Control</p></Link>
          <Link to="/bomb"><p>Bomb</p></Link>
          <Link to="/dash"><p>Dashboard</p></Link>
          <Link to="/api"><p>Api</p></Link>
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

          <Route path="/events" element={<EventPage />}>
            <Route path="analytics" element={<Analytics />} />
            <Route path="access" element={<Access />} />
            <Route path="hijack" element={<Hijacker />} />
            <Route path="modal" element={<Modal />} />
          </Route>

          <Route path="/control" element={<ControlPage />} >
            <Route path="settings" element={<Settings />} />
            <Route path="mirror" element={<Mirror />} />
            <Route path="enf" element={<Enforcer />} />
            <Route path="wizard" element={<Wizard />} />
          </Route>

          <Route path="/bomb" element={
            <ErrorBoundary>
              <Bomb />
            </ErrorBoundary>
          } />

          <Route path="/dash" element={<Dashboard />} />

          <Route path="/api" element={<Apis />} >
            <Route path="todo" element={<ToDos />} />
            <Route path="gql" element={<GQL />} />
          </Route>

        </Routes>
      </Router >
    </>
  );

}

export default App;

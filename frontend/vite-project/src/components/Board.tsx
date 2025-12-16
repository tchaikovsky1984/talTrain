import Square from "./Square";

import "./Board.css";

interface BoardProps {
  boardState: string[][];
  updateBoardState: any;
  gameState: string;
  updateGameState: any;
  currentPlayer: string;
  setCurrentPlayer: any;
}

function Board(props: BoardProps) {

  const onSquareClick = (row: number, col: number) => {
    if (props.boardState[row][col] !== "" || props.gameState !== "prog") {
      console.log(props.gameState);
      return;
    }
    else {
      props.boardState[row][col] = props.currentPlayer;
      const newState = props.boardState.map((r) => [...r]);
      props.updateBoardState(newState);
      props.currentPlayer === "X" ? props.setCurrentPlayer("O") : props.setCurrentPlayer("X");
    }

    let i;
    for (i = 0; i < 3; i++) {
      if (props.boardState[i][0] === props.boardState[i][1] &&
        props.boardState[i][0] === props.boardState[i][2] &&
        props.boardState[i][0] !== "") {
        props.updateGameState(props.boardState[i][0]);
        console.log(props.gameState);
      }
    }
    for (i = 0; i < 3; i++) {
      if (props.boardState[0][i] === props.boardState[1][i] &&
        props.boardState[0][i] === props.boardState[2][i] &&
        props.boardState[0][i] !== "") {
        props.updateGameState(props.boardState[0][i]);
        console.log(props.gameState);
      }
    }

    if (props.boardState[0][0] === props.boardState[1][1] &&
      props.boardState[1][1] === props.boardState[2][2] &&
      props.boardState[0][0] !== ""
    ) {
      props.updateGameState(props.boardState[0][0]);
      console.log(props.gameState);
    }

    if (props.boardState[2][0] === props.boardState[1][1] &&
      props.boardState[1][1] === props.boardState[0][2] &&
      props.boardState[2][0] !== ""
    ) {
      props.updateGameState(props.boardState[2][0]);
      console.log(props.gameState);
    }
    console.log("game state:" + props.gameState);
    console.log("current player:" + props.currentPlayer);

  }

  return (
    <div id="container">
      <Square id="0" mark={props.boardState[0][0]} onSquareClick={onSquareClick} />
      <Square id="1" mark={props.boardState[0][1]} onSquareClick={onSquareClick} />
      <Square id="2" mark={props.boardState[0][2]} onSquareClick={onSquareClick} />
      <Square id="3" mark={props.boardState[1][0]} onSquareClick={onSquareClick} />
      <Square id="4" mark={props.boardState[1][1]} onSquareClick={onSquareClick} />
      <Square id="5" mark={props.boardState[1][2]} onSquareClick={onSquareClick} />
      <Square id="6" mark={props.boardState[2][0]} onSquareClick={onSquareClick} />
      <Square id="7" mark={props.boardState[2][1]} onSquareClick={onSquareClick} />
      <Square id="8" mark={props.boardState[2][2]} onSquareClick={onSquareClick} />
    </div>
  );
}

export default Board;

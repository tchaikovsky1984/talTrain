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
    // 1. Guard Clause
    if (props.boardState[row][col] !== "" || props.gameState !== "prog") {
      return;
    }

    // 2. Create New Board (Local Variable)
    const newState = props.boardState.map((r) => [...r]);
    newState[row][col] = props.currentPlayer; // Update the COPY

    // 3. Update React (Visuals)
    props.updateBoardState(newState);
    props.setCurrentPlayer(props.currentPlayer === "X" ? "O" : "X");

    // --- LOGIC SECTION ---

    // We use a LOCAL variable to track the winner immediately
    let detectedWinner = null;

    // 4. Check Rows (Using newState, NOT props.boardState)
    for (let i = 0; i < 3; i++) {
      if (newState[i][0] !== "" &&
        newState[i][0] === newState[i][1] &&
        newState[i][0] === newState[i][2]) {
        detectedWinner = newState[i][0];
      }
    }

    // 5. Check Cols (Using newState)
    for (let i = 0; i < 3; i++) {
      if (newState[0][i] !== "" &&
        newState[0][i] === newState[1][i] &&
        newState[0][i] === newState[2][i]) {
        detectedWinner = newState[0][i];
      }
    }

    // 6. Check Diagonals (Using newState)
    if (newState[0][0] !== "" &&
      newState[0][0] === newState[1][1] &&
      newState[1][1] === newState[2][2]) {
      detectedWinner = newState[0][0];
    }
    if (newState[2][0] !== "" &&
      newState[2][0] === newState[1][1] &&
      newState[1][1] === newState[0][2]) {
      detectedWinner = newState[2][0];
    }

    // 7. Final Decision Tree
    if (detectedWinner) {
      // We found a winner!
      props.updateGameState(detectedWinner);
    } else {
      // No winner yet? THEN check for draw.
      // We check if every cell in newState is filled
      const isDraw = newState.flat().every((cell) => cell !== "");

      if (isDraw) {
        props.updateGameState("draw");
      }
    }
  };

  return (
    <div className="grid w-fit border border-solid border-[#232323] rounded-[10px] p-7.5 grid-cols-[100px_100px_100px] gap-2.5 items-center justify-center">
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

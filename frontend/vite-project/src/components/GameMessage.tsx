import "./GameMessage.css";

interface GameMessageProps {
  gameState: string;
  currentPlayer: string;
}

function GameMessage(props: GameMessageProps) {
  let message;
  console.log("gamemessage func: either gamestate or cur play has changed: g = " + props.gameState + ", c = " + props.currentPlayer);
  if (props.gameState === "prog") {
    message = "It's your turn, Player " + props.currentPlayer + "!";
  }
  else if (props.gameState !== "draw") {
    message = "Aaand, the winner is, Player " + props.gameState + "!";
  }
  else {
    message = "Aaand, its a draw :|";
  }

  return (
    <>
      <div className={props.gameState !== "prog" ? (props.gameState === "draw" ? "msg-container-draw" : "msg-container-winner") : ("msg-container-" + props.currentPlayer)}>
        <h3>{message}</h3>
      </div >
    </>
  );
}

export default GameMessage;

import "./GameMessage.css";

interface GameMessageProps {
  gameState: string;
  currentPlayer: string;
}

function GameMessage(props: GameMessageProps) {
  let message;
  if (props.gameState === "prog") {
    message = "It's your turn, Player " + props.currentPlayer + "!";
  }
  else {
    message = "Aaand, the winner is, Player " + props.gameState + "!";
  }

  return (
    <>
      <div className={props.gameState !== "prog" ? "msg-container-winner" : ("msg-container-" + props.currentPlayer)}>
        <h3>{message}</h3>
      </div >
    </>
  );
}

export default GameMessage;

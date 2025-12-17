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
      <div className={props.gameState !== "prog" ? (props.gameState === "draw" ? "h-15 w-75 bg-[#afafaf] border-2 border-[#8d8d8d] shrink flex justify-center items-center font-[Helvetica] font-bold rounded-[20px]" : "h-15 w-75 bg-[#afdfaf] border-2 border-[#8dbd8d] shrink flex justify-center items-center font-[Helvetica] font-bold rounded-[20px]") : (props.currentPlayer === "X" ? "h-15 w-75 bg-[#aaccdf] border-2 border-[#88aabd] shrink flex justify-center items-center font-[Helvetica] font-bold rounded-[20px]" : "h-15 w-75 bg-[#dfaacc] border-2 border-[#bd88aa] shrink flex justify-center items-center font-[Helvetica] font-bold rounded-[20px]")}>
        <h3>{message}</h3>
      </div >
    </>
  );
}

export default GameMessage;

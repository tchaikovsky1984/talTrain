
interface RestartButtonProps {
  setBoardState: any;
  gameState: string;
  setGameState: any;
}

function RestartButton(props: RestartButtonProps) {
  if (props.gameState === "prog") {
    return (<></>);
  }
  const clickHandler = () => {
    props.setBoardState([["", "", ""], ["", "", ""], ["", "", ""]]);
    props.setGameState("prog");
  };
  return (
    <div className="button-holder">
      <button onClick={clickHandler} className="rs-button"> Restart Game </button>
    </div>
  );
}

export default RestartButton;

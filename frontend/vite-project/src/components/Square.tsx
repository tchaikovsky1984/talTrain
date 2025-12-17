import "./Square.css";

interface SquareProps {
  id: string;
  mark: string | null;
  onSquareClick: (row: number, col: number) => void;
}

function Square(props: SquareProps) {
  const id = Number(props.id);
  const row = id % 3;
  const col = Math.floor(id / 3);
  return (
    <>
      <div className="square" onClick={() => { props.onSquareClick(col, row); }}>
        <h1>{props.mark}</h1>
      </div >
    </>
  );
}

export default Square;

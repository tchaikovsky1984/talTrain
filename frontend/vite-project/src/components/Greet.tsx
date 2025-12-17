import { useParams } from "react-router-dom";

function Greet() {
  const name = useParams();
  return (<h1>{"Hello! " + name.name}</h1>);
}

export default Greet;


interface ChildProps {
  sM: string;
}

function Child(props: ChildProps) {
  return (<h1>{props.sM}</h1>);
}

export default Child;

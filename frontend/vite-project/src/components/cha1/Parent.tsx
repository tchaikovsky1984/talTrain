import Child from "./Child.tsx";

interface ParentProps {
  sM: string;
}

function Parent(props: ParentProps) {
  return (<Child sM={props.sM} />);
}

export default Parent;

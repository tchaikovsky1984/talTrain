import Box from "./box.tsx";

import { useState } from "react";

function Parent() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <>
      <Box x={x} setX={setX} y={y} setY={setY} />
      <h1>{x}</h1>
      <h1>{y}</h1>
    </>
  );
}

export default Parent;

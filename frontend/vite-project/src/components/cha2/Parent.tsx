import { useState } from "react";

import Timer from "./Timer.tsx";

function Parent() {
  const [showTime, setShowTime] = useState(false);

  const handleClick = () => {
    setShowTime(!showTime);
  }

  if (showTime) {
    return (
      <>
        <Timer />
        <button onClick={handleClick}>Stop Timer</button>
      </>
    );
  }
  else {
    return (
      <>
        <button onClick={handleClick}>Start Timer</button>
      </>
    );
  }

}

export default Parent;

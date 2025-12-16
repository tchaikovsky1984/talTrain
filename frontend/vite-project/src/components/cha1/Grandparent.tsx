import { useState } from "react";
import Parent from "./Parent";

function GrandParent() {
  const [secretMessage, setSecretMessage] = useState("React is cool");

  const handleClick = () => {
    setSecretMessage(secretMessage === "React is cool" ? "React is uncool" : "React is cool");
  }

  return (
    <>
      <Parent sM={secretMessage} />
      <button onClick={handleClick}> Change text </button>
    </>);
}

export default GrandParent;

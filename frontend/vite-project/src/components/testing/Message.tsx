import { useState } from "react";

export default function Message() {
  const [msg, setMsg] = useState("Hello World");

  return (
    <div>
      <h1>{msg}</h1>
      <button onClick={() => setMsg("Goodbye World")}>Change Text</button>
    </div>
  );
}

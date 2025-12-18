import { useState } from "react";

function Mirror() {
  const [text, setText] = useState("");

  return (
    <div>
      <form>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="border-2 border-black" />
        <input type="text" contentEditable="false" value={text} className="border-2 border-black mt-2" />
      </form>
    </div>
  );
}

export default Mirror;

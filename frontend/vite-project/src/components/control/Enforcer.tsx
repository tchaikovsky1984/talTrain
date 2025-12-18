import { useState } from "react";

function Enforcer() {
  const [text, setText] = useState("");
  const [nW, setNW] = useState(0);

  const handleTextChange = (e: React.InputEvent) => {
    const newtext = e.target.value;
    const newarr = newtext.split(" ").filter((word: string) => word.length > 0);
    const arr = text.split(" ").filter((word) => word.length > 0);
    if (arr.length === 10 && newarr.length > arr.length) {
      return;
    }

    setText(newtext);
    setNW(newarr.length);
  };

  return (
    <div>
      <textarea className="h-200 w-200 border-black" value={text} onChange={handleTextChange} />
      <h1>{nW}/10</h1>
    </div>
  );
}

export default Enforcer; 

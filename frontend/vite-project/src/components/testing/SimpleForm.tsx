import { useState } from "react";

export default function SimpleForm() {
  const [text, setText] = useState("");
  const [t, setT] = useState("text");

  return (
    <form>
      <label htmlFor="password">password</label>
      <input id="password" onChange={(e) => { setText(e.target.value); }} type={t} />
      <button disabled={(text.length > 0)} onClick={(e) => { setT((t === "text") ? "password" : "text"); }} >Submit</button>
    </form >
  );

}

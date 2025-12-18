import { useState } from "react";

function Settings() {
  const [username, setUsername] = useState("");
  const isValid = username.length > 3;

  return (
    <form>
      <input type="text" value={username} onChange={(e) => { setUsername(e.target.value); console.log(e.target.value); console.log(isValid); }} />
      <button disabled={!isValid} type="submit" onClick={(e) => { e.preventDefault(); console.log("submitted"); }} >Submit</button>
    </form>
  );
}

export default Settings;

import { Link, Outlet } from "react-router-dom";

function Challenge() {
  return (
    <>
      <ul>
        <li>
          <Link to="/challenge/colour" ><p>Colour</p></Link>
        </li>
        <li>
          <Link to="/challenge/timer" ><p>Timer</p></Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Challenge;

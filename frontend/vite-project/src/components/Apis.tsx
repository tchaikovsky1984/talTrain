import { Link, Outlet } from "react-router-dom";

function Apis() {
  return (
    <>
      <ul>
        <li><Link to="/api/todo"><p>TO-DO</p></Link></li>
        <li><Link to={`/api/gql`}><p>R&M</p></Link></li>
      </ul>
      <Outlet />
    </>
  );
}

export default Apis;

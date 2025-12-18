import { Link, Outlet } from "react-router-dom";

function ControlPage() {
  return (
    <>
      <ul>
        <li><Link to="/control/settings"><p>Settings</p></Link></li>
        <li><Link to="/control/mirror"><p>Mirror</p></Link></li>
        <li><Link to="/control/enf"><p>Enforcer</p></Link></li>
        <li><Link to="/control/wizard"><p>Wizard</p></Link></li>
      </ul>
      <Outlet />
    </>
  );
}

export default ControlPage;

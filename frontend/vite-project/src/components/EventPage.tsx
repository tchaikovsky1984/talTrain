import { Link, Outlet } from "react-router-dom";

function EventPage() {
  console.log("im here");
  return (
    <>
      <ul>
        <li><Link to="/events/analytics"><p>Analytics</p></Link></li>
        <li><Link to="/events/access"><p>Access</p></Link></li>
        <li><Link to="/events/hijack"><p>Hijack</p></Link></li>
        <li><Link to="/events/modal"><p>Modal</p></Link></li>
      </ul>
      <Outlet />
    </>
  );
}

export default EventPage;

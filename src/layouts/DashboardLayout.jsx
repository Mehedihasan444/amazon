import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex gap-5 p-5 ">
      <div className="w-[20%] shadow-lg rounded-md p-5">
        <ul>
          <li className=" p-3 mb-2 border-b-2 border-b-red-200">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className=" p-3 mb-2 border-b-2 border-b-red-200">
            <Link to="/dashboard/Profile">Profile</Link>
          </li>
          <li className=" p-3 mb-2 border-b-2 border-b-red-200">
            <Link to="/dashboard/EditProfile">EditProfile</Link>
          </li>
        </ul>
      </div>
      <div className="w-[80%]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;

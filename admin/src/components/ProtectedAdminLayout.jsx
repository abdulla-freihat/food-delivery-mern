// components/AdminLayout.jsx
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const ProtectedAdminLayout = () => {
  return (
    <div>
      <Navbar />
      <hr className="border-2" />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProtectedAdminLayout;

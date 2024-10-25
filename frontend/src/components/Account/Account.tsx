import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

export default function Account() {
  return (
    <div className="flex gap-x-6">
      <SideBar />
      <Outlet />
    </div>
  );
}

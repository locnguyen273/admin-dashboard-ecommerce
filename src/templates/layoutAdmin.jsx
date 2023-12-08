import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const LayoutAdmin = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;

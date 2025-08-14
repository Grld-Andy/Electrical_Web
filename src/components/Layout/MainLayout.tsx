import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="w-full">
      <Navbar/>
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
};

export default MainLayout;
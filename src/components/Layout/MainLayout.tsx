import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  const location = useLocation();

  const showNavbar = location.pathname !== "/";

  return (
    <div className="w-full">
      {showNavbar && <Navbar />}
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = () => {
  return (
    <div className="w-full">
      <Header/>
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
};

export default MainLayout;
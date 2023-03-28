import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
export default function Main() {
  return (
    <>
      <Navbar />
      <div className="container m-auto pt-[32px] pb-[88px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

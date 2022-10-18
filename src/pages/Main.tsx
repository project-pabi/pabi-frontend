import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
export default function Main() {
  return (
    <>
      <Navbar />
      <div className="lg:container px-4 sm:px-6 m-auto pt-[32px] pb-[88px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

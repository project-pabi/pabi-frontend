import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
export default function Main() {
  return (
    <>
      <Navbar />
      <div className="container m-auto pt-[32px] pb-[88px]">
        {/*profile container w-[1344px] m-auto pt-8 pb-[88px] justify-center*/}
        {/*realtime container w-[1280px] m-auto pt-8 pb-[88px] justify-center
        grid grid-cols-12 gap-x-6*/}
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

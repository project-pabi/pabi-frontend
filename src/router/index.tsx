import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import Select from "../pages/Select/Select";
import Write from "../pages/Write/Write";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
export default function index() {
  return (
    <Router>
      <Navbar />
      <div className="lg:container px-4 sm:px-6 m-auto pt-[32px] pb-[88px]">
        <Routes>
          <Route path="/" element={<Write />} />
          <Route path="select" element={<Select />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

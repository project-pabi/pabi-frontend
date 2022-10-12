import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import Select from "../pages/Select/Select";
import Write from "../pages/Write/Write";

export default function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Write />} />
        <Route path="/select" element={<Select />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

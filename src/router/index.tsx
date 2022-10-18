import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import Main from "../pages/Main";
import Login from "../pages/Member/login";
import Select from "../pages/Select/Select";
import Write from "../pages/Write/Write";
export default function index() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Main />}>
          <Route path="" element={<Write />} />
          <Route path="select" element={<Select />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

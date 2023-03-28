import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventPage from "../pages/EventPage/EventPage";
import EventDetailPage from "../pages/EventPage/EvnetDetailPage";
import NotFound from "../pages/NotFound/NotFound";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RealtimePage from "../pages/RealTimePage/RealTimePage";
import Select from "../pages/Select/Select";
import SignEndPage from "../pages/SignEndPage/SignEndPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import Write from "../pages/Write/Write";

export default function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Write />} />
        <Route path="/select" element={<Select />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signend" element={<SignEndPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/realtime" element={<RealtimePage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/event/detail/:id" element={<EventDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

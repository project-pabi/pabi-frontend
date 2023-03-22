import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NotFound from "../pages/NotFound/NotFound";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RealtimePage from "../pages/RealTimePage/RealTimePage";
import SignEndPage from "../pages/SignEndPage/SignEndPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import Main from '../pages/Main';
import { Write } from '@router/write';

export default function index() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Main />}>
          {Write}
        </Route>
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signend" element={<SignEndPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="realtime" element={<RealtimePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

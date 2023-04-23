import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventPage from '../pages/EventPage/EventPage';
import EventDetailPage from '../pages/EventPage/EvnetDetailPage';
import NotFound from '../pages/NotFound/NotFound';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import RealtimePage from '../pages/RealTimePage/RealTimePage';
import SignEndPage from '../pages/SignEndPage/SignEndPage';
import SignInPage from '../pages/SignInPage/SignInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import Main from '../pages/Main';
import { Write } from '@router/write';
import FAQPage from '@/pages/FAQPage/FAQPage';
import FAQCategoryPage from '@/pages/FAQPage/FAQCategoryPage';
import WithdrawPage from '@/pages/WithdrawPage/WithdrawPage';
import AgreeWithdrawPage from '@/pages/WithdrawPage/AgreeWithdrawlPage';
import WithdrawEndPage from '@/pages/WithdrawPage/WithdrawEndPage';
import RealTimeDetail from '@/components/Auction/RealTimeDetail';

export default function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          {Write}
          <Route path="profile" element={<ProfilePage />} />
          <Route path="realtime">
            <Route index element={<RealtimePage />} />
            <Route path="detail/:id" element={<RealTimeDetail />} />
          </Route>

          <Route path="faq">
            <Route index element={<FAQPage />} />
            <Route path="category/:id" element={<FAQCategoryPage />}>
              {/* <Route path="detail/:id" element={<FAQDetailPage />} /> */}
            </Route>
          </Route>
          <Route path="event">
            <Route index element={<EventPage />} />
            <Route path="detail/:id" element={<EventDetailPage />} />
          </Route>
        </Route>
        <Route path="/withdraw" element={<WithdrawPage />} />
        <Route path="/agreewithdraw" element={<AgreeWithdrawPage />} />
        <Route path="/withdrawend" element={<WithdrawEndPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signend" element={<SignEndPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

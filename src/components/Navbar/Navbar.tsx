import { Menu, NavContainer, PabiLogo, SearchBox } from "./Navbar.style";
import Logo from "./logo.svg";
import { Link, useNavigate } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <nav className="border-solid border-b border-[#D9D9D9] h-[200px]">
      <NavContainer>
        <div className="flex items-center justify-around border-solid pb-3 border-[#EEEEEE] border-b-[1px]">
          <Link to="/">
            <PabiLogo src={Logo} />
          </Link>
          <div className="relative">
            <SearchBox placeholder="검색"></SearchBox>
            <div className="absolute top-3 right-5">
              <SearchIcon className="text-[#9E9E9E]" />
            </div>
          </div>
          <div className="flex">
            <Menu>
              <NotificationsNoneIcon className="text-primary" />
            </Menu>
            <Menu>파비톡</Menu>
            <Menu>내 물건 팔고 비우기</Menu>
          </div>
        </div>
        <div className="flex items-center justify-around mt-7">
          <div className="flex">
            <Menu>실시간 경매</Menu>
            <Menu>실시간 경매</Menu>
          </div>
        </div>
      </NavContainer>
    </nav>
  );
};
export default Navbar;

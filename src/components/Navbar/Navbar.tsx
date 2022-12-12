import {
  Menu,
  NavContainer,
  PabiLogo,
  SearchBox,
  SubMenu,
} from "./Navbar.style";
import Logo from "./logo.svg";
import { Link, useNavigate } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <nav className="border-solid border-b border-[#D9D9D9] h-[240px] pt-[100px] ">
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
          <div className="flex items-center">
            <Menu>
              <NotificationsNoneIcon className="text-primary" />
            </Menu>
            <Menu>파비톡</Menu>
            <Menu>내 물건 팔고 비우기</Menu>
          </div>
        </div>
        <div className="flex items-center justify-around mt-7">
          <div className="flex">
            <SubMenu>실시간 경매</SubMenu>
            <SubMenu>이벤트</SubMenu>
            <SubMenu>일반 경매</SubMenu>
          </div>
          <div className="w-[580px]"></div>
          <div
            className="text-primary cursor-pointer font-bold text-base"
            onClick={() => navigate("signin")}
          >
            회원가입/로그인
          </div>
        </div>
      </NavContainer>
    </nav>
  );
};
export default Navbar;

import {
  Menu,
  NavContainer,
  PabiLogo,
  SearchBox,
  Sign,
  SubMenu,
} from "./Navbar.style";
import Logo from "./logo.svg";
import { Link } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import {
  AccountCircleOutlined,
  ChatOutlined,
  LoginOutlined,
} from "@mui/icons-material";

const Navbar = () => {
  return (
    <nav className="border-solid border-b border-[#D9D9D9] h-[189px] pt-12 shadow-[0_4px_20px_4px_rgba(198,198,224,0.8)]">
      <NavContainer>
        <div className="flex items-center justify-between border-solid pb-3 border-[#EEEEEE] border-b-[1px] ">
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
              <ChatOutlined className="text-primary" />
            </Menu>
            <Menu>
              <NotificationsNoneIcon className="text-primary" />
            </Menu>

            <Menu>내 물건 팔고 비우기</Menu>
          </div>
        </div>
        <div className="flex items-center justify-between mt-7">
          <div className="flex">
            <Link to="/realtime">
              <SubMenu>실시간 경매</SubMenu>
            </Link>
            <SubMenu className="cursor-not-allowed mr-0 text-[#9e9e9e]">
              일반 경매
            </SubMenu>
          </div>
          <div className="width"></div>
          <div className="flex">
            <Link to="/signin" className="mr-9">
              <Sign>
                <LoginOutlined
                  sx={{ width: "16px" }}
                  className="mt-[2px] mr-1"
                />
                로그인
              </Sign>
            </Link>
            <Link to="/signup">
              <Sign>
                <AccountCircleOutlined
                  sx={{ width: "16px" }}
                  className="mt-[2px] mr-1"
                />
                회원가입
              </Sign>
            </Link>
          </div>
        </div>
      </NavContainer>
    </nav>
  );
};
export default Navbar;

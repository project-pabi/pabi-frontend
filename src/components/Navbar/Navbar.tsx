import { Menu, NavContainer, PabiLogo } from "./Navbar.style";
import Logo from "./logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <nav className="border-solid border-b border-[#D9D9D9]">
      <div className="max-w-[1700px] m-auto  h-[80px]">
        <NavContainer>
          <div className="flex items-center">
            <Link to="/">
              <PabiLogo src={Logo} />
            </Link>
          </div>

          <ul className="flex flex-1 items-center justify-center">
            <Menu>인기매물</Menu>
            <Menu>진행 중인 매물</Menu>
            <Menu>임박매물</Menu>
            <Menu>게시글 작성</Menu>
          </ul>
          <ul className="flex items-center justify-end">
            <Menu
              onClick={() => {
                navigate("/signup");
              }}
            >
              회원가입
            </Menu>
            <Menu
              onClick={() => {
                navigate("/signin");
              }}
            >
              로그인
            </Menu>
          </ul>
        </NavContainer>
      </div>
    </nav>
  );
};
export default Navbar;

import { Menu, Nav, PabiLogo } from "./Navbar.style";
import Logo from "./logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-28">
      <Nav>
        <Link to="/">
          <PabiLogo src={Logo} />
        </Link>
        <ul className="flex">
          <Menu>인기매물</Menu>
          <Menu>진행 중인 매물</Menu>
          <Menu>임박매물</Menu>
          <Menu>게시글 작성</Menu>
        </ul>
        <ul className="flex">
          <Menu>회원가입</Menu>
          <Menu>로그인</Menu>
        </ul>
      </Nav>
    </nav>
  );
};
export default Navbar;

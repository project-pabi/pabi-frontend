import { ReactComponent as Logo } from "./logo.svg";

export default function Header() {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full  z-20 top-0 left-0 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto h-28">
        <a href="/" className="flex items-center">
          <Logo className="mr-3 h-6 sm:h-9" />
          <span className="self-center text-xl font-semibold whitespace-nowrap"></span>
        </a>
        <div className="flex md:order-2">
          <div className="text-#000000 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">
            회원가입
          </div>
          <div className="text-#000000 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">
            로그인
          </div>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <div className="block py-2 pr-4 pl-3 text-#000000 text-xl">
                인기매물
              </div>
            </li>
            <li>
              <div className="block py-2 pr-4 pl-3 text-#000000 text-xl">
                진행 중인 매물
              </div>
            </li>
            <li>
              <div className="block py-2 pr-4 pl-3 text-#000000 text-xl">
                임박매물
              </div>
            </li>
            <li>
              <div className="block py-2 pr-4 pl-3 text-#000000 text-xl">
                게시글 작성
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

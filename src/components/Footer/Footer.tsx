import { useEffect, useState } from "react";
import { MainBox, MainContent, PabiLogo } from "./Footer.style";
import { useLocation } from "react-router-dom";
import Logo from "./logo.svg";

const Footer = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isActive, setIsActive] = useState(path);

  useEffect(() => {
    setIsActive(
      path === "/signup" || path === "/signin"
        ? "bg-primary-200 border-solid pt-8 pb-10 shadow-[0_4px_20px_4px_rgba(198,198,224,0.8)]"
        : "border-solid pt-8 pb-10 shadow-[0_4px_20px_4px_rgba(198,198,224,0.8)]"
    );
  }, [path]);
  return (
    <footer className={isActive}>
      <div className="max-w-[1280px] mx-auto">
        <MainBox>
          <PabiLogo src={Logo} />

          <div className="flex">
            <MainContent>팀소개</MainContent>
            <MainContent>서비스 이용약관</MainContent>
            <MainContent>개인정보 취급방침</MainContent>
            <MainContent>위치기반서비스 이용약관</MainContent>
          </div>
        </MainBox>
        <div className="mt-[30px] text-xs text-gray-900">TEAM YEOWOO-BI</div>
        <div className="mt-5 text-xs text-gray-900">
          주소: 경기도 성남시 중원구 갈마치로 288번길 14, SKV1타워 A동 1003호
        </div>
        <div className="mt-5 mb-7 text-xs text-gray-900">
          MAIL: pa-bi@pa-bi.com
        </div>
      </div>
      <div className="border-solid border-gray-200 border-b w-full"></div>
      <div className="mt-[10px] text-xs text-gray-900 text-right max-w-[1280px] mx-auto">
        Copyright ©2022 파비 Pa-Bi All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;

import { MainBox, MainContent, PabiLogo } from "./Footer.style";
import Logo from "./logo.svg";

const Footer = () => {
  return (
    <footer className="border-solid h-[100px] pt-8 max-w-[1400px] m-auto border-t-[1px]">
      <MainBox>
        <PabiLogo src={Logo} />

        <div className="flex">
          <MainContent>팀소개</MainContent>
          <MainContent>서비스 이용약관</MainContent>
          <MainContent>개인정보 취급방침</MainContent>
          <MainContent>위치기반서비스 이용약관</MainContent>
        </div>
      </MainBox>
      <div className="mt-[30px] text-xs text-[#212121]">TEAM YEOWOO-BI</div>
      <div className="mt-5 text-xs text-[#212121]">
        주소: 경기도 성남시 중원구 갈마치로 288번길 14, SKV1타워 A동 1003호
      </div>
      <div className="mt-5 text-xs text-[#212121]">MAIL: pa-bi@pa-bi.com</div>
      <div className="mt-[38px] text-xs text-[#212121] float-right mb-10">
        Copyright ©2022 파비 Pa-Bi All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;

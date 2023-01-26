import { MainBox, MainContent, PabiLogo } from "./Footer.style";
import Logo from "./logo.svg";

const Footer = () => {
  return (
    <footer className=" border-solid pt-8 pb-10 shadow-[0_4px_20px_4px_rgba(198,198,224,0.8)]">
      <div className="max-w-[1344px] m-auto">
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
        <div className="mt-[38px] text-xs text-[#212121] text-right">
          Copyright ©2022 파비 Pa-Bi All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;

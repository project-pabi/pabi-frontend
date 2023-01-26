import { SubmitHandler, useForm } from "react-hook-form";
import {
  Button,
  Container,
  ErrorMessage,
  Input,
  PabiLogoMain,
  SignInContainer,
  SignUp,
  Title,
  WarnIcon,
} from "./SignIn.style";
import Logo from "./logo.svg";
import { Link } from "react-router-dom";
import warn from "./warn.png";
import { MainBox, MainContent, PabiLogo } from "../Footer/Footer.style";
import Penguin from "./penguin.png";

interface FormValues {
  email: string;
  password: string;
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div
      className="w-100%"
      style={{
        background: "linear-gradient(115.73deg, #7B61FF 0%, #A2A1E7 57.81%)",
      }}
    >
      <img
        src={Penguin}
        alt="Penguin"
        className="absolute w-[40%] right-[100px] top-[280px] z-10"
      ></img>
      {/* <div className="absolute rounded-[50%] w-[80%] h-[80%] bg-slate-400 right-[-20%]"></div> */}
      <Container>
        <SignInContainer>
          <Link to="/">
            <PabiLogoMain src={Logo} />
          </Link>
          <Title>로그인</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              {errors.email && <WarnIcon src={warn} />}
              <Input
                id="email"
                type="text"
                placeholder="아이디"
                className={errors.email && "border-2 border-[#ED4D4D]"}
                {...register("email", {
                  required: true,
                  pattern: /^[\w.]+@[\w.]+\.[A-Za-z]{2,3}$/i,
                })}
              />
              {errors.email && (
                <ErrorMessage className="text-[#ED4D4D]">
                  올바르지 않은 이메일 형식입니다.
                </ErrorMessage>
              )}
            </div>
            <div className="mb-4">
              {errors.password && <WarnIcon src={warn} />}
              <Input
                id="password"
                type="password"
                placeholder="비밀번호"
                className={errors.password && "border-2 border-[#ED4D4D]"}
                {...register("password", { required: true })}
              />
              {errors.password && (
                <ErrorMessage className="text-[#ED4D4D]">
                  비밀번호를 입력해주세요.
                </ErrorMessage>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex">
                <input id="save" type="checkbox" className="mr-[6px]" />
                <label htmlFor="save" className="text-[#757575] text-xs">
                  아이디 저장
                </label>
              </div>
              <div className="text-[#757575] text-xs">
                아이디 / 비밀번호 찾기
              </div>
            </div>

            <Button type="submit">로그인하기</Button>
            <div className="text-center text-sm text-[#757575] py-6">
              아직 PA-BI의 회원이 아니신가요?
            </div>
            <Link to="/signup">
              <SignUp>회원가입하러 가기</SignUp>
            </Link>
          </form>
        </SignInContainer>
      </Container>
      {/* footer  */}
      <footer
        style={{
          background:
            "linear-gradient(108.46deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
        }}
        className=" border-solid pt-8 pb-10"
      >
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
          <div className="mt-5 text-xs text-[#212121]">
            MAIL: pa-bi@pa-bi.com
          </div>
          <div className="mt-[38px] text-xs text-[#212121] text-right">
            Copyright ©2022 파비 Pa-Bi All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

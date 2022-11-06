import { SubmitHandler, useForm } from "react-hook-form";
import {
  Button,
  ErrorMessage,
  Input,
  PabiLogo,
  SignInContainer,
  SignUp,
  Title,
  WarnIcon,
} from "./SignIn.style";
import Logo from "./logo.svg";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import warn from "./warn.png";

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
    <div className="bg-[url('./bgimg.svg')] p-1 bg-cover bg-center bg-no-repeat ">
      <SignInContainer>
        <Link to="/">
          <PabiLogo src={Logo} />
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
            <div className="text-[#757575] text-xs">아이디 / 비밀번호 찾기</div>
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
      <Footer />
    </div>
  );
}

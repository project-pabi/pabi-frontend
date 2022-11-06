import { SubmitHandler, useForm } from "react-hook-form";
import {
  Button,
  Input,
  PabiLogo,
  SignInContainer,
  SignUp,
  Title,
} from "./SignIn.style";
import Logo from "./logo.svg";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

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
            <Input
              id="email"
              type="email"
              placeholder="아이디"
              className={errors.email && "border-2 border-[#ED4D4D]"}
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
              <div className="text-[#ED4D4D]">
                올바르지 않은 이메일 형식입니다.
              </div>
            )}
          </div>
          <div className="mb-4">
            <Input
              id="password"
              type="password"
              placeholder="비밀번호"
              className={errors.password && "border-2 border-[#ED4D4D]"}
              {...register("password", { required: true })}
            />
            {errors.password && (
              <div className="text-[#ED4D4D]">비밀번호를 입력해주세요.</div>
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

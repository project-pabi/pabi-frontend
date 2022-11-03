import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import {
  Button,
  ErrorMessage,
  Input,
  Label,
  PabiLogo,
  SignInContainer,
  Title,
} from "./SignUp.style";
import Logo from "./logo.svg";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Postcode } from "./Postcode";

interface FormValues {
  nickname: string;
  email: string;
  password: string;
  password_confirm: string;
  address: string;
}

export default function SignUp() {
  const [address, setAddress] = useState("");
  const [visible, setVisible] = useState(false);
  // form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  const password = useRef<string>();
  password.current = watch("password");
  // address
  useEffect(() => {
    if (visible === true) {
      return;
    }
    if (address !== "") {
      setVisible((visible) => !visible);
    }
  }, [address, visible]);
  const open = useDaumPostcodePopup(
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
  );
  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
      setAddress(fullAddress);
    }
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  console.log(address);
  return (
    <div className="bg-[#C5C5F0] pt-8">
      <Link to="/">
        <PabiLogo src={Logo} />
      </Link>
      <SignInContainer>
        <Title>회원가입</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <Label>닉네임</Label>
            <Input
              id="nickname"
              type="text"
              placeholder="닉네임을 입력해주세요"
              {...register("nickname", { required: true })}
            />
            {errors.nickname && (
              <ErrorMessage>닉네임을 입력해주세요.</ErrorMessage>
            )}
          </div>
          <div className="mb-2">
            <Label>아이디(이메일)</Label>
            <Input
              id="email"
              type="email"
              placeholder="예: user@pa-bi.com"
              {...register("email", {
                required: true,
                pattern: /^[\w.]+@[\w.]+\.[A-Za-z]{2,3}$/i,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <ErrorMessage>이메일을 입력해주세요.</ErrorMessage>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <ErrorMessage>올바르지 않은 이메일 형식입니다.</ErrorMessage>
            )}
          </div>
          <div className="mb-2">
            <Label>비밀번호</Label>
            <Input
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 20,
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <ErrorMessage>비밀번호를 입력해주세요.</ErrorMessage>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <ErrorMessage>8-20자 이내로 입력해주세요.</ErrorMessage>
            )}
            {errors.password && errors.password.type === "maxLength" && (
              <ErrorMessage>8-20자 이내로 입력해주세요.</ErrorMessage>
            )}
          </div>
          <div className="mb-2">
            <Label>비밀번호 확인</Label>
            <Input
              id="password_confirm"
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
              {...register("password_confirm", {
                required: true,
                validate: (value) => value === password.current,
              })}
            />
            {errors.password_confirm &&
              errors.password_confirm.type === "required" && (
                <ErrorMessage>비밀번호를 한번 더 입력해주세요.</ErrorMessage>
              )}
            {errors.password_confirm &&
              errors.password_confirm.type === "validate" && (
                <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
              )}
          </div>
          <div className="mb-2">
            <Label>
              배송 받을 주소<span className="text-[#BDBDBD]"> (선택)</span>
            </Label>
            {visible && (
              <Input
                id="address"
                type="text"
                value={address}
                placeholder="주소"
                readOnly
                {...register("address")}
              />
            )}
            {visible && (
              <Input
                type="text"
                placeholder="상세주소"
                // {...register("address")}
              />
            )}
            {visible === false ? (
              <Button
                type="button"
                className="bg-[#A1A1E8]"
                onClick={() => {
                  handleClick();
                }}
              >
                🍳주소 검색
              </Button>
            ) : (
              <Button
                type="button"
                className="bg-[#A1A1E8]"
                onClick={() => {
                  handleClick();
                }}
              >
                🍳재검색
              </Button>
            )}
          </div>
          <span className="text-xs text-[#757575]">
            물건을 구매한 경우 배송 주소가 자동으로 입력되어 편리하게 <br />{" "}
            이용하실 수 있습니다.
          </span>
          <div className="text-center text-sm text-[#757575] py-6">
            <input type="checkbox" placeholder="agree" />
            서비스 이용, 개인정보 수집, 위치정보 활용 동의
            <span className=" text-primary"> (더보기)</span>
          </div>
          <Button className="bg-[#0000D8]" type="submit">
            회원가입 하기
          </Button>
        </form>
      </SignInContainer>
      <Footer />
    </div>
  );
}

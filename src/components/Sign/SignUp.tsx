import {SubmitHandler, useForm, FormProvider} from "react-hook-form";
import {useEffect, useState, useRef} from "react";
import {useDaumPostcodePopup} from "react-daum-postcode";
import {
  Button,
  Container,
  ErrorMessage,
  Input,
  Label,
  PabiLogoMain,
  ReSearchIcon,
  SearchIcon,
  SignInContainer,
  Title,
  WarnIcon,
} from "./SignUp.style";
import Logo from "./logo.svg";
import {Link, useNavigate} from "react-router-dom";
import warn from "@assets/images/warn.png";
import search from "./search.png";
import axios from "axios";
import BaseInput from "@component/InputField/BaseInput";
import {InputProps} from "@component/InputField/BaseInput.type";


interface FormValues {
  nickname: string;
  email: string;
  password: string;
  password_confirm: string;
  address: string;
  addressEtc: string;
}

export default function SignUp() {
  const [address, setAddress] = useState("");
  const [visible, setVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [zipcode, setZipcode] = useState();
  const navigate = useNavigate();
  // form
  const methods = useForm<FormValues>();
  const {register, handleSubmit, watch, setFocus, formState: {errors}} = methods;

  const emailForm: InputProps<FormValues> = {
    name: "email",
    type: "text",
    className: 'input-sm',
    placeholder: "예: user@pa-bi.com",
    option: {
      required: true,
      pattern: /^[\w.]+@[\w.]+\.[A-Za-z]{2,3}$/i,
    },
    errorMessage: {
      required: '이메일을 입력해주세요.',
      pattern: '올바르지 않은 이메일 형식입니다.'
    }
  }

  const nicknameForm: InputProps<FormValues> = {
    name: "nickname",
    type: "text",
    className: 'input-sm',
    placeholder: "닉네임을 입력해주세요",
    option: {
      required: true,
    },
    errorMessage: {
      required: '닉네임을 입력해주세요.',
    }
  }

  const passwordForm: InputProps<FormValues> = {
    name: "password",
    type: "password",
    className: 'input-sm',
    placeholder: "비밀번호를 입력해주세요",
    option: {
      required: true,
      minLength: 8,
      maxLength: 20,
    },
    errorMessage: {
      required: '비밀번호를 입력해주세요.',
      minLength: '8-20자 이내로 입력해주세요.',
      maxLength: '8-20자 이내로 입력해주세요.',
    }
  }

  const passwordCheckForm: InputProps<FormValues> = {
    name: "password_confirm",
    type: "password_confirm",
    className: 'input-sm',
    placeholder: "비밀번호를 한번 더 입력해주세요",
    option: {
      required: true,
      validate: (value) => value === password.current,
    },
    errorMessage: {
      required: '비밀번호를 한번 더 입력해주세요.',
      validate: '비밀번호가 일치하지 않습니다.',
    }
  }

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    axios
    .post("http://localhost:8400/", {
      email: data.email,
      nickName: data.nickname,
      password: data.password,
      address: {
        address: data.address,
        addressEtc: data.addressEtc,
        zipcode: zipcode,
      },
    })
    .then((response) => {
      navigate("/signend");
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  };
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
    let zonecode = data.zonecode;

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
      setZipcode(zonecode);
    }
  };
  const handleClick = () => {
    open({onComplete: handleComplete});
  };

  // focus
  const focusEvent = () => {
    setFocus("address");
  };

  return (
      <div className="bg-primary-300">
        <FormProvider {...methods} >
          <Link to="/">
            <PabiLogoMain src={Logo}/>
          </Link>
          <Container>
            <SignInContainer>
              <Title>회원가입</Title>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <Label>
                    <p className="mb-2">닉네임</p>
                    <BaseInput {...nicknameForm}></BaseInput>
                  </Label>
                </div>
                <div className="mb-4">
                  <div className="grow">
                    <Label>
                      <p className="mb-2">아이디(이메일)</p>
                      <BaseInput {...emailForm}></BaseInput>
                    </Label>
                  </div>
                </div>
                <div className="mb-4">
                  <Label>
                    <p className="mb-2">비밀번호</p>
                    <BaseInput {...passwordForm}></BaseInput>
                  </Label>

                </div>
                <div className="mb-4">
                  <Label>
                    <p className="mb-2">비밀번호 확인</p>
                    <BaseInput {...passwordCheckForm}></BaseInput>
                  </Label>
                </div>
                <div className="mb-4">
                  <Label>
                    배송 받을 주소<span className="text-gray-400"> (선택)</span>
                  </Label>
                  {visible && (
                      <Input
                          id="address"
                          type="text"
                          value={address}
                          placeholder="주소"
                          className={errors.address && "border-2 border-system-error"}
                          readOnly
                          {...register("address")}
                      />
                  )}
                  {visible && (
                      <Input
                          type="text"
                          placeholder="상세주소"
                          className={
                              errors.addressEtc && "border-2 border-system-error"
                          }
                          {...register("addressEtc")}
                      />
                  )}
                  {visible === false ? (
                      <Button
                          type="button"
                          className="bg-primary-300"
                          onClick={() => {
                            handleClick();
                            focusEvent();
                          }}
                      >
                        <SearchIcon src={search}/>
                        주소 검색
                      </Button>
                  ) : (
                      <button
                          type="button"
                          className="bg-primary w-[95px] h-8 rounded-5 text-white text-sm mt-3 pl-4"
                          onClick={() => {
                            handleClick();
                            focusEvent();
                          }}
                      >
                        <ReSearchIcon src={search}/> 재검색
                      </button>
                  )}
                </div>
                <span className="text-xs text-gray-600">
              물건을 구매한 경우 배송 주소가 자동으로 입력되어 편리하게 이용하실
              수 있습니다.
            </span>
                <div className="flex text-sm text-gray-600 pt-12 pb-7 items-center justify-center">
                  <input
                      onClick={() => {
                        setIsClicked(!isClicked);
                      }}
                      id="agree"
                      placeholder="agree"
                      type="checkbox"
                      className="mr-1"
                  />

                  <Label htmlFor="agree">
                    서비스 이용, 개인정보 수집, 위치정보 활용 동의
                    <span className=" text-primary"> (더보기)</span>
                  </Label>
                </div>
                <Button className="bg-primary disabled:bg-gray-400" type="submit" disabled={!isClicked}>
                  회원가입 하기
                </Button>
              </form>
            </SignInContainer>
          </Container>
        </FormProvider>
      </div>
  );
}

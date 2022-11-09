import { Link } from "react-router-dom";
import endIg from "./endIg.png";

export default function SignEnd() {
  return (
    <div className="mt-60 mx-auto text-center ">
      <p className="font-bold text-[36px] leading-[53px]">
        회원가입이 모두 끝났어요. <br /> 이제부터 즐겁게 팔고 비워요!
      </p>
      <img src={endIg} alt="endIg" className="w-[370px] mx-auto" />
      <Link to="/signin">
        <button className="bg-[#0000D8] w-32 h-10 mb-40 text-[#FFFFFF]  text-sm rounded-[20px]">
          로그인 하러 가기
        </button>
      </Link>
    </div>
  );
}

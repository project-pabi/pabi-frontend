import { Link } from 'react-router-dom';
import endIg from './endIg.png';

export default function WithdrawEnd() {
  return (
    <div className="mt-60 mx-auto text-center ">
      <p className="font-bold text-Headline3">
        다음에 꼭 다시 만나요!
        <br /> <span className="text-primary">더 나은 모습으로 기다릴게요</span>
      </p>
      <img src={endIg} alt="endIg" className="w-[370px] mx-auto" />
      <Link to="/">
        <button className="bg-primary w-32 h-10 mb-40 text-white  text-sm rounded-5">홈으로 돌아가기</button>
      </Link>
    </div>
  );
}

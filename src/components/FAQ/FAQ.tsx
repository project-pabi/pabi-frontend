import { Category, CategoryBox, PopularBox, PopularTitle, PopularValue, SubTitle, Title } from './FAQ.style';
import SearchIcon from '@mui/icons-material/Search';
import FAQData from './FAQPopularData';
import { Link } from 'react-router-dom';
import FAQCategoryData from './FAQCategoryData';
import { useState } from 'react';

const FAQ = () => {
  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };
  const [clickedItemId, setClickedItemId] = useState<number | null>(null);

  return (
    <>
      <Title>FAQ</Title>
      <SubTitle>자주 묻는 질문은 FAQ를 통해 답변을 찾아보세요</SubTitle>
      <div className="relative my-8">
        <input
          type="text"
          placeholder="궁금한 내용을 검색해보세요"
          className="border-2 border-solid border-gray-500 rounded-5 pl-6 pr-10 h-12 w-full text-sm"
        />
        <div className="absolute top-3 right-5">
          <SearchIcon className="text-gray-500" />
        </div>
      </div>
      <div className="text-section-title-1 mb-5">인기 질문</div>
      <PopularBox>
        {FAQData.map((data) => {
          const valueLength = data.id === clickedItemId ? 500 : 60;
          return (
            <div
              className="p-[10px] min-h-[126px] pb-8 border-solid border-b-2 border-gray-300 box-content mb-[30px]"
              key={data.id}>
              <PopularTitle
                onClick={() => setClickedItemId((prevClickedItemId) => (prevClickedItemId === data.id ? null : data.id))}>
                {data.title}
              </PopularTitle>
              <PopularValue>{truncate(data.value, valueLength)}</PopularValue>
            </div>
          );
        })}
      </PopularBox>
      <div className="text-section-title-1 mb-5">카테고리에서 찾기</div>
      <CategoryBox>
        {FAQCategoryData.map((data, index) => {
          return (
            <Link to={`category/${index}`} key={index}>
              <Category>{data.title}</Category>
            </Link>
          );
        })}
      </CategoryBox>
      <div className="rounded-5 flex justify-between py-[30px] px-28 items-center mt-[38px]">
        <div>
          <div className="text-section-title-1 font-bold">파비가 도와드릴게요</div>
          <div className="text-base">찾는 내용이 없다면 파비팀에게 직접 궁금한 점을 보내주세요.</div>
        </div>
        <Link to="/signin">
          <div className="bg-primary text-white py-3 px-[146px] text-center rounded-5 text-base">로그인 또는 회원가입</div>
        </Link>
      </div>
    </>
  );
};
export default FAQ;

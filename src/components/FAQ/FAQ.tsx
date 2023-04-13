import { Category, CategoryBox, PopularBox, PopularTitle, PopularValue, SubTitle, Title } from './FAQ.style';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import FAQPopularData from './FAQPopularData';
import FAQCategoryData from './FAQCategoryData';
import { useState } from 'react';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const FAQ = () => {
  const [isOpen, setIsOpen] = useState<boolean[]>([]);

  const handleClick = (index: number) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

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
        {FAQPopularData.map((data, index) => {
          return (
            <div key={index}>
              <ListItemButton style={{ padding: 0 }} onClick={() => handleClick(index)}>
                <ListItemText
                  primary={
                    <div className="flex items-center py-4 border-solid border-b-2 border-gray-300 cursor-pointer">
                      <div className="text-primary font-bold text-base mr-[10px]">Q.</div>
                      <div className="text-sm font-medium">{data.title}</div>
                    </div>
                  }
                />
                {isOpen[index] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={isOpen[index]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding></List>
                <div className="flex items-center py-4 border-solid border-b-2 border-gray-300 cursor-pointer mr-6">
                  <div className="text-sm font-medium">{data.value}</div>
                </div>
              </Collapse>
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

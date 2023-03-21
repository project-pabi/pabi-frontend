import { Close } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import {
  CategoryChip,
  CategoryChipText,
  CheckBox,
  CheckBoxLabel,
  CheckBoxWrapper,
  Container,
  ItemContainer,
  ItemInsideContainer,
  RightLine,
} from "./RealTime.style";
import RealTimeItem from "./RealTimeItem";
import Category from "../Category";
import { useCategoryStore } from "../../store/categoryStore";

const RealTime = () => {
  const { checkedList, setCheckedList, priceRange, setPriceRange } =
    useCategoryStore((state) => state);

  useEffect(() => {
    if (checkedList.length === 15) {
    }
  });

  const onRemove = (item: string) => {
    setCheckedList(checkedList.filter((el: string) => el !== item));
  };

  const onCheckReset = () => {
    setCheckedList([]);
  };

  const [isChecked, setIsChecked] = useState(true);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Container>
      <Category></Category>
      <ItemContainer>
        <div className="flex mb-10 items-center justify-between">
          <div className="text-section-title-1">전체 123건</div>
          <div className="relative">
            <input
              type="text"
              placeholder="파비"
              className="border-2 border-solid border-gray-200 rounded-5 pl-6 pr-10 h-12 w-[200px] text-sm"
            />
            <div className="absolute top-3 right-5">
              <SearchIcon className="text-gray-500" />
            </div>
          </div>
        </div>
        <div className="mb-5">
          {checkedList.length === 15 ? (
            <CategoryChip key="all">
              <CategoryChipText>전체</CategoryChipText>
              <div onClick={onCheckReset} className="cursor-pointer">
                <Close sx={{ width: "16px", color: "#424242" }} />
              </div>
            </CategoryChip>
          ) : (
            checkedList.map((item: string) => {
              return (
                <CategoryChip key={item}>
                  <CategoryChipText>
                    {checkedList.length === 15 ? "전체" : item}
                  </CategoryChipText>
                  <div
                    onClick={() => onRemove(item)}
                    className="cursor-pointer"
                  >
                    <Close sx={{ width: "16px", color: "#424242" }} />
                  </div>
                </CategoryChip>
              );
            })
          )}
          <div className="inline-flex rounded-5 px-4 py-[10px] items-center w-auto mr-[10px] my-[10px] border border-solid">
            <div className="font-normal	text-sm	text-gray-800 ">
              {priceRange[0]} ~ {priceRange[1]} 원
            </div>
          </div>
        </div>
        <div className="flex mb-8 justify-between">
          <div className="flex h-[22px] items-center text-gray-800 font-medium text-xs">
            <RightLine>등록순</RightLine>
            <RightLine>조회수순</RightLine>
            <RightLine>낮은 가격순</RightLine>
            <div className="pl-2">높은 가격순</div>
          </div>
          <div className="flex">
            <CheckBoxWrapper>
              <CheckBox
                id="checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={toggleSwitch}
              />
              <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>

            <span className="pl-2">지금 진행중인 경매</span>
          </div>
        </div>
        {/* 상품 리스트 */}
        <ItemInsideContainer>
          <RealTimeItem />
          <RealTimeItem />
          <RealTimeItem />
        </ItemInsideContainer>
      </ItemContainer>
    </Container>
  );
};
export default RealTime;

import { ExpandLess, ExpandMore, Refresh } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import {
  CategoryCheckBox,
  CategoryDiv,
  CategoryLabel,
  HowMuch,
  PrettoSlider,
} from "./Auction/RealTime.style";
import tw from "twin.macro";
import CategoryType from "./Auction/CategoryData";
import { useCategoryStore } from "../store/categoryStore";

function valuetext(value: number) {
  return `${value}`;
}

export const CategoryContainer = tw.div`
col-span-3 mt-[90px]
`;

const Category = () => {
  const { checkedList, setCheckedList, priceRange, setPriceRange } =
    useCategoryStore((state) => state);

  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const onCheckedElement = (checked: boolean, item: string) => {
    if (checked) {
      setCheckedList([...checkedList, item]);
      return;
    }

    setCheckedList(checkedList.filter((el: string) => el !== item));
  };

  const onCheckedAll = (checked: boolean) => {
    if (checked) {
      const checkedListArray: string[] = [];
      CategoryType.forEach((el) => checkedListArray.push(el));
      setCheckedList(checkedListArray);
      return;
    }

    setCheckedList([]);
  };

  const onCheckReset = () => {
    setCheckedList([]);
  };

  useEffect(() => {
    if (checkedList.length === 15) {
    }
  });

  return (
    <CategoryContainer>
      <div
        className="px-4 font-medium text-section-title-2 mb-10 text-gray-800 flex justify-between items-center"
        onClick={onCheckReset}
      >
        필터 <Refresh className="cursor-pointer" />
      </div>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="카테고리" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit className="pl-4">
        <List component="div" disablePadding>
          <CategoryDiv>
            <CategoryCheckBox
              id="all"
              onChange={(e) => onCheckedAll(e.target.checked)}
              checked={
                checkedList.length === 0
                  ? false
                  : checkedList.length === CategoryType.length
                  ? true
                  : false
              }
            />
            <CategoryLabel htmlFor="all">전체</CategoryLabel>
            <div className="text-gray-800 text-sm">123</div>
          </CategoryDiv>
          {CategoryType.map((item, index) => {
            return (
              <CategoryDiv key={index}>
                <CategoryCheckBox
                  id={item}
                  value={item}
                  onChange={(e) => {
                    onCheckedElement(e.target.checked, e.target.value);
                  }}
                  checked={checkedList.includes(item) ? true : false}
                />
                <CategoryLabel htmlFor={item}>{item}</CategoryLabel>
                <div className="text-gray-800 text-sm">123</div>
              </CategoryDiv>
            );
          })}
        </List>
        <div className="mt-9">
          <div className="text-base mb-5">가격</div>
          <PrettoSlider
            className="mb-5"
            min={0}
            step={1}
            max={100000}
            getAriaLabel={() => "Temperature range"}
            value={priceRange}
            onChange={handleChange}
            getAriaValueText={valuetext}
          />
          <div className="flex justify-between items-center">
            <HowMuch>{priceRange[0]}원</HowMuch>
            <div>-</div>
            <HowMuch>{priceRange[1]}원</HowMuch>
          </div>
        </div>
      </Collapse>
    </CategoryContainer>
  );
};
export default Category;

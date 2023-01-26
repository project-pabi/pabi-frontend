import { Slider } from "@mui/material";
import styled from "styled-components";
import tw from "twin.macro";

export const Container = tw.div`
container w-[1280px] m-auto pt-8 pb-[88px] justify-center
grid grid-cols-12 gap-x-6
`;

export const CategoryContainer = tw.div`
col-span-3 mt-[124px]
`;
export const CategoryDiv = tw.div`
mt-4 first-of-type:mt-5
`;
export const CategoryCheckBox = styled.input.attrs({ type: "checkbox" })`
  ${tw`
  w-[15px] h-[15px] mr-[6.5px] align-middle mb-[2px] cursor-pointer 
  `}
`;
export const CategoryLabel = tw.label`
text-sm font-normal cursor-pointer 
`;
export const PrettoSlider = styled(Slider)({
  color: "#BDBDBD !important",
  height: 6,
  "& .MuiSlider-rail": {
    border: "none",
    color: "#D9D9D9 !important",
  },
  "& .MuiSlider-track": {
    border: "none",
    color: "#0000D8 !important",
  },
  "& .MuiSlider-thumb": {
    height: 16,
    width: 16,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#0000D8",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});
export const ItemContainer = tw.div`
col-span-9 mt-[124px] 
`;
export const ItemInsideContainer = tw.div`
grid grid-cols-9 gap-x-6
`;
export const Item = tw.div`
col-span-3 h-[380px] shadow-[4px_4px_12px_rgba(0,0,0,0.25)] rounded-[20px] mb-9
`;
export const ItemImgBox = tw.div`
h-[224px] overflow-hidden bg-cover relative
`;
export const ItemImg = tw.img`
rounded-tl-[20px] rounded-tr-[20px] h-100% object-cover
`;
export const Live = tw.div`
absolute bg-[#ED4D4D] rounded-[15px] px-2 text-white text-base z-10 top-4 left-5
`;
export const Heart = tw.div`
absolute bg-[#EEEEEE] rounded-[50%] z-10 top-4 right-4 w-10 h-10 text-primary text-center leading-[35px] cursor-pointer
`;
export const FreeDelivery = tw.div`
absolute bg-[rgba(0, 0, 0, 0.4)] rounded-[15px] px-2 py-[2px] text-white text-sm z-10 bottom-10 right-4
`;
export const Status = tw.div`
absolute bg-[rgba(0, 0, 0, 0.4)] px-2 text-white text-base z-10 bottom-0 font-bold w-100% h-[32px] flex items-center
px-4 py-1 justify-between
`;
export const ItemText = tw.div`
p-5 h-[156px]
`;
export const Price = tw.div` 
text-[24px] leading-[28px] font-bold text-primary mb-1
`;
export const ItemTitle = tw.div`
text-base text-[#212121] font-normal mb-2
`;
export const KeywordBox = tw.div`
flex mb-2
`;
export const Keyword = tw.div`
bg-[#EEEEEE] rounded-[20px] px-2 py-[2px] font-normal text-xs text-[#424242] mr-1 last:mr-0
`;
export const Locate = tw.div`
text-xs text-[#212121] font-normal flex items-center
`;

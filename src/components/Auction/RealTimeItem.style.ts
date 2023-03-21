import tw from "twin.macro";

export const FreeDelivery = tw.div`
absolute bg-[rgba(0, 0, 0, 0.4)] rounded-[15px] px-2 py-[2px] text-white text-sm z-10 bottom-10 right-4
`;
export const Heart = tw.div`
absolute bg-gray-200 rounded-[50%] z-10 top-4 right-4 w-10 h-10 text-primary text-center leading-[35px] cursor-pointer
`;
export const Item = tw.div`
col-span-3 h-[380px] shadow-[4px_4px_12px_rgba(0,0,0,0.25)] rounded-5 mb-9
`;
export const ItemImgBox = tw.div`
h-[224px] overflow-hidden bg-cover relative
`;
export const ItemImg = tw.img`
rounded-tl-5 rounded-tr-5 h-full object-cover
`;
export const Live = tw.div`
absolute bg-system-error rounded-[15px] px-2 text-white text-base z-10 top-4 left-5
`;
export const ItemText = tw.div`
p-5 h-[156px]
`;
export const Price = tw.div` 
text-[24px] leading-[28px] font-bold text-primary mb-1
`;
export const ItemTitle = tw.div`
text-base text-system-caution font-normal mb-2
`;
export const KeywordBox = tw.div`
flex mb-2
`;
export const Keyword = tw.div`
bg-gray-200 rounded-5 px-2 py-[2px] font-normal text-xs text-gray-800 mr-1 last:mr-0
`;
export const Locate = tw.div`
text-xs text-system-caution font-normal flex items-center
`;
export const Status = tw.div`
absolute bg-[rgba(0, 0, 0, 0.4)] px-2 text-white text-base z-10 bottom-0 font-bold w-full h-8 flex items-center
px-4 py-1 justify-between
`;

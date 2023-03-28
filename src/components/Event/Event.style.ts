import tw from "twin.macro";

export const Container = tw.div`
container w-[1344px] m-auto mt-[120px]
`;
export const ListContainer = tw.div`

`;
export const Title = tw.div`
text-title-2
`;
export const SubTitle = tw.div`
text-base mt-3 mb-[2px]
`;
export const List = tw.div`
grid grid-cols-12 gap-x-6 py-9 border-solid border-b border-gray-400
cursor-pointer
last:border-none
`;
export const EventImg = tw.img`
col-span-4 h-[280px] bg-cover
`;
export const DetailButton = tw.div`
w-[280px] bg-primary py-[13.5px] text-white text-center rounded-5 shadow-[0px_4px_20px_4px_rgba(198, 198, 224, 0.8)] text-sm mx-auto cursor-pointer
`;
export const ListTitle = tw.div`text-Headline3 text-gray-900`;
export const ListSubTitle = tw.div`text-section-title-1 text-gray-900`;
export const ListDate = tw.div`text-section-title-1 text-gray-600`;

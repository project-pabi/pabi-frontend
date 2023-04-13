import tw from 'twin.macro';

export const Title = tw.div`
text-title-2
`;
export const SubTitle = tw.div`
text-base mt-3 mb-[2px]
`;
export const PopularBox = tw.div`
mb-[38px]
`;
export const PopularTitle = tw.div`
text-base font-bold mb-[10px] hover:underline hover:decoration-2 cursor-pointer
`;
export const PopularValue = tw.div`
text-base transition-all ease-in-out duration-300 overflow-hidden
`;
export const CategoryBox = tw.div`
grid grid-cols-5 gap-x-6
`;
export const Category = tw.div`
rounded-5 bg-gradient-to-l from-[#A1A1E8] to-[#4040C2] text-2xl justify-center
text-white h-[206px] flex items-center
`;

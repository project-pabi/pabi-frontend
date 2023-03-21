import tw from "twin.macro";

export const Container = tw.div`
container w-[1344px] m-auto pt-8 pb-[88px] justify-center
`;
export const List = tw.div`
  h-[180px] rounded-[30px]
  shadow-[0_4px_20px_4px_rgba(198, 198, 224, 0.8)]
`;
export const Box = tw.div`
justify-center mx-0 grid grid-cols-12 gap-x-6
`;
export const ImgBox = tw.div`
flex
`;
export const Img = tw.img`
object-cover rounded-[50%]
`;
export const Review = tw.div`
`;
export const Nickname = tw.div`
text-base text-gray-800
`;
export const Rating = tw.div`
text-lg text-primary
`;
export const Comment = tw.div`
text-base text-gray-800
`;
export const Title = tw.div`
text-xl
`;
export const TBox = tw.div`
relative
`;
export const ArrowBox = tw.div`
inline-block ml-[700px]
`;
export const PrevArrow = tw.button`
w-9 h-9 bg-primary-400 rounded-[50%] right-0
`;
export const NextArrow = tw.button`
ml-[15px] w-9 h-9 bg-primary-400 rounded-[50%] right-0
`;
export const MoreReview = tw.div`
flex cursor-pointer h-20 rounded-[30px] px-6
shadow-[0_4px_20px_4px_rgba(198, 198, 224, 0.8)] items-center
`;

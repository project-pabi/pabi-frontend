import styled from "styled-components";
import tw from "twin.macro";

interface WProps {
  width: string;
}

export const Container = tw.div`
container max-w-[1200px] m-auto pt-8 pb-[88px] justify-center

`;
export const List = styled.div<WProps>`
  width: ${(props) => props.width};

  ${tw`
  h-[180px] rounded-[30px]
  shadow-[0_4px_20px_4px_rgba(198, 198, 224, 0.8)]
  
  `};
`;
export const Box = tw.div`
flex justify-center mb-10 w-[1308px] mx-auto
`;
export const ImgBox = tw.div`
flex mr-[10px]
items-center
`;
export const Img = tw.img`
object-cover rounded-[50%]
`;
export const CountBox = tw.div`
w-[110px] h-[62px] text-center
border-solid border-r-[1px] border-[#BDBDBD] last:border-r-0 
`;
export const Count = tw.div`
font-bold text-[40px] text-[#000060]
`;
export const CountText = tw.div`
text-xs text-[#757575] mt-6
`;
export const ReviewBox = tw.div`
flex w-[753px] p-5
`;
export const Review = tw.div`

`;
export const Nickname = tw.div`
text-base text-[#424242]
`;
export const Rating = tw.div`
text-lg text-[#0000D8]
`;
export const Comment = tw.div`
text-base text-[#424242]
`;

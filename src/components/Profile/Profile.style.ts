import styled from "styled-components";
import tw from "twin.macro";

interface WProps {
  width: string;
}

export const Container = tw.div`
container max-w-[1200px] m-auto pt-8 pb-[88px]
`;
export const List = styled.div<WProps>`
  width: ${(props) => props.width};
  ${tw`
  flex h-[180px] rounded-[30px] mr-6 last:mr-0
  shadow-[0_4px_20px_4px_rgba(198, 198, 224, 0.8)]
  `}
`;
export const Box = tw.div`
flex justify-center mb-10 
`;
export const Img = tw.img`
w-[120px] h-[120px] rounded-[50%] mr-5
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

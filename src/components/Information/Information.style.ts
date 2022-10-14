import styled from "styled-components";
import tw from "twin.macro";
import { Tab } from "@mui/material";

interface Props {
  width: string;
}

export const Title = tw.div`
  font-bold
  text-[40px]
  mb-[12px]
  leading-[59px]
`;
export const SubTitle = tw.div`
  text-[16px]
  text-[#424242]
  mb-[34px]
`;
export const TabTitle = tw.div`
  text-[24px]
  font-bold
`;
export const RadioButton = tw.li`
w-[240px]
h-[50px]
leading-[50px]
bg-slate-400
text-center
rounded-[10px]
`;
export const TextBox = tw.input`
w-[430px]
h-[70px]
bg-[#F5F5F5]
rounded-[10px]
p-6
mt-[55px]
`;
export const PrevButton = tw.div`
w-[85px]
h-[40px]
text-[#0000D8]
text-[14px]
leading-[36px]
rounded-[20px]
cursor-pointer
justify-center
mr-5
border-2 border-solid border-[#0000D8]
`;
export const NextButton = tw.div`
w-[85px]
h-[40px]
bg-[#0000D8]
text-[#FFFFFF]
text-[14px]
leading-[40px]
rounded-[20px]
cursor-pointer
justify-center
`;
export const StyledTab = styled(Tab)<Props>`
  width: ${(props) => props.width};
  height: 48px;
  ${tw`h-12`}
  && {
    ${tw`bg-white text-[#616161] text-[16px] rounded-[10px] max-w-[400px]`}
  }
`;
export const Label = styled.label`
  ${tw`
    inline-block
    cursor-pointer
    bg-[#eee]
    rounded-[20px]
    border-2
    border-white
    text-[16px] 
    text-[#424242]
    h-11
    px-2.5
    py-4
    leading-[20px]
  `}
`;
export const Input = styled.input`
  display: none;
  &:checked + ${Label} {
    ${tw`bg-white text-[#0000d8] border-2 border-[#0000d8] leading-[20px]`}
  }
`;

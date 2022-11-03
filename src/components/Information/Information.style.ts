import styled from "styled-components";
import tw from "twin.macro";
import { Tab } from "@mui/material";

interface WProps {
  width: string;
}
interface BProps {
  background: string;
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
export const TextBox = styled.input<WProps>`
  width: ${(props) => props.width};
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${tw`
h-[70px]
bg-[#F5F5F5]
rounded-[10px]
p-6
mt-[55px]
`}
`;
export const PrevButton = tw.div`
w-[85px]
h-[40px]
text-primary
text-[14px]
leading-[36px]
rounded-[20px]
cursor-pointer
justify-center
mr-5
border-2 border-solid border-primary
`;
export const NextButton = tw.div`
w-[85px]
h-[40px]
bg-primary
text-[#FFFFFF]
text-[14px]
leading-[40px]
rounded-[20px]
cursor-pointer
justify-center
`;
export const StyledTab = styled(Tab)<WProps>`
  width: ${(props) => props.width};
  height: 48px;
  ${tw`h-12`}
  && {
    max-width: 400px;
    ${tw`bg-white text-[#616161] text-[16px] rounded-[10px]`}
  }
`;
export const Label = styled.label`
  ${tw`
    inline-block
    cursor-pointer
    bg-[#eee]
    rounded-[20px]
    border-2
    border-solid
    border-white
    text-[16px] 
    text-[#424242]
    h-11
    px-4
    py-2.5
    leading-[20px]
  `}
`;
export const Input = styled.input`
  display: none;
  &:checked + ${Label} {
    ${tw`bg-white text-primary border-2 border-solid border-primary leading-[20px]`}
  }
`;
export const CheckState = tw.div`
  inline-block
  cursor-pointer
  bg-[#eee]
  rounded-[20px]
  border-2
  border-solid
  border-white
  text-[16px] 
  text-[#424242]
  h-11
  px-4
  py-2.5
  leading-[20px]
`;
export const Span = tw.span`
  text-primary
`;
export const ImgBox = styled.div<BProps>`
  background: ${(props) => props.background};
`;

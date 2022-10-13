import styled from "styled-components";
import tw from "tailwind-styled-components";
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
export const TabTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
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
  && {
    background-color: #ffffff;
    color: #616161;
    font-size: 16px;
    border-radius: 10px;
    max-width: 400px;
  }
`;
export const Label = styled.label`
  display: inline-block;
  cursor: pointer;
  background: #eeeeee;
  border-radius: 20px;
  border: 2px solid #ffffff;
  font-size: 16px;
  color: #424242;
  height: 44px;
  padding: 10px 16px;
  line-height: 20px;
`;
export const Input = styled.input`
  display: none;
  &:checked + ${Label} {
    background: #ffffff;
    border: 2px solid #0000d8;
    color: #0000d8;
    line-height: 20px;
  }
`;

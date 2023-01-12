import styled from 'styled-components';
import tw from 'twin.macro';
import { Tab } from '@mui/material';

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

export const TitleHighlight = tw.span`
  text-primary
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
export const NextButton = tw.button`
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
export const StyledTab = styled(Tab)`
  ${tw`h-12`}
  && {
    ${tw`bg-white text-[#616161] text-[16px] rounded-[10px]`}
  }
`;
export const Label = styled.label`
  ${tw`
    inline-block
    cursor-pointer
    bg-gray-200
    rounded-5
    border-2
    border-solid
    border-gray-200
    text-base
    text-gray-800
    h-11
    px-4
    py-2.5
    leading-tight
  `}
`;
export const Input = styled.input`
  display: none;
  &:checked + ${Label} {
    ${tw`bg-white text-primary border-primary`}
  }
`;

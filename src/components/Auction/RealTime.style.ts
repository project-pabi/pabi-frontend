import { Slider } from '@mui/material';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = tw.div`
container w-[1280px] m-auto pt-8 pb-[88px] justify-center
grid grid-cols-12 gap-x-6
`;

export const CategoryContainer = tw.div`
col-span-3 mt-[90px]
`;
export const CategoryDiv = tw.div`
mt-4 first-of-type:mt-5 flex items-center
`;
export const CategoryCheckBox = styled.input.attrs({ type: 'checkbox' })`
  ${tw`
  w-[15px] h-[15px] mr-[6.5px] cursor-pointer 
  `}
`;
export const CategoryLabel = tw.label`
text-sm font-normal cursor-pointer w-full
`;
export const PrettoSlider = styled(Slider)({
  color: '#BDBDBD !important',
  height: 6,
  '& .MuiSlider-rail': {
    border: 'none',
    color: '#D9D9D9 !important',
  },
  '& .MuiSlider-track': {
    border: 'none',
    color: '#0000D8 !important',
  },
  '& .MuiSlider-thumb': {
    height: 16,
    width: 16,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#0000D8',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});
export const ItemContainer = tw.div`
col-span-9 mt-[90px] 
`;
export const ItemInsideContainer = tw.div`
grid grid-cols-9 gap-x-6
`;
export const HowMuch = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ${tw`
font-normal text-xs border-solid border border-gray-300 p-1 w-32 text-gray-800  text-center 
`}
`;
export const CheckBoxWrapper = tw.div`
  relative
  mr-[10px]
`;
export const RightLine = tw.div`
px-2 border-solid border-gray-300 border-r 
`;
export const Chip = tw.div`
inline-flex bg-gray-300 rounded-5 px-4 py-[10px] items-center w-auto mr-[10px] my-[10px]
`;
export const ChipText = tw.div`
font-normal	text-sm	text-gray-800 mr-[10px]
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 20px;
  border-radius: 4px;
  background: #bebebe;
  transition: 0.2s;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 4px;
    width: 28px;
    height: 22px;
    margin: -2px;
    margin-left: -4px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    transition: 0.2s;
    background: #0000d8;
    &::after {
      content: '';
      display: block;
      border-radius: 4px;
      width: 28px;
      height: 22px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

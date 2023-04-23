import tw from 'twin.macro';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import styled from 'styled-components';

export const Title = tw.div`
text-title-1
`;
export const DetailContainer = tw.div`
grid grid-cols-12 gap-6
`;
export const LeftBox = tw.div`
col-span-7
`;
export const RightBox = tw.div`
col-span-5
`;
export const StyledPrevArrow = styled(ArrowBackIosNewIcon).attrs({
  sx: {
    backgroundColor: '#BDBDBD',
    color: '#fff',
    padding: '10px',
    width: '44px',
    height: '60px',
    left: '0',
    zIndex: '1',
    '&:hover': {
      backgroundColor: '#BDBDBD',
      color: '#fff',
    },
  },
})``;
export const StyledNextArrow = styled(ArrowForwardIosIcon).attrs({
  sx: {
    backgroundColor: '#BDBDBD',
    color: '#fff',
    padding: '10px',
    width: '44px',
    height: '60px',
    right: '0',
    '&:hover': {
      backgroundColor: '#BDBDBD',
      color: '#fff',
    },
  },
})``;

export const Img = tw.img`
  absolute inset-0
  box-border block
  p-0
  border-none
  m-auto
  w-0 h-0
  min-w-full
  max-w-full
  min-h-full
  max-h-full
`;

export const Bid = tw.div`
h-[100px] bg-primary text-white w-full mt-20 rounded-5 cursor-pointer
shadow-[0_4px_20px_4px_rgba(198, 198, 224, 0.8)] text-section-title-1
`;
export const CurrentPriceBox = tw.div`
h-[120px] rounded-5 flex py-[21.5px] px-6 items-center justify-around
`;
export const CurrentPrice = tw.div`
`;
export const Box = tw.div`
rounded-5 text-gray-800
`;
export const ListTitle = tw.div`
text-Headline4 text-gray-800 border-b-2 border-solid border-primary flex justify-between items-center
`;
export const History = tw.div`
flex justify-between items-center px-6 py-2
`;
export const HistoryImg = tw.div`
bg-gray-600 rounded-full w-7 h-7 mr-2
`;
export const HistoryName = tw.div`
mr-5 text-section-title-2
`;
export const HistoryTime = tw.div`
text-base
`;
export const HistoryMoney = tw.div`
mr-5 text-list-title
`;
export const HistoryStatus = tw.div`
bg-primary-200 px-4 py-[10px] rounded-5 text-sm
`;

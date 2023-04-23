import {
  Bid,
  Box,
  CurrentPrice,
  CurrentPriceBox,
  DetailContainer,
  History,
  HistoryImg,
  HistoryMoney,
  HistoryName,
  HistoryStatus,
  HistoryTime,
  Img,
  LeftBox,
  ListTitle,
  RightBox,
  StyledNextArrow,
  StyledPrevArrow,
  Title,
} from './RealTimeDetail.style';

import Slider from 'react-slick';

const RealTimeDetail = () => {
  const settings = {
    customPaging: function (i: any) {
      return (
        <a>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFJOCpjzGtZtpWfQg0CN5rT0bfjEhOQ0j5w&usqp=CAU" />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <StyledPrevArrow />,
    nextArrow: <StyledNextArrow />,
  };
  return (
    <>
      <div className="flex">
        <Title>젤다의 전설 야생의 숨결</Title>
      </div>
      <div>김파비</div>
      <DetailContainer>
        <LeftBox>
          <Slider {...settings} className="h-[724px] items-center bg-black">
            <div className="relative h-[724px]">
              <Img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFJOCpjzGtZtpWfQg0CN5rT0bfjEhOQ0j5w&usqp=CAU"
                alt=""
                className="absolute"
              />
            </div>

            <div className="relative h-[724px]">
              <Img src="https://image.utoimage.com/preview/cp896573/2023/03/202303019857_500.jpg" alt="" className="absolute" />
            </div>
          </Slider>
          <Bid>
            입찰하기<span className=""></span>
          </Bid>
        </LeftBox>
        <RightBox>
          <CurrentPriceBox>
            <CurrentPrice className="text-system-error">
              <div className="text-section-title-2">현재가격</div>
              <div className="text-Headline4">100,320원</div>
            </CurrentPrice>
            <div className="w-[2px] h-[60px] bg-gray-300 mx-7"></div>
            <CurrentPrice className="text-gray-800">
              <div className="text-section-title-2">시작가격</div>
              <div className="text-Headline4">100,000원</div>
            </CurrentPrice>
          </CurrentPriceBox>
          <Box className="h-[98px] px-6 items-center flex justify-between mt-6">
            <div className="text-section-title-2">남은 시간</div>
            <div className="text-Headline3">1:05:32</div>
          </Box>
        </RightBox>
        <LeftBox>
          <ListTitle>상품정보</ListTitle>
          <Box className="mt-5 py-9 px-12 text-base h-80">
            젤다의 전설 야생의 숨결입니다 상태는 사진 그대로고요 직거래 범계역 가능합니다
          </Box>
        </LeftBox>
        <RightBox>
          <ListTitle>
            <div>참여이력</div>
            <div className="text-base text-gray-600">
              누적 <span className="text-primary">4</span>명
            </div>
          </ListTitle>
          <Box className="mt-5 py-6 px-6 text-base h-80">
            <History>
              <div className="flex items-center">
                <HistoryImg></HistoryImg>
                <HistoryName>문동은</HistoryName>
                <HistoryTime>23:03:01</HistoryTime>
              </div>
              <div className="flex items-center">
                <HistoryMoney>1,500,320원</HistoryMoney>
                <HistoryStatus>진행</HistoryStatus>
              </div>
            </History>
            <History>
              <div className="flex items-center">
                <HistoryImg></HistoryImg>
                <HistoryName>문동은</HistoryName>
                <HistoryTime>23:03:01</HistoryTime>
              </div>
              <div className="flex items-center">
                <HistoryMoney>1,500,320원</HistoryMoney>
                <HistoryStatus>진행</HistoryStatus>
              </div>
            </History>
          </Box>
        </RightBox>
        <Box className="mt-5 px-12 py-9">
          <div></div>
        </Box>
      </DetailContainer>
    </>
  );
};
export default RealTimeDetail;

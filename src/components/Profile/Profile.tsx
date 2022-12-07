import { useEffect, useRef, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  ArrowBox,
  Box,
  Comment,
  Container,
  Count,
  CountBox,
  CountText,
  Img,
  ImgBox,
  List,
  MoreReview,
  NextArrow,
  Nickname,
  PrevArrow,
  Rating,
  Review,
  TBox,
  Title,
} from "./Profile.style";
import ProgressProvider from "./ProgressProvider";
import Slider from "react-slick";
import More from "./more.png";

export default function Profile() {
  const sliderRef = useRef<any>(null);
  console.log(sliderRef.current);
  const settings = {
    infinite: false,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    arrows: false,
  };
  const [valueEnd, setValueEnd] = useState(0);
  const setRating = () => {
    let total = 0;
    for (let i = 0; i < review.length; i++) {
      total += review[i].rating;
    }
    setValueEnd(total / review.length);
  };
  useEffect(setRating);
  const [review, setReview] = useState([
    {
      src: "https://dimg.donga.com/a/500/0/90/5/ugc/CDB/29STREET/Article/5f/10/fd/c1/5f10fdc11b4dd273825d.jpg",
      nickname: "여행가는 핑구",
      rating: 2,
      comment:
        "아주 좋아요~ 아주 좋아요~ 아주 좋아요~ 아주 좋아요~ 아주 좋아요~ 아주 좋아요~ 아주 좋아요~ ",
    },
    {
      src: "https://mblogthumb-phinf.pstatic.net/MjAxOTEwMjdfMzUg/MDAxNTcyMTU5MDAxMzI5.W1GIPQd0z73GxQ78Pj31C9KD3fC4aYQLNRMEX_AKp3Mg.oxeTqHTkh4-i2sG_tz3C11qzHCIYNgkVP34UkTXsU7Ug.JPEG.msjin93/IMG_8495.JPG?type=w800",
      nickname: "늙은 핑구",
      rating: 4,
      comment: "허허 좋구만",
    },
    {
      src: "https://mblogthumb-phinf.pstatic.net/MjAxOTEwMjdfMzUg/MDAxNTcyMTU5MDAxMzI5.W1GIPQd0z73GxQ78Pj31C9KD3fC4aYQLNRMEX_AKp3Mg.oxeTqHTkh4-i2sG_tz3C11qzHCIYNgkVP34UkTXsU7Ug.JPEG.msjin93/IMG_8495.JPG?type=w800",
      nickname: "늙은 핑구",
      rating: 4,
      comment: "허허 좋구만",
    },
    {
      src: "https://mblogthumb-phinf.pstatic.net/MjAxOTEwMjdfMzUg/MDAxNTcyMTU5MDAxMzI5.W1GIPQd0z73GxQ78Pj31C9KD3fC4aYQLNRMEX_AKp3Mg.oxeTqHTkh4-i2sG_tz3C11qzHCIYNgkVP34UkTXsU7Ug.JPEG.msjin93/IMG_8495.JPG?type=w800",
      nickname: "늙은 핑구",
      rating: 4,
      comment: "허허 좋구만",
    },
    {
      src: "https://mblogthumb-phinf.pstatic.net/MjAxOTEwMjdfMzUg/MDAxNTcyMTU5MDAxMzI5.W1GIPQd0z73GxQ78Pj31C9KD3fC4aYQLNRMEX_AKp3Mg.oxeTqHTkh4-i2sG_tz3C11qzHCIYNgkVP34UkTXsU7Ug.JPEG.msjin93/IMG_8495.JPG?type=w800",
      nickname: "늙은 핑구",
      rating: 4,
      comment: "허허 좋구만",
    },
  ]);

  return (
    <Container>
      <div className="font-bold text-[40px] leading-[60px] mb-[120px] pl-10">
        생각하는 핑구님의 프로필
      </div>
      <Box>
        <List width="309px" className="p-7 flex mr-6">
          <Img
            className="w-[120px] h-[120px] mr-5"
            src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMjdfMjk3/MDAxNTcyMTU4OTA1NjAz.zHEicJ1aBtmkKS4bRYy02y_fBcbvLrWbFTcbUeUBnvIg.knnGDJUVIz4TcrVN7ARyAtfel9_JlbYRn1t2VUFjNtIg.JPEG.msjin93/IMG_8470.JPG?type=w800"
            alt="pinggu"
          />
          <div className="text-2xl mt-6 font-bold text-[#000060]">
            생각하는 핑구
          </div>
        </List>
        <List width="309px" className="flex pt-[58px] px-[42px] mr-6">
          <CountBox>
            <Count>10</Count>
            <CountText>로그인 횟수</CountText>
          </CountBox>
          <CountBox>
            <Count>3</Count>
            <CountText>팔고 비운 횟수</CountText>
          </CountBox>
        </List>
        <List width="642px" className="px-7 py-6">
          <div className="text-base text-[#424242]">
            김파비. 나이 1세. 돈이 된다면 무엇이든 팔아제끼는 펭귄.
          </div>
        </List>
      </Box>
      <Box>
        <TBox>
          <Title>획득한 뱃지</Title>
          <List width="309px" className="flex p-6 mr-6 mt-4">
            <ImgBox>
              <Img
                className="w-[90px] h-[90px]"
                src="https://www.pngmart.com/files/12/Instagram-Verified-Badge-PNG-Transparent-Image.png"
                alt="badge"
              />
            </ImgBox>
            <div className="w-[157px]">
              <div className="text-base">관리자 인증</div>
              <div className="text-sm mt-[14px]">
                와! 관리자인증! 와! 관리자인증! 와! 관리자인증! 와! 관리자인증!
                와! 관리자인증! 와! 관리자인증!
              </div>
            </div>
          </List>
        </TBox>
        <List
          width="198px"
          className="bg-[#0000D8] justify-center p-5 mr-0 mt-11 z-20"
        >
          <div className="text-base text-[#fff] mb-2 ">거래평점</div>
          <div className="w-[106px] mx-auto">
            <ProgressProvider valueStart={0} valueEnd={valueEnd}>
              {(value: number) => (
                <CircularProgressbar
                  value={value}
                  text={`${value}`}
                  maxValue={5}
                  counterClockwise
                  strokeWidth={13}
                  styles={buildStyles({
                    textColor: "#ffffff",
                    pathColor: "#ffffff",
                    trailColor: "rgba(114, 114, 224, 0.6)",
                    textSize: 32,
                  })}
                />
              )}
            </ProgressProvider>
          </div>
        </List>
        <TBox>
          <Title className="pl-6 inline z-0">받은 거래 후기</Title>
          <ArrowBox>
            <PrevArrow onClick={() => sliderRef.current.slickPrev()}>
              ◀
            </PrevArrow>
            <NextArrow onClick={() => sliderRef.current.slickNext()}>
              ▶
            </NextArrow>
          </ArrowBox>
          <div className="absolute bg-white w-5 h-full left-[-5px] z-10 blur-sm"></div>
          <div className="absolute bg-white w-5 h-full right-[-4px] z-10 blur-sm"></div>
          <Slider ref={sliderRef} {...settings} className="w-[777px] ">
            {review.slice(0, 5).map((e: any, i: any) => (
              <div key={i}>
                <List width="309px" className="flex py-6 px-5" key={i}>
                  <Img className="w-12 h-12 mr-2" src={e.src} alt="pinggu" />
                  <Review>
                    <Nickname>{e.nickname}</Nickname>
                    <Rating>
                      {e.rating} {"🧊".repeat(e.rating)}
                    </Rating>
                    <Comment>{e.comment}</Comment>
                  </Review>
                </List>
              </div>
            ))}
            <div>
              <List width="280px">리뷰더보기</List>
            </div>
          </Slider>
        </TBox>
      </Box>
      <MoreReview>
        <img src={More} alt="more" className="w-[52px] h-[52px]"></img>
        <p className="mx-6 text-xl">판매 내역 보기</p>
        <p>팔고 비운 내역을 확인해보세요</p>
      </MoreReview>
    </Container>
  );
}

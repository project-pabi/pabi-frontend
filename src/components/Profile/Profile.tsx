import { useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  Box,
  Comment,
  Container,
  Count,
  CountBox,
  CountText,
  Img,
  ImgBox,
  List,
  Nickname,
  Rating,
  Review,
  ReviewBox,
} from "./Profile.style";
import ProgressProvider from "./ProgressProvider";

export default function Profile() {
  const [valueEnd, setValueEnd] = useState(2.7);
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
  ]);
  return (
    <Container>
      <Box>
        <List width="310px" className="p-7 flex mr-6">
          <Img
            className="w-[120px] h-[120px] mr-5"
            src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMjdfMjk3/MDAxNTcyMTU4OTA1NjAz.zHEicJ1aBtmkKS4bRYy02y_fBcbvLrWbFTcbUeUBnvIg.knnGDJUVIz4TcrVN7ARyAtfel9_JlbYRn1t2VUFjNtIg.JPEG.msjin93/IMG_8470.JPG?type=w800"
            alt="pinggu"
          />
          <div className="text-2xl mt-6 font-bold text-[#000060]">
            생각하는 핑구
          </div>
        </List>
        <List width="420px" className="flex pt-[58px] px-[42px] mr-6">
          <CountBox>
            <Count>10</Count>
            <CountText>로그인 횟수</CountText>
          </CountBox>
          <CountBox>
            <Count>3</Count>
            <CountText>팔기</CountText>
          </CountBox>
          <CountBox>
            <Count>6</Count>
            <CountText>비우기</CountText>
          </CountBox>
        </List>
        <List width="530px" className="px-7 py-6">
          <div className="text-base text-[#424242]">
            김파비. 나이 1세. 돈이 된다면 무엇이든 팔아제끼는 펭귄. 내용을
            입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을
            입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을
            입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
          </div>
        </List>
      </Box>
      <Box>
        <List width="310px" className="flex p-6 mr-6 mt-4">
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
        <List
          width="198px"
          className="bg-[#0000D8] justify-center p-5 mr-0 mt-4"
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
        <Swiper spaceBetween={50} slidesPerView={2.3} className="w-[752px]">
          <ReviewBox>
            {review.map((e: any, i: any) => (
              <SwiperSlide className="py-4 pl-5 w-[309px]" key={i}>
                <List width="309px" className="flex py-6 px-5 min-w-[309px]">
                  <Img className="w-12 h-12 mr-2" src={e.src} alt="pinggu" />
                  <Review>
                    <Nickname>{e.nickname}</Nickname>
                    <Rating>
                      {e.rating} {"🧊".repeat(e.rating)}
                    </Rating>
                    <Comment>{e.comment}</Comment>
                  </Review>
                </List>
              </SwiperSlide>
            ))}
          </ReviewBox>
        </Swiper>
      </Box>
    </Container>
  );
}

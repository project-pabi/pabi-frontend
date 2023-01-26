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
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function Profile() {
  const sliderRef = useRef<any>(null);
  console.log(sliderRef.current);
  const settings = {
    infinite: false,
    rows: 1,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
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
  ]);

  return (
    <Container>
      <div className="font-bold text-[40px] leading-[60px] mb-[120px] pl-10">
        <span className="text-primary">생각하는 핑구</span>님의 프로필
      </div>
      <Box className="mb-5">
        <List className="col-span-4 p-7 flex">
          <Img
            className="w-[124px] h-[124px] mr-5"
            src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMjdfMjk3/MDAxNTcyMTU4OTA1NjAz.zHEicJ1aBtmkKS4bRYy02y_fBcbvLrWbFTcbUeUBnvIg.knnGDJUVIz4TcrVN7ARyAtfel9_JlbYRn1t2VUFjNtIg.JPEG.msjin93/IMG_8470.JPG?type=w800"
            alt="pinggu"
          />
          <div className="w-100% py-8 px-4">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-[#191919]">생각하는 핑구</p>
              <div className="flex justify-center w-12 border-solid border-[1px] border-[#E0E0E0] bg-[#F5F5F5] p-1 items-center cursor-pointer">
                <FavoriteBorderOutlinedIcon
                  sx={{ color: "#0000D8", width: "16px" }}
                  className="mt-[2px] mr-1"
                />
                13
              </div>
            </div>
            <div className="flex text-[12px] mt-3 text-[#757575] justify-between">
              <p>
                활동 일수 <span className="text-primary">10</span>
              </p>
              <p>
                팔고 비운 횟수 <span className="text-primary">10</span>
              </p>
            </div>
          </div>
        </List>

        <List className="col-span-4 py-4 px-8">
          <div className="flex justify-between items-center mb-2">
            <div className="text-xl">획득한 배지</div>
            <div className="text-xs text-[#757575]">전체보기</div>
          </div>
          <div className="flex justify-between items-center">
            <ImgBox>
              <Img
                className="w-[90px] h-[90px] mr-8"
                src="https://www.pngmart.com/files/12/Instagram-Verified-Badge-PNG-Transparent-Image.png"
                alt="badge"
              />
              <div className="">
                <div className="font-bold text-base">관리자인증</div>
                <div className="text-sm">
                  와! 관리자인증! 와! 관리자인증! 와! 관리자인증! 와!
                  관리자인증! 와! 관리자인증! 와! 관리자인증!
                </div>
              </div>
            </ImgBox>
          </div>
        </List>
        <List className="col-span-4 px-7 py-6">
          <div className="text-base text-[#424242]">
            김파비. 나이 1세. 돈이 된다면 무엇이든 팔아제끼는 펭귄.
          </div>
        </List>
      </Box>
      <Box>
        <List className="bg-[#0000D8] justify-center p-5 mt-11 col-span-3">
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
        <TBox className="col-span-9">
          <Title className="pl-6 inline z-0">받은 거래 후기</Title>
          <ArrowBox>
            <PrevArrow onClick={() => sliderRef.current.slickPrev()}>
              ◀
            </PrevArrow>
            <NextArrow onClick={() => sliderRef.current.slickNext()}>
              ▶
            </NextArrow>
          </ArrowBox>
          <Slider
            ref={sliderRef}
            {...settings}
            className="grid grid-cols-9 gap-6"
          >
            {review.slice(0, 5).map((e: any, i: any) => (
              <div key={i}>
                <List className="py-6 px-5 flex col-span-3 mr-6" key={i}>
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
              <List>리뷰 더보기</List>
            </div>
          </Slider>
        </TBox>
      </Box>
      <Box>
        <List className="bg-[#0000D8] justify-center p-5 mt-11 col-span-3">
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
        <TBox className="col-span-9">
          <Title className="pl-6 inline z-0">받은 거래 후기</Title>
          <div className="overflow-hidden grid grid-cols-9 gap-x-6">
            <div className="col-span-3 grid grid-cols-6 gap-x-6 w-[2000px] py-5">
              {review.slice(0, 5).map((e: any, i: any) => (
                <List className="py-6 px-5 flex col-span-1" key={i}>
                  <Img className="w-12 h-12 mr-2" src={e.src} alt="pinggu" />
                  <Review>
                    <Nickname>{e.nickname}</Nickname>
                    <Rating>
                      {e.rating} {"🧊".repeat(e.rating)}
                    </Rating>
                    <Comment>{e.comment}</Comment>
                  </Review>
                </List>
              ))}
            </div>
          </div>
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

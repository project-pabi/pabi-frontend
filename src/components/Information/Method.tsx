import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ImgBox,
  NextButton,
  PrevButton,
  Span,
  StyledTab,
  SubTitle,
  TabTitle,
  TextBox,
  Title,
} from "./Information.style";
import Normal from "./Normal.png";
import RealTime from "./RealTime.png";

const Method = () => {
  const [value, setValue] = useState("1");
  let [inputValue, setInputValue] = useState("");
  let navigate = useNavigate();
  // Tabs
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  // NextButton
  const onIncrement = () => {
    setValue(String(Number(value) + 1));
  };
  // PrevButton
  const onDecrement = () => {
    setValue(String(Number(value) - 1));
  };
  // NumberInput

  return (
    <div className="container max-w-[1200px] m-auto pt-8 pb-[88px]">
      <Title>경매방식 선택</Title>
      <SubTitle>원하는 경매 방식을 선택하세요.</SubTitle>
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="mb-10"
            TabIndicatorProps={{
              sx: {
                height: "0%",

                borderRadius: "10px",
              },
            }}
            sx={{
              boxShadow: "0px 4px 20px 4px rgba(228, 228, 247, 0.8)",
              borderRadius: "10px",
              zIndex: 1,
              "& button.Mui-selected": {
                zIndex: 2,
                color: "#ffffff",
                backgroundColor: "#0000D8",
              },
            }}
          >
            <StyledTab width="50%" label="경매 방식 선택" value="1" />
            <StyledTab width="400px" label="시작 가격 입력" value="2" />
            <StyledTab width="400px" label="거래 방식 선택" value="3" />
          </TabList>
        </Box>
        {/* 제품 이름 입력 */}
        <TabPanel
          value="1"
          className="text-center"
          sx={{
            boxShadow: "0px 4px 20px 4px rgba(228, 228, 247, 0.8)",
            borderRadius: "20px",
            padding: "120px",
          }}
        >
          <TabTitle>
            어떤 <Span>방법</Span>으로 비울까요?
          </TabTitle>
          <div className="flex justify-center mt-[88px]">
            <div className="w-[280px] h-[380px] shadow-[0_4px_20px_4px_rgba(228,228,247,0.8)] mr-6 rounded-[10px] overflow-hidden">
              <ImgBox background="linear-gradient(180deg, #7272e0 0%, rgba(25, 25, 25, 0.6) 100%)">
                <img src={RealTime} alt="RealTime" className="mx-auto p-5" />
              </ImgBox>
              <div className="p-5 font-bold text-[#616161] text-xl">
                실시간 경매
              </div>
            </div>
            <div className="w-[280px] h-[380px] shadow-[0_4px_20px_4px_rgba(228,228,247,0.8)] rounded-[10px] overflow-hidden">
              <ImgBox background="linear-gradient(180deg, #505050 0%, #D9D9D9 100%);">
                <img src={Normal} alt="Normal" className="mx-auto p-5" />
              </ImgBox>
              <div className="p-5 font-bold text-[#616161] text-xl">
                일반 경매
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10 s">
            <PrevButton
              onClick={() => {
                navigate(-1);
              }}
            >
              이전으로
            </PrevButton>
            <NextButton
              onClick={() => {
                onIncrement();
              }}
            >
              다음으로
            </NextButton>
          </div>
        </TabPanel>
        {/* 제품 종류 선택 */}
        <TabPanel
          value="2"
          className="text-center"
          sx={{
            boxShadow: "0px 4px 20px 4px rgba(228, 228, 247, 0.8)",
            borderRadius: "20px",
            padding: "120px",
          }}
        >
          <TabTitle>
            경매를 <Span>시작할 가격</Span>을 알려주세요
          </TabTitle>
          <span className="font-bold text-2xl">시작 가격은</span>
          <TextBox
            width={"200px"}
            type={"number"}
            placeholder="10"
            className="mx-5"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></TextBox>
          <span className="font-bold text-2xl">원 부터</span>

          <div className="flex justify-center mt-10 s">
            <PrevButton
              onClick={() => {
                onDecrement();
              }}
            >
              이전으로
            </PrevButton>
            <NextButton
              onClick={() => {
                onIncrement();
              }}
            >
              다음으로
            </NextButton>
          </div>
        </TabPanel>
        <TabPanel
          value="3"
          className="text-center"
          sx={{
            boxShadow: "0px 4px 20px 4px rgba(228, 228, 247, 0.8)",
            borderRadius: "20px",
            padding: "120px",
          }}
        >
          <TabTitle>
            물건을 어떻게 <Span>전달</Span>할까요?
          </TabTitle>
          <div className="flex justify-center mt-10 s">
            <PrevButton
              onClick={() => {
                onDecrement();
              }}
            >
              이전으로
            </PrevButton>
            <NextButton
              onClick={() => {
                onIncrement();
              }}
            >
              다음으로
            </NextButton>
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
};
export default Method;

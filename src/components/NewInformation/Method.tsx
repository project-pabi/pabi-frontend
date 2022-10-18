import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NextButton,
  PrevButton,
  StyledTab,
  SubTitle,
  TabTitle,
  Title,
} from "./Information.style";

const Method = () => {
  const [value, setValue] = useState("1");
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
  return (
    <>
      <Title>경매방식 선택</Title>
      <SubTitle>원하는 경매 방식을 선택하세요.</SubTitle>
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="mb-10"
            variant="fullWidth"
            TabIndicatorProps={{ sx: { height: "0" } }}
            sx={{
              boxShadow: "0px 4px 20px 4px rgba(228, 228, 247, 0.8)",
              borderRadius: "10px",
              "& button.Mui-selected": {
                backgroundColor: "#0000D8",
                color: "#ffffff",
              },
            }}
          >
            <StyledTab label="경매 방식 선택" value="1" />
            <StyledTab label="시작 가격 입력" value="2" />
            <StyledTab label="거래 방식 선택" value="3" />
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
            어떤 <span style={{ color: "#0000D8" }}>방법</span>으로 비울까요?
          </TabTitle>
          <div className="flex justify-center mt-[88px]">
            <div className="w-[280px] h-[380px] shadow-[0_4px_20px_4px_rgba(228,228,247,0.8)] mr-6">
              실시간 거래
            </div>
            <div className="w-[280px] h-[380px] shadow-[0_4px_20px_4px_rgba(228,228,247,0.8)]">
              일반 경매
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
            경매를 <span style={{ color: "#0000D8" }}>시작할 가격</span>을
            알려주세요
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
            물건을 어떻게 <span style={{ color: "#0000D8" }}>전달</span>할까요?
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
    </>
  );
};
export default Method;

import React, { useState } from "react";
import {
  NextButton,
  RadioBox,
  StyledTab,
  SubTitle,
  TabTitle,
  TextBox,
  Title,
} from "./Information.style";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box } from "@mui/material";

const Information = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  console.log(value);
  const onIncrement = () => {
    setValue(String(Number(value) + 1));
  };
  return (
    <div className="container max-w-[1200px] m-auto pt-[70px]">
      <Title>상품정보 입력</Title>
      <SubTitle>비우고 싶은 제품이 무엇인지 설명해주세요!</SubTitle>
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="mb-[107px]"
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
            <StyledTab label="제품 이름 입력" value="1" />
            <StyledTab label="제품 종류 선택" value="2" />
            <StyledTab label="제품 상태 선택" value="3" />
            <StyledTab label="제품 사진 등록" value="4" />
            <StyledTab label="제품 설명 입력" value="5" />
          </TabList>
        </Box>
        <TabPanel
          value="1"
          className="text-center"
          sx={{
            boxShadow: "0px 4px 20px 4px rgba(228, 228, 247, 0.8)",
            borderRadius: "20px",
          }}
        >
          <TabTitle>
            비우려는 물건의 <span style={{ color: "#0000D8" }}>이름</span>을
            알려주세요
          </TabTitle>
          <TextBox
            type={"text"}
            placeholder="물건의 이름이 무엇인가요?"
          ></TextBox>
          <NextButton onClick={onIncrement}>다음으로</NextButton>
        </TabPanel>

        <TabPanel value="2" className="text-center">
          <TabTitle>
            물건의 <span style={{ color: "#0000D8" }}>종류</span>는 무엇인가요?
          </TabTitle>

          <NextButton onClick={onIncrement}>다음으로</NextButton>
        </TabPanel>
        <TabPanel value="3" className="text-center">
          <TabTitle>
            물건의 <span style={{ color: "#0000D8" }}>상태</span>는 어떤가요?
          </TabTitle>
          <NextButton onClick={onIncrement}>다음으로</NextButton>
        </TabPanel>
        <TabPanel value="4" className="text-center">
          <TabTitle>
            비우려는 물건의 <span style={{ color: "#0000D8" }}>모습</span>을
            보여주세요
          </TabTitle>
          <NextButton onClick={onIncrement}>다음으로</NextButton>
        </TabPanel>
        <TabPanel value="5" className="text-center">
          <TabTitle>
            비우려는 물건에 대해
            <span style={{ color: "#0000D8" }}> 하고싶은 말</span>이 있나요?
          </TabTitle>
        </TabPanel>
      </TabContext>
    </div>
  );
};
export default Information;

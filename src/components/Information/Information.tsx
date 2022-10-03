import React, { useState } from "react";
import {
  NextButton,
  SubTitle,
  TabTitle,
  TextBox,
  Title,
} from "./Information.style";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import styled from "styled-components";

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
        <Box sx={{}}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="mb-[107px]"
          >
            <StyledTab
              label="제품 이름 입력"
              value="1"
              theme={createTheme({
                palette: { primary: { main: "#0000D8" } },
              })}
            />
            <StyledTab label="제품 종류 선택" value="2" />
            <StyledTab label="제품 상태 선택" value="3" />
            <StyledTab label="제품 사진 등록" value="4" />
            <StyledTab label="제품 설명 입력" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1" className="text-center">
          <TabTitle>비우려는 물건의 이름을 알려주세요</TabTitle>
          <TextBox
            type={"text"}
            placeholder="물건의 이름이 무엇인가요?"
          ></TextBox>
          <NextButton onClick={onIncrement}>다음으로</NextButton>
        </TabPanel>

        <TabPanel value="2" className="text-center">
          <TabTitle>물건의 종류는 무엇인가요?</TabTitle>
          <NextButton onClick={onIncrement}>다음으로</NextButton>
        </TabPanel>
        <TabPanel value="3" className="text-center">
          <TabTitle>물건의 상태는 어떤가요?</TabTitle>
          <NextButton onClick={onIncrement}>다음으로</NextButton>
        </TabPanel>
        <TabPanel value="4" className="text-center">
          <TabTitle>비우려는 물건의 모습을 보여주세요</TabTitle>
          <NextButton onClick={onIncrement}>다음으로</NextButton>
        </TabPanel>
        <TabPanel value="5" className="text-center">
          <TabTitle>비우려는 물건에 대해 하고싶은 말이 있나요?</TabTitle>
        </TabPanel>
      </TabContext>
    </div>
  );
};
export default Information;

const StyledTab = styled(Tab)`
  width: 240px;
  height: 50px;
  && {
    background-color: #ffffff;
    color: #616161;
    font-size: 16px;
    border-radius: 10px;
  }
`;

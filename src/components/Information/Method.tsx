import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NextButton,
  StyledTab,
  SubTitle,
  TabTitle,
  TextBox,
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
  return (
    <div className="container max-w-[1200px] m-auto py-[100px]">
      <Title>상품정보 입력</Title>
      <SubTitle>비우고 싶은 제품이 무엇인지 설명해주세요!</SubTitle>
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="mb-10"
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
            비우려는 물건의 <span style={{ color: "#0000D8" }}>이름</span>을
            알려주세요
          </TabTitle>
          <TextBox
            type={"text"}
            placeholder="물건의 이름이 무엇인가요?"
          ></TextBox>
          <NextButton
            onClick={() => {
              onIncrement();
            }}
          >
            다음으로
          </NextButton>
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
        ></TabPanel>
        <TabPanel
          value="3"
          className="text-center"
          sx={{
            boxShadow: "0px 4px 20px 4px rgba(228, 228, 247, 0.8)",
            borderRadius: "20px",
            padding: "120px",
          }}
        ></TabPanel>
      </TabContext>
    </div>
  );
};
export default Method;

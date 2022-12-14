import React, { useState } from "react";
import {
  CheckState,
  Input,
  Label,
  NextButton,
  PrevButton,
  Span,
  StyledTab,
  SubTitle,
  TabTitle,
  TextBox,
  Title,
} from "./Information.style";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import CategoryType from "./CategoryData";
import StatusType from "./StatusData";
import Dropzone from "./Dropzone";
import { useNavigate } from "react-router-dom";

const Information = () => {
  const [value, setValue] = useState("1");
  let [data, setData] = useState<any[]>([]);
  let [inputValue, setInputValue] = useState("");
  let [radioValue, setRadioValue] = useState("");
  let [checkValue, setCheckValue] = useState<any>([]);
  let navigate = useNavigate();

  const handleCheck = (e: any) => {
    let updatedList: any = [...checkValue];
    if (e.target.checked) {
      updatedList = [...checkValue, e.target.value];
    } else {
      updatedList.splice(checkValue.indexOf(e.target.value), 1);
    }
    setCheckValue(updatedList);
  };
  const checkedItems = checkValue.length
    ? checkValue.map((a: any, i: any) => {
        return a;
      })
    : "";

  // console.log(checkValue);
  console.log(checkedItems);

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
  // NameData
  const nameData = () => {
    setData([inputValue]);
  };
  // CategoryData
  const CategoryData = () => {
    setData([...data, radioValue]);
  };
  return (
    <div className="container max-w-[1200px] m-auto pt-8 pb-[88px]">
      <Title>상품정보 입력</Title>
      <SubTitle>비우고 싶은 제품이 무엇인지 설명해주세요!</SubTitle>
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
            <StyledTab width="240px" label="제품 이름 입력" value="1" />
            <StyledTab width="240px" label="제품 종류 선택" value="2" />
            <StyledTab width="240px" label="제품 상태 선택" value="3" />
            <StyledTab width="240px" label="제품 사진 등록" value="4" />
            <StyledTab width="240px" label="제품 설명 입력" value="5" />
          </TabList>
        </Box>
        {/* 제품 이름 입력 */}
        <TabPanel
          value="1"
          className="text-center"
          sx={{
            boxShadow: "0px 4px 20px 4px rgba(228, 228, 247, 0.8)",
            borderRadius: "20px",
            padding: "88px",
          }}
        >
          <TabTitle>
            비우려는 물건의 <Span>이름</Span>을 알려주세요
          </TabTitle>
          <TextBox
            width={"430px"}
            type={"text"}
            placeholder="물건의 이름이 무엇인가요?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></TextBox>
          <div className="flex justify-center mt-10">
            <NextButton
              onClick={() => {
                onIncrement();
                nameData();
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
          <TabTitle className="mb-[50px]">
            물건의 <Span>종류</Span>는 무엇인가요?
          </TabTitle>
          <ul className="flex justify-center">
            {CategoryType.map((i) => (
              <li key={i.name} className="mr-[20px] last:mr-0">
                <Input
                  type={"checkbox"}
                  id={i.name}
                  value={i.name}
                  checked={radioValue === `${i.name}`}
                  onChange={(e) => setRadioValue(e.target.value)}
                />
                <Label htmlFor={i.name}>{i.name}</Label>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-10">
            <PrevButton onClick={onDecrement}>이전으로</PrevButton>
            <NextButton
              onClick={() => {
                onIncrement();
                CategoryData();
              }}
            >
              다음으로
            </NextButton>
          </div>
        </TabPanel>
        {/* 제품 상태 선택 */}
        <TabPanel
          value="3"
          className="text-center"
          sx={{
            boxShadow: "0px 4px 20px 4px rgba(228, 228, 247, 0.8)",
            borderRadius: "20px",
            padding: "120px",
          }}
        >
          <TabTitle className="mb-[50px]">
            물건의 <Span>상태</Span>는 어떤가요?
          </TabTitle>
          <div className="w-[430px] min-h-[70px] my-0 mx-auto mb-[50px] bg-[#F5F5F5] rounded-[10px]">
            {checkValue.map((i: any) => (
              <CheckState>{checkedItems[i]}</CheckState>
            ))}
          </div>
          <ul className="flex justify-center ">
            {StatusType.map((i) => (
              <li key={i.name} className="mr-[20px] last:mr-0">
                <Input
                  type={"checkbox"}
                  id={i.name}
                  value={i.name}
                  checked={checkValue.includes(i.name) ? true : false}
                  onChange={handleCheck}
                />
                <Label htmlFor={i.name}>{i.name}</Label>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-10">
            <PrevButton onClick={onDecrement}>이전으로</PrevButton>
            <NextButton onClick={onIncrement}>다음으로</NextButton>
          </div>
        </TabPanel>
        {/* 제품 사진 등록 */}
        <TabPanel
          value="4"
          className="text-center"
          sx={{
            boxShadow: "0px 4px 20px 4px rgba(228, 228, 247, 0.8)",
            borderRadius: "20px",
            padding: "120px",
          }}
        >
          <TabTitle>
            비우려는 물건의 <Span>모습</Span>을 보여주세요
          </TabTitle>
          <Dropzone />
          <div className="flex justify-center mt-10">
            <PrevButton onClick={onDecrement}>이전으로</PrevButton>
            <NextButton onClick={onIncrement}>다음으로</NextButton>
          </div>
        </TabPanel>
        <TabPanel
          value="5"
          className="text-center"
          sx={{
            boxShadow: "0px 4px 20px 4px rgba(228, 228, 247, 0.8)",
            borderRadius: "20px",
            padding: "120px",
          }}
        >
          <TabTitle>
            비우려는 물건에 대해
            <Span> 하고싶은 말</Span>이 있나요?
          </TabTitle>
          <div className="mt-[50px] mb-2 text-[#616161]">상세설명</div>
          <textarea
            placeholder="물건에 대한 자세한 설명을 적어주세요."
            className="w-[430px] h-[200px] p-6 bg-[#f5f5f5]"
          ></textarea>
          <div className="mt-[30px] pt-[30px] mb-2 text-[#616161] border-solid border-[#D9D9D9] border-t-[1px]">
            키워드
          </div>
          <div className="flex justify-center mt-10">
            <PrevButton onClick={onDecrement}>이전으로</PrevButton>
            <NextButton
              onClick={() => {
                navigate("/select");
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
export default Information;

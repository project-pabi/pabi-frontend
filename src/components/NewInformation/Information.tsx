import React, { useState } from 'react';
import { Input, Label, NextButton, PrevButton, StyledTab, SubTitle, TabTitle, TextBox, Title } from './Information.style';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box } from '@mui/material';
// import { Categorys } from './Category.type';
import { Status } from './Status.type';
import Upload from './Upload';
import { useNavigate } from 'react-router-dom';

const Information = () => {
  const [value, setValue] = useState('1');
  let [data, setData] = useState<any[]>([]);
  let [inputValue, setInputValue] = useState('');
  let [radioValue, setRadioValue] = useState('');
  let navigate = useNavigate();

  console.log(data);

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
    <>
      <Title>상품정보 입력</Title>
      <SubTitle>비우고 싶은 제품이 무엇인지 설명해주세요!</SubTitle>
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className="mb-10 "
            TabIndicatorProps={{ sx: { height: '0' } }}
            variant="fullWidth"
            sx={{
              boxShadow: '0px 4px 20px 4px rgba(228, 228, 247, 0.8)',
              borderRadius: '10px',
              '& button.Mui-selected': {
                backgroundColor: '#0000D8',
                color: '#ffffff',
              },
            }}>
            <StyledTab label="제품 이름 입력" value="1" />
            <StyledTab label="제품 종류 선택" value="2" />
            <StyledTab label="제품 상태 선택" value="3" />
            <StyledTab label="제품 사진 등록" value="4" />
            <StyledTab label="제품 설명 입력" value="5" />
          </TabList>
        </Box>
        {/* 제품 이름 입력 */}
        <TabPanel
          value="1"
          className="text-center"
          sx={{
            boxShadow: '0px 4px 20px 4px rgba(228, 228, 247, 0.8)',
            borderRadius: '20px',
            padding: '88px',
          }}>
          <TabTitle>
            비우려는 물건의 <span style={{ color: '#0000D8' }}>이름</span>을 알려주세요
          </TabTitle>
          <TextBox
            type={'text'}
            placeholder="물건의 이름이 무엇인가요?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}></TextBox>
          <div className="flex justify-center mt-10">
            <NextButton
              onClick={() => {
                onIncrement();
                nameData();
              }}>
              다음으로
            </NextButton>
          </div>
        </TabPanel>
        {/* 제품 종류 선택 */}
        <TabPanel
          value="2"
          className="text-center"
          sx={{
            boxShadow: '0px 4px 20px 4px rgba(228, 228, 247, 0.8)',
            borderRadius: '20px',
            padding: '120px',
          }}>
          <TabTitle className="mb-[50px]">
            물건의 <span style={{ color: '#0000D8' }}>종류</span>는 무엇인가요?
          </TabTitle>
          <ul className="flex justify-center">
            {/* {Categorys.map((name) => (
              <li key={name} className="mr-[20px] last:mr-0">
                <Input
                  type={"checkbox"}
                  id={name}
                  value={name}
                  checked={radioValue === `${name}`}
                  onChange={(e) => setRadioValue(e.target.value)}
                />
                <Label htmlFor={name}>{name}</Label>
              </li>
            ))} */}
          </ul>
          <div className="flex justify-center mt-10">
            <PrevButton onClick={onDecrement}>이전으로</PrevButton>
            <NextButton
              onClick={() => {
                onIncrement();
                CategoryData();
              }}>
              다음으로
            </NextButton>
          </div>
        </TabPanel>
        {/* 제품 상태 선택 */}
        <TabPanel
          value="3"
          className="text-center"
          sx={{
            boxShadow: '0px 4px 20px 4px rgba(228, 228, 247, 0.8)',
            borderRadius: '20px',
            padding: '120px',
          }}>
          <TabTitle className="mb-[50px]">
            물건의 <span style={{ color: '#0000D8' }}>상태</span>는 어떤가요?
          </TabTitle>
          <ul className="flex justify-center">
            {Status.map((status) => (
              <li key={status} className="mr-[20px] last:mr-0">
                <Input type={'checkbox'} id={status} value={status} />
                <Label htmlFor={status}>{status}</Label>
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
            boxShadow: '0px 4px 20px 4px rgba(228, 228, 247, 0.8)',
            borderRadius: '20px',
            padding: '120px',
          }}>
          <TabTitle>
            비우려는 물건의 <span style={{ color: '#0000D8' }}>모습</span>을 보여주세요
          </TabTitle>
          <Upload />
          <div className="flex justify-center mt-10">
            <PrevButton onClick={onDecrement}>이전으로</PrevButton>
            <NextButton onClick={onIncrement}>다음으로</NextButton>
          </div>
        </TabPanel>
        <TabPanel
          value="5"
          className="text-center"
          sx={{
            boxShadow: '0px 4px 20px 4px rgba(228, 228, 247, 0.8)',
            borderRadius: '20px',
            padding: '120px',
          }}>
          <TabTitle>
            비우려는 물건에 대해
            <span style={{ color: '#0000D8' }}> 하고싶은 말</span>이 있나요?
          </TabTitle>
          <div className="mt-[50px] mb-2 text-[#616161]">상세설명</div>
          <textarea
            placeholder="물건에 대한 자세한 설명을 적어주세요."
            className="w-[430px] h-[200px] p-6 bg-[#f5f5f5]"></textarea>
          <div className="flex justify-center mt-10">
            <PrevButton onClick={onDecrement}>이전으로</PrevButton>
            <NextButton
              onClick={() => {
                navigate('/select');
              }}>
              다음으로
            </NextButton>
          </div>
        </TabPanel>
      </TabContext>
    </>
  );
};
export default Information;

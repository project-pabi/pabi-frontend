import { FC, ReactElement, Fragment, useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import { Input, Label, NextButton, PrevButton, StyledTab, SubTitle, TabTitle, TextBox, Title } from './Information.style';
import { Box } from '@mui/material';
import { TabList, Tab } from '@component/Tab';
import { Outlet } from 'react-router-dom';
import { stringify } from 'querystring';
import tw from 'twin.macro';
import styled from 'styled-components';
import { useMatch } from 'react-router-dom';

const Panel = tw.div`
  shadow-signature
  rounded-[1.25rem]
  p-22
  text-center
`;

const Information = () => {
  const tab1Match = useMatch('/write/auction/type') != null;
  const tab2Match = useMatch('/write/auction/price') != null;
  const tab3Match = useMatch('/write/auction/trade-type') != null;
  let [tabIndex, setTabIndex] = useState<number>(0);

  const getTabIndex = () => {
    if (tab1Match) return 0;
    if (tab2Match) return 1;
    if (tab3Match) return 2;
    return 0;
  };

  return (
    <Fragment>
      <Title>상품정보 입력</Title>
      <SubTitle>비우고 싶은 제품이 무엇인지 설명해주세요!</SubTitle>

      <TabList className="mb-10" tabIndex={getTabIndex()}>
        <Tab isSelect={tab1Match}>경매 방식 선택</Tab>
        <Tab isSelect={tab2Match}>시작 가격 입력</Tab>
        <Tab isSelect={tab3Match}>거래 방식 선택</Tab>
      </TabList>
      <Panel>
        <Outlet />
      </Panel>
    </Fragment>
  );
};
export default Information;

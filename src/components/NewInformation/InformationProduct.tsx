import { FC, ReactElement, Fragment, useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import {
  Input,
  Label,
  NextButton,
  PrevButton,
  StyledTab,
  SubTitle,
  TabTitle,
  TextBox,
  Title,
} from '../NewInformation/Information.style';
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
  const tab1Match = useMatch('/write/product/name') != null;
  const tab2Match = useMatch('/write/product/category') != null;
  const tab3Match = useMatch('/write/product/state') != null;
  const tab4Match = useMatch('/write/product/photo') != null;
  const tab5Match = useMatch('/write/product/sdg') != null;
  let [tabIndex, setTabIndex] = useState<number>(0);

  const getTabIndex = () => {
    if (tab1Match) return 0;
    if (tab2Match) return 1;
    if (tab3Match) return 2;
    if (tab4Match) return 3;
    if (tab5Match) return 4;
    return 0;
  };

  return (
    <Fragment>
      <Title>상품정보 입력</Title>
      <SubTitle>비우고 싶은 제품이 무엇인지 설명해주세요!</SubTitle>

      <TabList className="mb-10" tabIndex={getTabIndex()}>
        <Tab isSelect={tab1Match}>제품 이름 입력</Tab>
        <Tab isSelect={tab2Match}>제품 종류 선택</Tab>
        <Tab isSelect={tab3Match}>제품 상태 선택</Tab>
        <Tab isSelect={tab4Match}>제품 사진 등록</Tab>
        <Tab isSelect={tab5Match}>제품 설명 입력</Tab>
      </TabList>
      <Panel>
        <Outlet />
      </Panel>
    </Fragment>
  );
};
export default Information;

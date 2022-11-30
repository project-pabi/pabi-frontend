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
import { useMatch, useNavigate } from 'react-router-dom';
import { isCompliteSelector } from '@/store/slices/itemInfoSlice';
import { useAppDispatch, useAppSelector } from '@/store/config';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
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
  const tab5Match = useMatch('/write/product/explan') != null;
  let [tabIndex, setTabIndex] = useState<number>(0);

  let navigate = useNavigate();
  const { isNameComplite, isCategoryComplite, isStateComplite, isPhotoComplite, isExplanComplite } =
    useSelector(isCompliteSelector);

  const getTabIndex = () => {
    if (tab5Match) return 4;
    if (tab4Match) return 3;
    if (tab3Match) return 2;
    if (tab2Match) return 1;
    if (tab1Match) return 0;
    return undefined;
  };
  console.log(isNameComplite);

  const meveNameTab = () => {
    navigate('./name');
  };

  const meveCategoryTab = () => {
    if (!isNameComplite) {
      alert('제품 이름을 먼저 입력해 주세요');
      return;
    }
    navigate('./category');
  };

  return (
    <Fragment>
      <Title>상품정보 입력</Title>
      <SubTitle>비우고 싶은 제품이 무엇인지 설명해주세요!</SubTitle>
      <TabList className="mb-10" tabIndex={getTabIndex()}>
        <Tab isSelect={tab1Match} isComplite={isNameComplite} onClick={meveNameTab}>
          제품 이름 입력
        </Tab>
        <Tab isSelect={tab2Match} isComplite={isCategoryComplite} onClick={meveCategoryTab}>
          제품 종류 선택
        </Tab>
        <Tab isSelect={tab3Match} isComplite={isStateComplite}>
          제품 상태 선택
        </Tab>
        <Tab isSelect={tab4Match} isComplite={isPhotoComplite}>
          제품 사진 등록
        </Tab>
        <Tab isSelect={tab5Match} isComplite={isExplanComplite}>
          제품 설명 입력
        </Tab>
      </TabList>
      <Panel>
        <Outlet />
      </Panel>
    </Fragment>
  );
};
export default Information;

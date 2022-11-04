import { FC, ReactElement, Fragment, useState } from "react";
import { TabContext, TabPanel } from "@mui/lab";
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
} from "../NewInformation/Information.style";
import { Box } from "@mui/material";
import { TabList, Tab } from "@component/Tab";
import { Outlet } from "react-router-dom";
import { stringify } from "querystring";

const Information = () => {
  return (
    <Fragment>
      <Title>상품정보 입력</Title>
      <SubTitle>비우고 싶은 제품이 무엇인지 설명해주세요!</SubTitle>

      <TabList>
        <Tab className="bg-primary-500">제품 이름 입력</Tab>
        <Tab>제품 종류 선택</Tab>
        <Tab>제품 상태 선택</Tab>
        <Tab>제품 사진 등록</Tab>
        <Tab>제품 설명 입력</Tab>
      </TabList>

      <Outlet />
    </Fragment>
  );
};
export default Information;

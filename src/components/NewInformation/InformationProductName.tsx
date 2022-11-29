import { useForm } from 'react-hook-form';
import React, { useState, useCallback } from 'react';
import updateAction from './updateAction';
import {
  Input,
  Label,
  NextButton,
  PrevButton,
  StyledTab,
  SubTitle,
  TabTitle,
  TextBox,
  TitleHighlight,
  Title,
} from './Information.style';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/store/config';
import { setName } from '@/store/slices/itemInfoSlice';

const Information = (props: any) => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();

  const { name } = useAppSelector((state) => state.itemInfo);
  const dispatch = useAppDispatch();

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(setName(data.name));
    navigate('../category');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TabTitle>
          비우려는 물건의 <TitleHighlight>이름</TitleHighlight>을 알려주세요
        </TabTitle>
        <TextBox type={'text'} placeholder="물건의 이름이 무엇인가요?" {...register('name')}></TextBox>
        <div className="flex justify-center mt-10">
          <NextButton type="submit">다음으로</NextButton>
        </div>
      </form>
    </>
  );
};
export default Information;

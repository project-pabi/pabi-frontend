import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
import yup from '@/plugin/yup';
import {useItemInfoStore} from "@stores/itemInfoStore";

interface FormValues {
  name: string;
}

const schema = yup
  .object({
    name: yup.string().label('물건의 이름은').required().max(10),
  })
  .required();

const Information = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  let navigate = useNavigate();

 const {name,setName} = useItemInfoStore((state) => state);


//const { name } = useAppSelector((state) => state.itemInfo);
  setValue('name', name);
  
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
        <p>{errors.name?.message}</p>
        <div className="flex justify-center mt-10">
          <NextButton type="submit">다음으로</NextButton>
        </div>
      </form>
    </>
  );
};
export default Information;

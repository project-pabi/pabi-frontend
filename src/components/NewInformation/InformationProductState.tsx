import {Control, useForm, useWatch} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useItemInfoStore} from '@stores/itemInfoStore';
import {yupResolver} from '@hookform/resolvers/yup';
import yup from '@/plugin/yup';
import {status, StatusKey, StatusMap} from './Status.type';
import {Input, Label, NextButton, PrevButton, TabTitle, TitleHighlight} from './Information.style';
import Tag from "@component/Tag/Tag";
import React, {useEffect, useState} from "react";
import {UseFormGetValues, UseFormSetValue} from "react-hook-form/dist/types/form";

interface FormValues {
  state: StatusKey[];
}

const schema = yup
.object({
  state: yup.array().of(yup.string().label('물건의 상태 ').required()).nullable().optional(),
})
.required();

interface InformationTagProps {
  control: Control<FormValues>;
  tagList: string[];
  getValues: UseFormGetValues<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  setTagList: React.Dispatch<React.SetStateAction<StatusKey[]>>;
}

const InformationTag = ({control, tagList, getValues, setValue, setTagList}: InformationTagProps) => {

  return (
      <Tag
          className="w-full"
          readonly={false}
          creatable={false}
          tagList={tagList}
          deleteTagItem={(index) => {
            const value = getValues('state');
            value.splice(index, 1);
            setValue('state', value);
          }}
          deleteAllTag={() => {
            setTagList([]);
            setValue('state', []);
          }}></Tag>)
}

const Information = (props: any) => {
  const [tagList, setTagList] = useState<StatusKey[]>([])
  const {state, setState,clear} = useItemInfoStore((state) => state);
  const form = useForm<FormValues>({resolver: yupResolver(schema)});
  const {register, control, handleSubmit, formState, getValues, setValue} = form;
  const stateWatch = useWatch<FormValues>({control, name: "state"});
  const navigate = useNavigate();

  const getTagText = (): string[] => {
    console.log(tagList)
    return tagList?.map((tag) => StatusMap[tag]) ?? {};
  }

  const onSubmit = (data: any) => {
    console.log(data);
    setState(data.state);
    navigate('../photo');
  };

  useEffect(() => {
    if (Array.isArray(stateWatch)) {
      setTagList(stateWatch)
    }
  }, [stateWatch])

  useEffect(() => {
    setTagList(state)
    setValue('state', state);
  }, [])

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <TabTitle className="mb-[50px]">
          물건의 <TitleHighlight>상태</TitleHighlight>는 어떤가요?
        </TabTitle>
        <div className="flex justify-center">
          <div className="w-[432px]">

            <InformationTag
                tagList={getTagText()}
                getValues={getValues}
                setValue={setValue}
                setTagList={setTagList}
                control={control}></InformationTag>
            <ul className="flex justify-center gap-5 w-full flex-wrap">
              {status.map((status) => (
                  <li key={status} className="last:mr-0">
                    <Input type={'checkbox'} id={status} value={status} {...register('state')} />
                    <Label htmlFor={status}>{StatusMap[status]}</Label>
                  </li>
              ))}
            </ul>
          </div>
        </div>
        <p>{formState.errors.state?.message}</p>
        <div className="flex justify-center mt-10">
          <PrevButton onClick={() => navigate('../category')}>이전으로</PrevButton>
          <NextButton type="submit">다음으로</NextButton>
        </div>
      </form>
  );
};

export default Information;
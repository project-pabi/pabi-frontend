import {Control, useForm, useWatch} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useItemInfoStore} from '@stores/itemInfoStore';
import {yupResolver} from '@hookform/resolvers/yup';
import yup from '@/plugin/yup';
import {Status} from './Status.type';
import {Input, Label, PrevButton, NextButton, TabTitle, TitleHighlight} from './Information.style';
import Tag from "@component/Tag/Tag";
import React, {useState, useEffect} from "react";

interface FormValues {
  state: string[];
}

const schema = yup
.object({
  state: yup.array().of(yup.string().label('물건의 상태 ').required()).nullable().optional(),
})
.required();

interface InformationTagProps {
  control: Control<FormValues>
  tagList: string[]
  setTagList: React.Dispatch<React.SetStateAction<string[]>>
}

const InformationTag = ({control, tagList, setTagList}: InformationTagProps) => {
  const stateWatch = useWatch<FormValues>({control, name: "state"});
  useEffect(() => {
    if (Array.isArray(stateWatch)) {
      setTagList(stateWatch)
    }
  }, [stateWatch])
  return (<Tag className="w-full" readonly={true} tagList={tagList} setTagList={setTagList}></Tag>)
}

const Information = (props: any) => {
  const [tagList, setTagList] = useState<string[]>([])
  const {state, setState} = useItemInfoStore((state) => state);

  const form = useForm<FormValues>({resolver: yupResolver(schema)});
  const {register, control, handleSubmit, formState, setValue} = form;

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
    setState(data.state);
    navigate('../photo');
  };

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
          <div className="w-[432px] ">

            <InformationTag tagList={tagList} setTagList={setTagList} control={control}></InformationTag>
            <ul className="flex justify-center gap-5 w-full flex-wrap">
              {Status.map((status) => (
                  <li key={status} className="last:mr-0">
                    <Input type={'checkbox'} id={status} value={status} {...register('state')} />
                    <Label htmlFor={status}>{status}</Label>
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
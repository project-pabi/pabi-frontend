import {useForm, Controller} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useItemInfoStore} from '@stores/itemInfoStore';
import {yupResolver} from '@hookform/resolvers/yup';
import yup from '@/plugin/yup';
import {PrevButton, NextButton, TabTitle, TitleHighlight} from './Information.style';
import Upload from "@component/NewInformation/Upload";
import {useEffect} from "react";
import {isEmpty, mapValues} from "lodash";

interface FormValues {
  photo: string;
}

const schema = yup.object().shape({
  photo: yup.mixed().test("photoCount", "물건의 사진을 1장 이상 업로드 해 주세요.", (value) => {
    return value?.length > 0;
  })
});

const Information = (props: any) => {
  const {photo, setPhoto} = useItemInfoStore((state) => state);

  const form = useForm<FormValues>({resolver: yupResolver(schema)});
  const {register, handleSubmit, formState, setValue} = form;

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data.photo);
    setPhoto(data.photo);
    navigate('../explain');
  }

  useEffect(() => {
    setValue('photo', photo);
  }, [])

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <TabTitle className="mb-[50px]">
          비우려는 물건의 <TitleHighlight>모습</TitleHighlight>을 보여주세요
        </TabTitle>
        <Upload register={register("photo")} value={photo}></Upload>
        <p>{formState.errors.photo?.message}</p>
        <div className="flex justify-center mt-10">
          <PrevButton onClick={() => navigate('../state')}>이전으로</PrevButton>
          <NextButton type="submit">다음으로</NextButton>
        </div>
      </form>
  );
};
export default Information;

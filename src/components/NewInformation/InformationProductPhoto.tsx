import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useItemInfoStore } from '@stores/itemInfoStore';
import { yupResolver } from '@hookform/resolvers/yup';
import yup from '@/plugin/yup';
import { Status } from './Status.type';
import { Input, Label, PrevButton, NextButton, TabTitle, TitleHighlight } from './Information.style';
import Upload from "@component/NewInformation/Upload";

interface FormValues {
  photo: string;
}

const schema = yup
  .object({
    photo: yup.object().label('물건의 사진 ').required(),
  })
  .required();

const Information = (props: any) => {
  const { photo, setPhoto } = useItemInfoStore((state) => state);

  const form = useForm<FormValues>({ resolver: yupResolver(schema) });
  const { register, handleSubmit, formState, setValue } = form;

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
    setPhoto(data.photo);
    navigate('../explan');
  };

  setValue('photo', photo);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TabTitle className="mb-[50px]">
        비우려는 물건의 <TitleHighlight>모습</TitleHighlight>을 보여주세요
      </TabTitle>

      <Upload></Upload>
      <p>{formState.errors.photo?.message}</p>
      <div className="flex justify-center mt-10">
        <PrevButton onClick={() => navigate('../state')}>이전으로</PrevButton>
        <NextButton type="submit">다음으로</NextButton>
      </div>
    </form>
  );
};
export default Information;

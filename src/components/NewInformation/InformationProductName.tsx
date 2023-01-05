import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useItemInfoStore } from '@stores/itemInfoStore';
import { yupResolver } from '@hookform/resolvers/yup';
import yup from '@/plugin/yup';
import { NextButton, TabTitle, TextBox, TitleHighlight } from './Information.style';

interface FormValues {
  name: string;
}

const schema = yup
  .object({
    name: yup.string().label('물건의 이름은').required().max(10),
  })
  .required();

const Information = (props: any) => {
  const { name, setName } = useItemInfoStore((state) => state);

  const form = useForm<FormValues>({ resolver: yupResolver(schema) });
  const { register, handleSubmit, formState, setValue } = form;

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
    setName(data.name);
    navigate('../category');
  };

  setValue('name', name);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TabTitle>
        비우려는 물건의 <TitleHighlight>이름</TitleHighlight>을 알려주세요
      </TabTitle>
      <TextBox type={'text'} placeholder="물건의 이름이 무엇인가요?" {...register('name')}></TextBox>
      <p>{formState.errors.name?.message}</p>
      <div className="flex justify-center mt-10">
        <NextButton type="submit">다음으로</NextButton>
      </div>
    </form>
  );
};
export default Information;

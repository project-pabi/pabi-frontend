import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useItemInfoStore } from '@stores/itemInfoStore';
import { yupResolver } from '@hookform/resolvers/yup';
import yup from '@/plugin/yup';
import { Category, categorys } from './Category.type';
import { Input, Label, NextButton, PrevButton, TabTitle, TitleHighlight } from './Information.style';

interface FormValues {
  type: string;
}

const schema = yup.object({ category: yup.string().label('물건의 종류 ').required() }).required();

const Information = () => {
  const { type, setType } = useItemInfoStore((state) => state);

  const form = useForm<FormValues>({ resolver: yupResolver(schema) });
  const { register, handleSubmit, formState, setValue } = form;

  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    console.log(data);
    setType(data.type);
    navigate('../price');
  };

  setValue('type', type);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TabTitle className="mb-[50px]">
        어떤 <TitleHighlight>방법</TitleHighlight>으로 비울까요?
      </TabTitle>
      <ul className="flex justify-center">
        {categorys
          .map((key) => Category[key])
          .map((i) => (
            <li key={i} className="mr-[20px] last:mr-0">
              <Input type={'checkbox'} id={i} value={i} {...register('type')} />
              <Label htmlFor={i}>{i}</Label>
            </li>
          ))}
      </ul>
      <div className="flex justify-center mt-10">
        <PrevButton onClick={() => navigate('../../product/explan')}>이전으로</PrevButton>
        <NextButton type="submit">다음으로</NextButton>
      </div>
    </form>
  );
};
export default Information;

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useItemInfoStore } from '@stores/itemInfoStore';
import { yupResolver } from '@hookform/resolvers/yup';
import yup from '@/plugin/yup';
import { Status } from './Status.type';
import { Input, Label, NextButton, PrevButton, TabTitle, TitleHighlight } from './Information.style';

interface FormValues {
  price: number;
}

const schema = yup.object({ price: yup.number().label('경매시작가 ').required() }).required();

const Information = () => {
  const { price, setPrice } = useItemInfoStore((state) => state);

  const form = useForm<FormValues>({ resolver: yupResolver(schema) });
  const { register, handleSubmit, formState, setValue } = form;

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
    setPrice(data.price);
    navigate('../trade-type');
  };

  setValue('price', price);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TabTitle className="mb-[50px]">
        경매를 <TitleHighlight>시작할 가격</TitleHighlight>을 알려주세요
      </TabTitle>

      <ul className="flex justify-center">
        {Status.map((status) => (
          <li key={status} className="mr-[20px] last:mr-0">
            <Input type={'checkbox'} id={status} value={status} {...register('price')} />
            <Label htmlFor={status}>{status}</Label>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-10">
        <PrevButton onClick={() => navigate('../type')}>이전으로</PrevButton>
        <NextButton type="submit">다음으로</NextButton>
      </div>
    </form>
  );
};
export default Information;

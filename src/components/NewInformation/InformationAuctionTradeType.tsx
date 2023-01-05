import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useItemInfoStore } from '@stores/itemInfoStore';
import { yupResolver } from '@hookform/resolvers/yup';
import yup from '@/plugin/yup';
import { Status } from './Status.type';
import { Input, Label, NextButton, PrevButton, TabTitle, TitleHighlight } from './Information.style';

interface FormValues {
  tradeType: string;
}

const schema = yup.object({ tradeType: yup.string().label('물건의 종류 ').required() }).required();

const Information = () => {
  const { tradeType, setTradeType } = useItemInfoStore((state) => state);

  const form = useForm<FormValues>({ resolver: yupResolver(schema) });
  const { register, handleSubmit, formState, setValue } = form;

  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    console.log(data);
    setTradeType(data.tradeType);
    navigate('../photo');
  };

  setValue('tradeType', tradeType);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TabTitle className="mb-[50px]">
          물건을 어떻게 <TitleHighlight>전달</TitleHighlight>할까요?
        </TabTitle>

        <ul className="flex justify-center">
          {Status.map((status) => (
            <li key={status} className="mr-[20px] last:mr-0">
              <Input type={'checkbox'} id={status} value={status} {...register('tradeType')} />
              <Label htmlFor={status}>{status}</Label>
            </li>
          ))}
        </ul>
        <p>{formState.errors.tradeType?.message}</p>
        <div className="flex justify-center mt-10">
          <PrevButton onClick={() => navigate('../price')}>이전으로</PrevButton>
          <NextButton type="submit">다음으로</NextButton>
        </div>
      </form>
    </>
  );
};
export default Information;

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useItemInfoStore } from '@stores/itemInfoStore';
import { yupResolver } from '@hookform/resolvers/yup';
import yup from '@/plugin/yup';
import { Status } from './Status.type';
import { Input, Label, PrevButton, NextButton, TabTitle, TitleHighlight } from './Information.style';

interface FormValues {
  state: string[];
}

const schema = yup
  .object({
    state: yup.array().of(yup.string().label('물건의 상태 ').required()).nullable().optional(),
  })
  .required();

const Information = (props: any) => {
  const { state, setState } = useItemInfoStore((state) => state);

  const form = useForm<FormValues>({ resolver: yupResolver(schema) });
  const { register, handleSubmit, formState, setValue } = form;

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
    setState(data.state);
    navigate('../photo');
  };

  setValue('state', state);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TabTitle className="mb-[50px]">
        물건의 <TitleHighlight>상태</TitleHighlight>는 어떤가요?
      </TabTitle>

      <ul className="flex justify-center">
        {Status.map((status) => (
          <li key={status} className="mr-[20px] last:mr-0">
            <Input type={'checkbox'} id={status} value={status} {...register('state')} />
            <Label htmlFor={status}>{status}</Label>
          </li>
        ))}
      </ul>
      <p>{formState.errors.state?.message}</p>
      <div className="flex justify-center mt-10">
        <PrevButton onClick={() => navigate('../category')}>이전으로</PrevButton>
        <NextButton type="submit">다음으로</NextButton>
      </div>
    </form>
  );
};
export default Information;

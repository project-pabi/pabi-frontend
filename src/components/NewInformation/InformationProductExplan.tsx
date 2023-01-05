import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useItemInfoStore } from '@stores/itemInfoStore';
import { yupResolver } from '@hookform/resolvers/yup';
import yup from '@/plugin/yup';
import { Status } from './Status.type';
import { Input, Label, NextButton, PrevButton, TabTitle, TitleHighlight } from './Information.style';

interface FormValues {
  explan: string;
}

const schema = yup
  .object({
    explan: yup.object().label('물건에 대해 하고싶은 말 ').required(),
  })
  .required();

const Information = (props: any) => {
  const { explan, setExplan } = useItemInfoStore((state) => state);

  const form = useForm<FormValues>({ resolver: yupResolver(schema) });
  const { register, handleSubmit, formState, setValue } = form;

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
    setExplan(data.explan);
    navigate('../../auction/type');
  };

  setValue('explan', explan);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TabTitle className="mb-[50px]">
        비우려는 물건에 대해 <TitleHighlight>하고싶은 말</TitleHighlight>이 있나요?
      </TabTitle>

      <ul className="flex justify-center">
        {Status.map((status) => (
          <li key={status} className="mr-[20px] last:mr-0">
            <Input type={'checkbox'} id={status} value={status} {...register('explan')} />
            <Label htmlFor={status}>{status}</Label>
          </li>
        ))}
      </ul>
      <p>{formState.errors.explan?.message}</p>
      <div className="flex justify-center mt-10">
        <PrevButton onClick={() => navigate('../photo')}>이전으로</PrevButton>
        <NextButton type="submit">다음으로</NextButton>
      </div>
    </form>
  );
};
export default Information;

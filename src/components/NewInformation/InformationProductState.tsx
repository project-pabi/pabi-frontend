import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import updateAction from './updateAction';
import {
  Input,
  Label,
  NextButton,
  PrevButton,
  StyledTab,
  SubTitle,
  TabTitle,
  TextBox,
  TitleHighlight,
  Title,
} from './Information.style';
import { Status } from './Status.type';
import { useNavigate } from 'react-router-dom';
import { Category } from './Category.type';
import { useAppDispatch, useAppSelector } from '@/store/config';
import { setState } from '@/store/slices/itemInfoSlice';
import yup from '@/plugin/yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormValues {
  state: string[];
}

const schema = yup
  .object({
    state: yup.array().of(yup.string().label('물건의 상태 ').required()).nullable().optional(),
  })
  .required();

const Information = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const { actions } = useStateMachine({ updateAction });
  let navigate = useNavigate();

  const { state } = useAppSelector((state) => state.itemInfo);
  setValue('state', state);

  const dispatch = useAppDispatch();

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(setState(data.state));
    navigate('../photo');
  };

  return (
    <>
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
        <p>{errors.state?.message}</p>
        <div className="flex justify-center mt-10">
          <PrevButton onClick={() => navigate('../category')}>이전으로</PrevButton>
          <NextButton type="submit">다음으로</NextButton>
        </div>
      </form>
    </>
  );
};
export default Information;

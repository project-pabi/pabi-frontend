import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import { yupResolver } from '@hookform/resolvers/yup';
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
import { useNavigate } from 'react-router-dom';
import { Category, categorys } from './Category.type';
import { useAppDispatch, useAppSelector } from '@/store/config';
import { setCategory } from '@/store/slices/itemInfoSlice';
import yup from '@/plugin/yup';

interface FormValues {
  category: string;
}

const schema = yup
  .object({
    category: yup.string().label('물건의 종류 ').required(),
  })
  .required();

const Information = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  let navigate = useNavigate();

  const { category } = useAppSelector((state) => state.itemInfo);
  setValue('category', category);
  const dispatch = useAppDispatch();

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(setCategory(data.category));
    navigate('../state');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TabTitle className="mb-[50px]">
          물건의 <TitleHighlight>종류</TitleHighlight>는 무엇인가요?
        </TabTitle>
        <ul className="flex justify-center">
          {categorys.map((key) => (
            <li key={key} className="mr-[20px] last:mr-0">
              <Input type={'radio'} id={key} value={key} {...register('category')} />
              <Label htmlFor={key}>{Category[key]}</Label>
            </li>
          ))}
        </ul>
        <p>{errors.category?.message}</p>
        <div className="flex justify-center mt-10">
          <PrevButton onClick={() => navigate('../name')}>이전으로</PrevButton>
          <NextButton type="submit">다음으로</NextButton>
        </div>
      </form>
    </>
  );
};
export default Information;

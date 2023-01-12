import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useItemInfoStore} from '@stores/itemInfoStore';
import {yupResolver} from '@hookform/resolvers/yup';
import yup from '@/plugin/yup';
import {Category, categorys} from './Category.type';
import {Input, Label, NextButton, PrevButton, TabTitle, TitleHighlight} from './Information.style';

interface FormValues {
  category: string;
}

const schema = yup.object({category: yup.string().label('물건의 종류 ').required()}).required();

const Information = () => {
  const {category, setCategory} = useItemInfoStore((state) => state);

  const form = useForm<FormValues>({resolver: yupResolver(schema)});
  const {register, handleSubmit, formState, setValue} = form;

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
    setCategory(data.category);
    navigate('../state');
  };

  setValue('category', category);

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <TabTitle className="mb-[50px]">
          물건의 <TitleHighlight>종류</TitleHighlight>는 무엇인가요?
        </TabTitle>
        <div className="flex justify-center">
          <ul className="flex justify-center w-[670px] flex-wrap gap-5">
            {categorys.map((key) => (
                <li key={key} className="last:mr-0">
                  <Input type={'radio'} id={key} value={key} {...register('category')} />
                  <Label htmlFor={key}>{Category[key]}</Label>
                </li>
            ))}
          </ul>
        </div>

        <p>{formState.errors.category?.message}</p>
        <div className="flex justify-center mt-10">
          <PrevButton onClick={() => navigate('../name')}>이전으로</PrevButton>
          <NextButton type="submit">다음으로</NextButton>
        </div>
      </form>
  );
};
export default Information;

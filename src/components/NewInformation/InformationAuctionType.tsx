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
import { useNavigate } from 'react-router-dom';
import { Category, categorys } from './Category.type';

const Information = (props: any) => {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  let navigate = useNavigate();
  const onSubmit = (data: any) => {
    console.log(data);
    navigate('../price');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TabTitle className="mb-[50px]">
          어떤 <TitleHighlight>방법</TitleHighlight>으로 비울까요?
        </TabTitle>
        <ul className="flex justify-center">
          {categorys
            .map((key) => Category[key])
            .map((i) => (
              <li key={i} className="mr-[20px] last:mr-0">
                <Input type={'checkbox'} id={i} value={i} {...register('category')} />
                <Label htmlFor={i}>{i}</Label>
              </li>
            ))}
        </ul>
        <div className="flex justify-center mt-10">
          <PrevButton onClick={() => navigate('../../product/explan')}>이전으로</PrevButton>
          <NextButton type="submit">다음으로</NextButton>
        </div>
      </form>
    </>
  );
};
export default Information;

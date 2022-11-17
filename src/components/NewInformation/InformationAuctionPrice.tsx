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

const Information = (props: any) => {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  let navigate = useNavigate();
  const onSubmit = (data: any) => {
    console.log(data);
    navigate('../trade-type');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TabTitle className="mb-[50px]">
          물건의 <TitleHighlight>종류</TitleHighlight>는 무엇인가요?
        </TabTitle>

        <ul className="flex justify-center">
          {Status.map((status) => (
            <li key={status} className="mr-[20px] last:mr-0">
              <Input type={'checkbox'} id={status} value={status} {...register('state')} />
              <Label htmlFor={status}>{status}</Label>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-10">
          <PrevButton onClick={() => navigate('../type')}>이전으로</PrevButton>
          <NextButton type="submit">다음으로</NextButton>
        </div>
      </form>
    </>
  );
};
export default Information;

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
    navigate('../../auction/type');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TabTitle className="mb-[50px]">
          비우려는 물건에 대해 <TitleHighlight>하고싶은 말</TitleHighlight>이 있나요?
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
          <PrevButton onClick={() => navigate('../photo')}>이전으로</PrevButton>
          <NextButton type="submit">다음으로</NextButton>
        </div>
      </form>
    </>
  );
};
export default Information;

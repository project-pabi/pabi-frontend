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
} from '../NewInformation/Information.style';
import { useNavigate } from 'react-router-dom';

const Information = (props: any) => {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  let navigate = useNavigate();
  const onSubmit = (data: any) => {
    console.log(data);
    navigate('../category');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TabTitle>
          비우려는 물건의 <TitleHighlight>이름</TitleHighlight>을 알려주세요
        </TabTitle>
        <TextBox type={'text'} placeholder="물건의 이름이 무엇인가요?" {...register('name')}></TextBox>
        <div className="flex justify-center mt-10">
          <NextButton type="submit">다음으로</NextButton>
        </div>
      </form>
    </>
  );
};
export default Information;

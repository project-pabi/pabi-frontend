import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useItemInfoStore} from '@stores/itemInfoStore';
import {yupResolver} from '@hookform/resolvers/yup';
import yup from '@/plugin/yup';
import {Input, Label, NextButton, PrevButton, TabTitle, TextBox, TitleHighlight} from './Information.style';
import {useEffect} from "react";

interface FormValues {
  price: number;
}

const schema = yup.object({
  price: yup.number().label('경매시작가 ').min(10)
  .required()
  .test("ten", "경매 시작가를 10원 단위로 입력 해 주세요.", (value) => !((value ?? 1) % 10))
});

const Information = () => {
  const {price, setPrice} = useItemInfoStore((state) => state);

  const form = useForm<FormValues>({resolver: yupResolver(schema)});
  const {register, handleSubmit, formState, setValue} = form;

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
    setPrice(data.price);
    navigate('../trade-type');
  };

  useEffect(() => {
    setValue('price', price);
  }, [])

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <TabTitle className="mb-[50px]">
          경매를 <TitleHighlight>시작할 가격</TitleHighlight>을 알려주세요
        </TabTitle>

        <p>구매자는 10원 단위로 가격을 올릴 수 있어요.</p>
        <span className="text-section-title-1-sub mr-2.5">시작 가격은</span>
        <TextBox className="w-[200px]" type={'text'} placeholder="10" {...register('price')}></TextBox>
        <span className="text-section-title-1-sub ml-2.5">원 부터</span>
        <p>{formState.errors.price?.message}</p>
        <ul className="flex justify-center">

        </ul>
        <div className="flex justify-center mt-10">
          <PrevButton onClick={() => navigate('../type')}>이전으로</PrevButton>
          <NextButton type="submit">다음으로</NextButton>
        </div>
      </form>
  );
};
export default Information;

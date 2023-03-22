import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useItemInfoStore} from '@stores/itemInfoStore';
import {yupResolver} from '@hookform/resolvers/yup';
import yup from '@/plugin/yup';
import {Input, Label, NextButton, PrevButton, TabTitle, TextArea, TextBox, TitleHighlight} from './Information.style';
import {useEffect, useState} from "react";
import Tag from "@component/Tag/Tag"
import tw from "twin.macro";

interface FormValues {
  explainNote: string;
  explainTag: string[];
}

export const HorizontalLine = tw.div`w-full h-px bg-gray-300`

const schema = yup
.object({
  explainNote: yup.string().label('물건에 대해 하고싶은 말 ').test(
      'required-one',
      '위 내용 중 한 가지는 반드시 입력해야 해요 (상세설명/키워드)',
      ((value,testContext) => {
        return !!(testContext.parent.explainNote || testContext.parent.explainTag.length);
      })
  ),
  explainTag: yup.array().of(yup.string().label('키워드').required()).label('키워드').test(
      'required-one',
      '위 내용 중 한 가지는 반드시 입력해야 해요 (상세설명/키워드)',
      ((value,testContext) => {
        return !!(testContext.parent.explainNote || testContext.parent.explainTag.length);
      })
  ),
});


const Information = (props: any) => {
  const [tagList, setTagList] = useState<string[]>([])
  const [recommendTag, setRecommendTag] = useState<string[]>([])
  const {explainNote, explainTag, setExplain} = useItemInfoStore((state) => state);

  const form = useForm<FormValues>({resolver: yupResolver(schema)});
  const {register, control, handleSubmit, formState, setValue} = form;

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    //console.log(data);
    setExplain(data.explainNote, data.explainTag);
    navigate('../../auction/type');
  };

  useEffect(() => {
    setValue('explainTag', tagList);
  }, [tagList])

  useEffect(() => {
    setTagList(explainTag)
    setValue('explainNote', explainNote);
  }, [])

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <TabTitle className="mb-[50px]">
          비우려는 물건에 대해 <TitleHighlight>하고싶은 말</TitleHighlight>이 있나요?
        </TabTitle>

        <div className="flex justify-center">
          <div className="w-[432px]">
            <p className="text-sm text-gray-700">상세설명</p>
            <TextArea className="mt-2" placeholder="물건에 대한 자세한 설명을 적어주세요" {...register('explainNote')}></TextArea>
            <HorizontalLine className="mt-8"></HorizontalLine>
            <p className="mt-7 text-sm text-gray-700">키워드</p>
            <Tag
                className="mt-2"
                tagList={tagList}
                readonly={false}
                creatable={true}
                createTagItem={(item) => {
                  setTagList([...tagList, item])
                  setRecommendTag([]);
                }}
                deleteTagItem={(index) => {
                  const value = [...tagList]
                  value.splice(index, 1);
                  setTagList(value);
                }}
                deleteAllTag={() => {
                  setTagList([]);
                }}
                onKeyUp={(e) => {
                  setRecommendTag([])
                  if ((e.target as HTMLInputElement).value) {
                    setRecommendTag(['여기에', 'api', '결과', '입력'])
                  }
                }}
                recommendTag={recommendTag}
            ></Tag>
          </div>
        </div>
        <p>{ formState.errors.explainNote?.message ?? formState.errors.explainTag?.message}</p>

        <div className="flex justify-center mt-10">
          <PrevButton onClick={() => navigate('../photo')}>이전으로</PrevButton>
          <NextButton type="submit">다음으로</NextButton>
        </div>
      </form>
  );
};
export default Information;

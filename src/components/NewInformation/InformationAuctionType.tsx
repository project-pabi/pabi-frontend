import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {useItemInfoStore} from '@stores/itemInfoStore';
import {yupResolver} from '@hookform/resolvers/yup';
import yup from '@/plugin/yup';
import {Card, CardContent, CardImage} from '@component/card'
import {Category, categorys} from './Category.type';
import liveImage from '@assets/images/live-auction-card-image.png';
import preparingImage from '@assets/images/preparing.png';
import {Input, Label, NextButton, PrevButton, TabTitle, TitleHighlight} from './Information.style';
import {useEffect, useState} from "react";
import {CardMediaArea, CardMediaCover, CardCover} from "@component/card/Card.style";
import {Auction} from "@component/NewInformation/Auction.type";

interface FormValues {
  type: Auction | undefined;
}

const schema = yup.object({type: yup.string().label('경매 방식 ').required()}).required();

const Information = () => {
  const {type, setType} = useItemInfoStore((state) => state);
  const form = useForm<FormValues>({resolver: yupResolver(schema)});
  const {register, handleSubmit, formState, setValue} = form;

  const [hover, setHover] = useState<boolean>(false);
  const [auctionType, setAuctionType] = useState<Auction | undefined>();

  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    console.log(data);
    setType(data.type);
    navigate('../price');
  };

  useEffect(() => {
    setValue('type', auctionType);
  }, [auctionType])

  useEffect(() => {
    setAuctionType(type);
    setValue('type', type);
  }, [])


  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <TabTitle className="mb-[50px]">
          어떤 <TitleHighlight>방법</TitleHighlight>으로 비울까요?
        </TabTitle>

        <div className="flex justify-center gap-6 items-start ">
          <Card
              onMouseOver={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => setAuctionType('Realtime')}
              className={((hover || auctionType == 'Realtime') ? 'drop-shadow-signature' : '') + " w-[288px] cursor-pointer"}>
            <CardMediaArea className="bg-gradient-to-t from-[#A1A1E8] to-[#7B61FF]">
              <CardImage src={liveImage} className="p-5">
              </CardImage>
              <CardMediaCover>
              </CardMediaCover>
            </CardMediaArea>
            <CardContent className={((hover || auctionType == 'Realtime') ? 'bg-white' : 'bg-gray-100') + " text-left"}>
              <p className="text-list-title text-gray-700">실시간 거래</p>
              <p className="text-body-3-r text-gray-500">실시간 경매가 준비되어 있어요.</p>
              <p className="text-body-3-r text-gray-500">채팅을 통해 자유롭게 참여하세요.</p>
            </CardContent>
          </Card>
          <Card className="w-[288px]">
            <CardMediaArea className="bg-gradient-to-b from-[#505050] to-[#D9D9D9]">
              <CardImage src={preparingImage} className="p-5">
              </CardImage>
            </CardMediaArea>
            <CardContent className="bg-gray-100 text-left">
              <p className="text-list-title text-gray-700">일반 거래</p>
              <p className="text-body-3-r text-gray-500">문구 준비중.</p>
              <p className="text-body-3-r text-gray-500">문구 준비중.</p>
            </CardContent>
            <CardCover className="flex justify-center">
              <p className="text-list-title text-white mt-35">아직 준비 중이에요...</p>
            </CardCover>
          </Card>
        </div>
        <p>{formState.errors.type?.message}</p>
        <div className="flex justify-center mt-10">
          <PrevButton onClick={() => navigate('../../product/explain')}>이전으로</PrevButton>
          <NextButton type="submit">다음으로</NextButton>
        </div>
      </form>
  );
};
export default Information;

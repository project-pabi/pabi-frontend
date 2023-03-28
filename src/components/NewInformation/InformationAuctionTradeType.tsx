import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {Coordinate, useItemInfoStore} from '@stores/itemInfoStore';
import {yupResolver} from '@hookform/resolvers/yup';
import yup from '@/plugin/yup';
import {NextButton, PrevButton, TabTitle, TitleHighlight} from './Information.style';
import React, {useEffect, useRef, useState} from "react";
import tw from 'twin.macro';
import SearchIcon from '@mui/icons-material/Search';
import {Trade} from "@component/NewInformation/Trade.type";
import Map from "@component/Map";
import {Ref} from "@component/Tab/TabList";
import useGetHookFormError from "@/hooks/useGetHookFormError";
import {ErrorMessage} from '@hookform/error-message';

interface FormValues {
  tradeType: Trade;
  address: string,
  coordinate: Coordinate,
}

interface MapRef {
  search: (address: string) => void
}

const ViewRadio = tw.div`w-22 h-22 flex justify-center rounded-full border border-solid text-section-title-3-m`
const Dot = tw.div`w-1 h-1 rounded-full bg-gray-500 mx-5`

const schema = yup.object({
  tradeType: yup.string().label('물건의 종류 ').required(),
  address: yup.string().label('장소 이름 ').test(
      'needAddress',
      '직거래시 만날 장소 이름을 입력해 주세요',
      ((value, testContext) => {
        if (testContext.parent.tradeType !== 'Delivery') {
          return !!(value)
        }
        return true
      })
  ),
  coordinate: yup.object({
    latitude: yup.number().test(
        'needCoordinate',
        '직거래시 만날 장소를 선택해 주세요',
        ((value, testContext) => {
          if (testContext.parent.tradeType !== 'Delivery') {
            return !!(value)
          }
          return true
        })
    ),
    longitude: yup.number().test(
        'needCoordinate',
        '직거래시 만날 장소를 선택해 주세요',
        ((value, testContext) => {
          if (testContext.parent.tradeType !== 'Delivery') {
            return !!(value)
          }
          return true
        })
    )
  }).label('장소 ')
}).required();

const Information = () => {
  const {tradeType, place, setTradeType, setPlace, createProduct} = useItemInfoStore((state) => state);
  const [trade, setTrade] = useState<Trade | undefined>(tradeType);
  const [address, setAddress] = useState<string>("");
  const [coordinate, setCoordinate] = useState<Coordinate | undefined>(place.coordinate);


  const addressInput = useRef<HTMLInputElement>(null);
  const mapRef = useRef<MapRef>(null);

  const form = useForm<FormValues>({resolver: yupResolver(schema), criteriaMode: "firstError",});
  const {register, handleSubmit, formState:{errors}, getValues, setValue} = form;


  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    console.log(data);
    setTradeType(data.tradeType);
    setPlace(data.address, data.coordinate);
    createProduct().then(() => {
      navigate('/write/result');
    });
  };

  useEffect(() => {
    if (trade) {
      setValue('tradeType', trade);
    }
  }, [trade])

  useEffect(() => {
    setValue('address', address);
  }, [address])

  useEffect(() => {
    if (coordinate) {
      setValue('coordinate', coordinate);
    }
  }, [coordinate])

  useEffect(() => {
    if (tradeType) {
      setValue('tradeType', tradeType);
    }

    if (place) {
      setValue('address', place.address);
      setAddress(place.address)
      if (place.coordinate) {
        setValue('coordinate', place.coordinate)
        setCoordinate(place.coordinate)
      }
    }
  }, [])

  return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TabTitle className="mb-[50px]">
            물건을 어떻게 <TitleHighlight>전달</TitleHighlight>할까요?
          </TabTitle>

          <div className="flex justify-center ">
            <div className="w-[589px]">
              <div className="flex justify-center items-center mb-10">
                <ViewRadio
                    onClick={() => setTrade('Direct')}
                    className={trade === 'Direct' ? 'border-primary bg-primary text-white' : 'border-gray-300 text-gray-500'}>
                  <p className="m-auto">직거래</p>
                </ViewRadio>
                <Dot></Dot>
                <ViewRadio
                    onClick={() => setTrade('Delivery')}
                    className={trade === 'Delivery' ? 'border-primary bg-primary text-white' : 'border-gray-300 text-gray-500'}>
                  <p className="m-auto">택배거래</p>
                </ViewRadio>
                <Dot></Dot>
                <ViewRadio
                    onClick={() => setTrade('Both')}
                    className={trade === 'Both' ? 'border-primary bg-primary text-white' : 'border-gray-300 text-gray-500'}>
                  <p className="m-auto">둘다<br/>할래요</p>
                </ViewRadio>
              </div>
              <div className={"h-[300px] w-full mb-7 " + (trade === 'Delivery' ? 'hidden' : '')}>
                <Map
                    ref={mapRef}
                    setAddress={setAddress}
                    coordinate={coordinate}
                    setCoordinate={setCoordinate}></Map>
              </div>
              {
                  trade !== 'Delivery' &&
                  <div className="flex justify-start items-center w-full">
                    <div
                        className="px-6 mr-6 w-[384px] h-[69px] rounded-5 flex justify-center items-center border-gray-300 focus-within:border-primary border-2 border-solid">
                      <input
                          value={address}
                          ref={addressInput}
                          onChange={(event) => setAddress(event.target.value)}
                          onKeyUp={(event) => {
                            if (event.key == 'Enter') {
                              mapRef.current?.search((event.target as HTMLInputElement).value)
                            }
                            event.preventDefault();
                          }}
                          type="text"
                          className="text-section-title-3-m border-none outline-none grow"
                          placeholder="위치를 선택하세요"/>
                      <button
                          type="button"
                          className="text-gray-500 float-right"
                          onClick={() => {
                            const addr = addressInput.current?.value;
                            if (addr) {
                              mapRef.current?.search(addr);
                            }
                          }}>
                        <SearchIcon fontSize="small"></SearchIcon>
                      </button>
                    </div>
                    <span className="text-section-title-3-m">에서 만나서 비울래요!</span>
                  </div>

              }
            </div>
          </div>
          <ErrorMessage errors={errors} name="coordinate.latitude"/>

          <div className="flex justify-center mt-10">
            <PrevButton onClick={() => navigate('../price')}>이전으로</PrevButton>
            <NextButton type="submit">다음으로</NextButton>
          </div>
        </form>
      </>
  );
};
export default Information;

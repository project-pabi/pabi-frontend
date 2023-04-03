import { Close } from '@mui/icons-material';
import { useCategoryStore } from '../store/categoryStore';
import { Chip, ChipText } from './Auction/RealTime.style';

const CategoryChip = () => {
  const { checkedList, setCheckedList, priceRange, setPriceRange } = useCategoryStore((state) => state);
  const onRemove = (item: string) => {
    setCheckedList(checkedList.filter((el: string) => el !== item));
  };

  const onCheckReset = () => {
    setCheckedList([]);
  };

  return (
    <div className="mb-5">
      {checkedList.length === 15 ? (
        <Chip key="all">
          <ChipText>전체</ChipText>
          <div onClick={onCheckReset} className="cursor-pointer">
            <Close sx={{ width: '16px', color: '#424242' }} />
          </div>
        </Chip>
      ) : (
        checkedList.map((item: string) => {
          return (
            <Chip key={item}>
              <ChipText>{checkedList.length === 15 ? '전체' : item}</ChipText>
              <div onClick={() => onRemove(item)} className="cursor-pointer">
                <Close sx={{ width: '16px', color: '#424242' }} />
              </div>
            </Chip>
          );
        })
      )}
      <div className="inline-flex rounded-5 px-4 py-[10px] items-center w-auto mr-[10px] my-[10px] border border-solid">
        <div className="font-normal	text-sm	text-gray-800">
          {priceRange[0]} ~ {priceRange[1]} 원
        </div>
      </div>
    </div>
  );
};
export default CategoryChip;

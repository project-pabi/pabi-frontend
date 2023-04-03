import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from 'react';
import { ItemContainer, ItemInsideContainer } from './RealTime.style';
import RealTimeItem from './RealTimeItem';
import Category from '../Category';
import { useCategoryStore } from '../../store/categoryStore';
import CategoryChip from '../CategoryChip';
import CategorySort from '../CategorySort';

const RealTime = () => {
  const { checkedList, setCheckedList, priceRange, setPriceRange } = useCategoryStore((state) => state);

  useEffect(() => {
    if (checkedList.length === 15) {
    }
  });

  return (
    <div className=" grid grid-cols-12 gap-x-6">
      <Category></Category>
      <ItemContainer>
        <div className="flex mb-10 items-center justify-between">
          <div className="text-section-title-1">전체 123건</div>
          <div className="relative">
            <input
              type="text"
              placeholder="파비"
              className="border-2 border-solid border-gray-200 rounded-5 pl-6 pr-10 h-12 w-[200px] text-sm"
            />
            <div className="absolute top-3 right-5">
              <SearchIcon className="text-gray-500" />
            </div>
          </div>
        </div>
        <CategoryChip />
        <CategorySort />
        {/* 상품 리스트 */}
        <ItemInsideContainer>
          <RealTimeItem />
          <RealTimeItem />
          <RealTimeItem />
        </ItemInsideContainer>
      </ItemContainer>
    </div>
  );
};
export default RealTime;

import { useState } from 'react';
import { CheckBox, CheckBoxLabel, CheckBoxWrapper, RightLine } from './Auction/RealTime.style';

const CategorySort = () => {
  const [isToggleChecked, setIsToggleChecked] = useState(true);

  const toggleSwitch = () => {
    setIsToggleChecked(!isToggleChecked);
  };
  return (
    <div className="flex mb-8 justify-between">
      <div className="flex h-[22px] items-center text-gray-800 font-medium text-xs">
        <RightLine>등록순</RightLine>
        <RightLine>조회수순</RightLine>
        <RightLine>낮은 가격순</RightLine>
        <div className="pl-2">높은 가격순</div>
      </div>
      <div className="flex">
        <CheckBoxWrapper>
          <CheckBox id="checkbox" type="checkbox" checked={isToggleChecked} onChange={toggleSwitch} />
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>

        <span className="pl-2">지금 진행중인 경매</span>
      </div>
    </div>
  );
};
export default CategorySort;

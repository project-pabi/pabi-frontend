import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, InputCount, ReasonBox, ReasonCheck, ReasonLabel, ReasonTextarea } from './Withdraw.style';

const Withdraw = () => {
  const [isChecked, setIsChecked] = useState(false);
  let [inputCount, setInputCount] = useState(0);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const onTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    setInputCount(inputValue.length);
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
    let isChecked = false;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        isChecked = true;
      }
    });
    if (!isChecked) {
      event.preventDefault();
      alert('한개 이상 선택해주세요');
    }
  };
  const ReasonData = [
    { id: '0', title: '사용을 잘 안하게 돼요' },
    { id: '1', title: '구매하고 싶은 물품이 없어요' },
    { id: '2', title: '상품경매, 상품 취소, 혜택받기 등 사용 방식이 너무 복잡해요' },
    { id: '3', title: '혜택(쿠폰, 포인트)이 너무 적어요' },
    { id: '4', title: '개인정보 보호를 위해 삭제할 정보가 있어요' },
    { id: '5', title: '다른 계정이 있어요' },
    { id: '6', title: '사용을 잘 안하게 돼요' },
  ];
  return (
    <div className="w-[660px] mx-auto mt-[120px] mb-22">
      <div className="text-title-2">
        왜 떠나시는지
        <br />
        <span className="text-primary">이유</span>가 있을까요?
      </div>
      {ReasonData.map((data) => {
        return (
          <ReasonBox key={data.id} className="mt-8">
            <ReasonCheck type="checkbox" id={data.id} />
            <ReasonLabel htmlFor={data.id}>{data.title}</ReasonLabel>
          </ReasonBox>
        );
      })}
      <ReasonBox className="mt-8">
        <ReasonCheck type="checkbox" checked={isChecked} onChange={handleCheckboxChange} id="7" />
        <ReasonLabel htmlFor="7">기타</ReasonLabel>
      </ReasonBox>
      <div className="relative">
        {isChecked && (
          <>
            <ReasonTextarea
              onChange={onTextareaChange}
              placeholder="(선택사항) 서비스 이용 중 아쉬웠던 점에 대해 알려주세요."
              maxLength={80}
            />
            <InputCount>{inputCount}/80</InputCount>
          </>
        )}
      </div>
      <div className="flex justify-center mt-[60px]">
        <Link to="/" className="mr-8">
          <Button className="border-primary border-solid border text-primary">더 써볼래요</Button>
        </Link>
        <Link to="/agreewithdraw" onClick={handleButtonClick}>
          <Button className="bg-primary text-white">다음 단계로</Button>
        </Link>
      </div>
    </div>
  );
};
export default Withdraw;

import { Link } from 'react-router-dom';
import {
  Button,
  CheckButton,
  CloseButton,
  ModalContent,
  ModalOverlay,
  ModalTitle,
  ReasonBox,
  ReasonCheck,
  ReasonLabel,
  RemainBox,
  RemainValue,
} from './Withdraw.style';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';

const AgreeWithdraw = () => {
  const [isChecked, setIsChecked] = useState<boolean[]>([false, false]);
  const [isModalVisible, setIsModalVisible] = useState<boolean[]>([false, false]);
  const [isSelectAllModalVisible, setIsSelectAllModalVisible] = useState(false);

  const handleToggleAll = () => {
    const allChecked = isChecked.every((value) => value);
    const newChecked = isChecked.map(() => !allChecked);
    setIsChecked(newChecked);
    if (!allChecked) {
      setIsSelectAllModalVisible(true);
    }
  };
  const handleToggle = (index: number) => {
    const newChecked = [...isChecked];
    newChecked[index] = !newChecked[index];
    setIsChecked(newChecked);

    if (newChecked[index]) {
      const newModalVisible = [...isModalVisible];
      newModalVisible[index] = true;
      setIsModalVisible(newModalVisible);
    }
  };

  const handleCloseModal = (index: number) => {
    const newModalVisible = [...isModalVisible];
    newModalVisible[index] = false;
    setIsModalVisible(newModalVisible);

    const newChecked = [...isChecked];
    newChecked[index] = true;
    setIsChecked(newChecked);
  };
  const handleSelectAllModalClose = () => {
    setIsSelectAllModalVisible(false);
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const checkbox = document.getElementById('all') as HTMLInputElement;
    if (!checkbox.checked) {
      event.preventDefault();
      alert('전부 동의해주세요');
    }
  };

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <ArrowBackIosNewIcon
        sx={{
          backgroundColor: '#BDBDBD',
          color: '#fff',
          padding: '10px',
          width: '44px',
          height: '60px',
          left: '0',
          zIndex: '1',
          '&:hover': {
            backgroundColor: '#BDBDBD',
            color: '#fff',
          },
        }}
      />
    ),
    nextArrow: (
      <ArrowForwardIosIcon
        sx={{
          backgroundColor: '#BDBDBD',
          color: '#fff',
          padding: '10px',
          width: '44px',
          height: '60px',
          right: '0',
          '&:hover': {
            backgroundColor: '#BDBDBD',
            color: '#fff',
          },
        }}
      />
    ),
  };

  return (
    <div className="w-[660px] mx-auto mt-[120px] mb-22">
      <div className="text-title-2">
        지금 떠나시면..
        <br />
        <span className="text-primary">아래 혜택이 영영 사라져요</span>
      </div>
      <RemainBox className="mt-8">
        <RemainValue>
          사용할 수 있는 포인트가 <span className="text-primary">1,000P </span>남았어요.
        </RemainValue>
        <div className="text-system-error">즉시소멸</div>
      </RemainBox>
      <RemainBox className="mt-3">
        <RemainValue>
          사용할 수 있는 쿠폰이 <span className="text-primary">2개 </span> 남았어요.
        </RemainValue>
        <div className="text-system-error">즉시소멸</div>
      </RemainBox>
      <div className="text-gray-800 mt-8">회원탈퇴가 완료되면 남은 혜택은 소멸되어 사용하실 수 없습니다.</div>

      <ReasonBox className="mt-[60px] pb-5 border-b-2 border-solid border-gray-500">
        <ReasonCheck id="all" type="checkbox" checked={isChecked.every((value) => value)} onChange={handleToggleAll} />
        <ReasonLabel className="text-section-title-1" htmlFor="all">
          주의사항을 모두 숙지했고, 탈퇴에 동의합니다
        </ReasonLabel>
        {isSelectAllModalVisible && (
          <ModalOverlay onClick={handleSelectAllModalClose}>
            <ModalContent onClick={(event) => event.stopPropagation()}>
              <CloseButton className="z-10" onClick={handleSelectAllModalClose}>
                <CloseIcon />
              </CloseButton>
              <Slider {...settings} className="h-[348px]">
                <div className="px-[74px]">
                  <ModalTitle>회원탈퇴 유의사항</ModalTitle>
                  <ul className="list-disc pl-7">
                    <li>
                      회원탈퇴가 완료되면 회원님의 개인정보는 <span className="text-primary">즉시 삭제</span>됩니다.
                    </li>
                    <li>
                      회원탈퇴 처리 후에는 <span className="text-primary">회원님의 개인정보를 복원할 수 없습니다.</span>
                    </li>
                    <li>
                      탈퇴한 아이디는 <span className="text-primary">재사용할 수 없습니다.</span>
                    </li>
                    <li>
                      보유하신 <span className="text-primary">포인트는 복구할 수 없습니다.</span>
                    </li>
                  </ul>
                </div>
                <div className="px-[74px]">
                  <ModalTitle>회원탈퇴 약관</ModalTitle>
                  <ul className="list-disc pl-7">
                    <li>
                      회원탈퇴는 제주항공 멤버십 탈퇴를 의미하며 기존에 보유한 탑승 포인트, 제휴사 적립 포인트와 회원 개인정보는
                      탈퇴와 동시에 소멸됩니다.(단, 전자상거래 등에서 소비자보호에 관한 법률 등 관련 법령의 규정에 의하여
                      탈퇴회원의 포인트 기록 조회를 위한 최소한의 기록은 5년 동안 보관 후 파기 합니다.)
                    </li>
                    <li>
                      회원탈퇴 이후 3년간 포인트/할인쿠폰 부정 적립 방지를 위해 회원님의 아이디를 포함한 회원정보가 보존
                      됩니다.회원탈퇴 이후, 3일 후 신규 가입하실 수 있습니다.
                    </li>
                  </ul>
                </div>
              </Slider>

              <CheckButton onClick={handleSelectAllModalClose}>확인했어요</CheckButton>
            </ModalContent>
          </ModalOverlay>
        )}
      </ReasonBox>
      {isChecked.map((value, index) => (
        <ReasonBox className="mt-5" key={index}>
          <ReasonCheck type="checkbox" id={`${index}`} checked={value} onChange={() => handleToggle(index)} readOnly />
          <ReasonLabel htmlFor={`${index}`}>{index === 0 ? '회원탈퇴 유의사항' : '회원탈퇴 약관'}</ReasonLabel>
          {isModalVisible[index] &&
            (index === 0 ? (
              <ModalOverlay onClick={() => handleCloseModal(index)}>
                <ModalContent className="px-[74px]">
                  <CloseButton onClick={() => handleCloseModal(index)}>
                    <CloseIcon />
                  </CloseButton>
                  <ModalTitle>회원탈퇴 유의사항</ModalTitle>
                  <ul className="list-disc pl-7">
                    <li>
                      회원탈퇴가 완료되면 회원님의 개인정보는 <span className="text-primary">즉시 삭제</span>됩니다.
                    </li>
                    <li>
                      회원탈퇴 처리 후에는 <span className="text-primary">회원님의 개인정보를 복원할 수 없습니다.</span>
                    </li>
                    <li>
                      탈퇴한 아이디는 <span className="text-primary">재사용할 수 없습니다.</span>
                    </li>
                    <li>
                      보유하신 <span className="text-primary">포인트는 복구할 수 없습니다.</span>
                    </li>
                  </ul>
                  <CheckButton onClick={() => handleCloseModal(index)}>확인했어요</CheckButton>
                </ModalContent>
              </ModalOverlay>
            ) : (
              <ModalOverlay onClick={() => handleCloseModal(index)}>
                <ModalContent className="px-[74px]" onClick={(event) => event.stopPropagation()}>
                  <CloseButton onClick={() => handleCloseModal(index)}>
                    <CloseIcon />
                  </CloseButton>
                  <ModalTitle>회원탈퇴 약관</ModalTitle>
                  <ul className="list-disc pl-7">
                    <li>
                      회원탈퇴는 제주항공 멤버십 탈퇴를 의미하며 기존에 보유한 탑승 포인트, 제휴사 적립 포인트와 회원 개인정보는
                      탈퇴와 동시에 소멸됩니다.(단, 전자상거래 등에서 소비자보호에 관한 법률 등 관련 법령의 규정에 의하여
                      탈퇴회원의 포인트 기록 조회를 위한 최소한의 기록은 5년 동안 보관 후 파기 합니다.)
                    </li>
                    <li>
                      회원탈퇴 이후 3년간 포인트/할인쿠폰 부정 적립 방지를 위해 회원님의 아이디를 포함한 회원정보가 보존
                      됩니다.회원탈퇴 이후, 3일 후 신규 가입하실 수 있습니다.
                    </li>
                  </ul>
                  <CheckButton onClick={() => handleCloseModal(index)}>확인했어요</CheckButton>
                </ModalContent>
              </ModalOverlay>
            ))}
        </ReasonBox>
      ))}

      <div className="flex justify-center mt-[60px]">
        <Link to="/" className="mr-8">
          <Button className="border-primary border-solid border text-primary">더 써볼래요</Button>
        </Link>
        <Link to="/withdrawend" onClick={handleButtonClick}>
          <Button className="bg-primary text-white">다음 단계로</Button>
        </Link>
      </div>
    </div>
  );
};
export default AgreeWithdraw;

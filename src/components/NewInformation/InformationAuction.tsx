import { Fragment } from 'react';
import { SubTitle, Title } from './Information.style';
import { TabList, Tab } from '@component/Tab';
import { Outlet } from 'react-router-dom';
import tw from 'twin.macro';
import { useMatch, useNavigate } from 'react-router-dom';
import { useItemInfoStore } from '@stores/itemInfoStore';

const Panel = tw.div`
  shadow-signature
  rounded-[1.25rem]
  p-22
  text-center
`;

const Information = () => {
  const tab1Match = useMatch('/write/auction/type') != null;
  const tab2Match = useMatch('/write/auction/price') != null;
  const tab3Match = useMatch('/write/auction/trade-type') != null;

  const getTabIndex = () => {
    if (tab1Match) return 0;
    if (tab2Match) return 1;
    if (tab3Match) return 2;
    return 0;
  };

  const navigate = useNavigate();
  const { isExplainComplete, isTypeComplete, isPriceComplete, isTradeTypeComplete } = useItemInfoStore((state) => state);

  const moveTypeTab = () => {
    if (!isExplainComplete()) {
      alert('제품 설명을 먼저 입력해 주세요');
      return;
    }
    navigate('./type');
  };

  const movePriceTab = () => {
    if (!isTypeComplete()) {
      alert('경매 방식을 먼저 입력해 주세요');
      return;
    }
    navigate('./price');
  };

  const moveTradeTypeTab = () => {
    if (!isPriceComplete()) {
      alert('시작 가격을 먼저 입력해 주세요');
      return;
    }
    navigate('./trade-type');
  };

  return (
    <Fragment>
      <Title>상품정보 입력</Title>
      <SubTitle>비우고 싶은 제품이 무엇인지 설명해주세요!</SubTitle>

      <TabList className="mb-10" tabIndex={getTabIndex()}>
        <Tab isSelect={tab1Match} isComplete={isTypeComplete()} onClick={moveTypeTab}>
          경매 방식 선택
        </Tab>
        <Tab isSelect={tab2Match} isComplete={isPriceComplete()} onClick={movePriceTab}>
          시작 가격 입력
        </Tab>
        <Tab isSelect={tab3Match} isComplete={isTradeTypeComplete()} onClick={moveTradeTypeTab}>
          거래 방식 선택
        </Tab>
      </TabList>
      <Panel>
        <Outlet />
      </Panel>
    </Fragment>
  );
};
export default Information;

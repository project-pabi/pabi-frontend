import React, {Fragment} from 'react';
import {SubTitle, TabTitle, Title, TitleHighlight} from '../NewInformation/Information.style';
import tw from 'twin.macro';

const Panel = tw.div`
  shadow-signature
  rounded-[1.25rem]
  p-22
  text-center
`;

const Information = () => {

  return (
      <Fragment>
        <Title>상품 등록 완료</Title>
        <SubTitle>곧 경매가 시작됩니다.</SubTitle>
        <Panel>
          <TabTitle className="mb-[50px]">
            곧 <TitleHighlight>경매</TitleHighlight>가 시작됩니다.
          </TabTitle>
        </Panel>
      </Fragment>
  );
};
export default Information;

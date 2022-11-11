import {
  Box,
  Container,
  Count,
  CountBox,
  CountText,
  Img,
  List,
} from "./Profile.style";

export default function Profile() {
  return (
    <Container>
      <Box>
        <List width="310px" className="p-7">
          <Img
            src="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMjdfMjk3/MDAxNTcyMTU4OTA1NjAz.zHEicJ1aBtmkKS4bRYy02y_fBcbvLrWbFTcbUeUBnvIg.knnGDJUVIz4TcrVN7ARyAtfel9_JlbYRn1t2VUFjNtIg.JPEG.msjin93/IMG_8470.JPG?type=w800"
            alt="pinggu"
          />
          <div className="text-2xl mt-6 font-bold text-[#000060]">핑구12</div>
        </List>
        <List width="420px" className="pt-[58px] px-[42px]">
          <CountBox>
            <Count>10</Count>
            <CountText>로그인 횟수</CountText>
          </CountBox>
          <CountBox>
            <Count>3</Count>
            <CountText>팔기</CountText>
          </CountBox>
          <CountBox>
            <Count>6</Count>
            <CountText>비우기</CountText>
          </CountBox>
        </List>
        <List width="530px" className="px-7 py-6">
          <div className="text-base text-[#424242]">
            김파비. 나이 1세. 돈이 된다면 무엇이든 팔아제끼는 펭귄. 내용을
            입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을
            입력해주세요.내용을 입력해주세요.내용을 입력해주세요.내용을
            입력해주세요.내용을 입력해주세요.내용을 입력해주세요.
          </div>
        </List>
      </Box>
      <Box>
        <List width="310px"></List>
        <List width="420px"></List>
        <List width="530px"></List>
      </Box>
    </Container>
  );
}

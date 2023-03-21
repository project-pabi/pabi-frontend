import { AccessTimeOutlined, Favorite, Gavel } from "@mui/icons-material";

import {
  FreeDelivery,
  Heart,
  Item,
  ItemImg,
  ItemImgBox,
  ItemText,
  ItemTitle,
  Keyword,
  KeywordBox,
  Live,
  Locate,
  Price,
  Status,
} from "./RealTimeItem.style";
import TestImg from "../../bgimg.svg";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const RealTimeItem = () => {
  return (
    <Item>
      <ItemImgBox>
        <ItemImg src={TestImg}></ItemImg>
        <Live>LIVE</Live>
        <Heart>
          <FavoriteBorderOutlinedIcon />
        </Heart>
        <FreeDelivery>무료배송</FreeDelivery>
        <Status>
          <div>
            <AccessTimeOutlined sx={{ width: "16px" }} className="mr-1" />
            07:47
          </div>
          <div>
            <Gavel sx={{ width: "16px" }} className="mr-1" />4
          </div>
        </Status>
      </ItemImgBox>
      <ItemText>
        <Price>
          12,345<span className="text-black text-base">원 ~</span>
        </Price>
        <ItemTitle>인소맨 포치타 BIG 봉제 인형 내꺼</ItemTitle>
        <KeywordBox>
          <Keyword>체인소맨</Keyword>
          <Keyword>체인소맨</Keyword>
        </KeywordBox>
        <Locate>
          <FmdGoodIcon fontSize="small" />
          성남시 중원구 은행동
        </Locate>
      </ItemText>
    </Item>
  );
};
export default RealTimeItem;

<Item>
  <ItemImgBox>
    <ItemImg src={TestImg}></ItemImg>
    <Live>LIVE</Live>
    <Heart>
      <Favorite />
    </Heart>
    <Status>
      <div>
        <AccessTimeOutlined sx={{ width: "16px" }} className="mr-1" />
        07:47
      </div>
      <div>
        <Gavel sx={{ width: "16px" }} className="mr-1" />4
      </div>
    </Status>
  </ItemImgBox>
  <ItemText>
    <Price>
      12,345<span className="text-black text-base">원 ~</span>
    </Price>
    <ItemTitle>인소맨 포치타 BIG 봉제 인형 내꺼</ItemTitle>
    <KeywordBox>
      <Keyword>체인소맨</Keyword>
      <Keyword>체인소맨</Keyword>
    </KeywordBox>
    <Locate>
      <FmdGoodIcon fontSize="small" />
      성남시 중원구 은행동
    </Locate>
  </ItemText>
</Item>;

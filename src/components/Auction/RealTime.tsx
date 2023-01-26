import {
  AccessTimeOutlined,
  ExpandLess,
  ExpandMore,
  Favorite,
  Gavel,
  Refresh,
} from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import {
  CategoryCheckBox,
  CategoryContainer,
  CategoryDiv,
  CategoryLabel,
  Container,
  FreeDelivery,
  Heart,
  Item,
  ItemContainer,
  ItemImg,
  ItemImgBox,
  ItemInsideContainer,
  ItemText,
  ItemTitle,
  Keyword,
  KeywordBox,
  Live,
  Locate,
  PrettoSlider,
  Price,
  Status,
} from "./RealTime.style";
import TestImg from "../../bgimg.svg";

function valuetext(value: number) {
  return `${value}`;
}

const RealTime = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const [value, setValue] = useState<number[]>([10000, 30000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Container>
      <CategoryContainer>
        <div className="px-4 font-medium text-xl mb-10 text-[#424242] flex justify-between items-center">
          필터 <Refresh className="cursor-pointer" />
        </div>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="카테고리" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit className="pl-4">
          <List component="div" disablePadding>
            <CategoryDiv>
              <CategoryCheckBox id="all"></CategoryCheckBox>
              <CategoryLabel htmlFor="all">전체</CategoryLabel>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryCheckBox id="1"></CategoryCheckBox>
              <CategoryLabel htmlFor="1">여성의류 · 잡화</CategoryLabel>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryCheckBox id="2"></CategoryCheckBox>
              <CategoryLabel htmlFor="2">남성의류 · 잡화</CategoryLabel>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryCheckBox id="3"></CategoryCheckBox>
              <CategoryLabel htmlFor="3">뷰티 · 미용</CategoryLabel>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryCheckBox id="4"></CategoryCheckBox>
              <CategoryLabel htmlFor="4">디지털기기</CategoryLabel>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryCheckBox id="5"></CategoryCheckBox>
              <CategoryLabel htmlFor="5">생활가전</CategoryLabel>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryCheckBox id="6"></CategoryCheckBox>
              <CategoryLabel htmlFor="6">가구 · 인테리어</CategoryLabel>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryCheckBox id="7"></CategoryCheckBox>
              <CategoryLabel htmlFor="7">생활 · 주방</CategoryLabel>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryCheckBox id="8"></CategoryCheckBox>
              <CategoryLabel htmlFor="8">유아동</CategoryLabel>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryCheckBox id="9"></CategoryCheckBox>
              <CategoryLabel htmlFor="9">취미 · 음반 · 도서</CategoryLabel>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryCheckBox id="10"></CategoryCheckBox>
              <CategoryLabel htmlFor="10">티켓 · 교환권</CategoryLabel>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryCheckBox id="11"></CategoryCheckBox>
              <CategoryLabel htmlFor="11">스포츠 · 레저</CategoryLabel>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryCheckBox id="12"></CategoryCheckBox>
              <CategoryLabel htmlFor="12">가공식품</CategoryLabel>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryCheckBox id="13"></CategoryCheckBox>
              <CategoryLabel htmlFor="13">반려동물용품</CategoryLabel>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryCheckBox id="14"></CategoryCheckBox>
              <CategoryLabel htmlFor="14">식물</CategoryLabel>
            </CategoryDiv>
            <CategoryDiv>
              <CategoryCheckBox id="15"></CategoryCheckBox>
              <CategoryLabel htmlFor="15">기타</CategoryLabel>
            </CategoryDiv>
          </List>
          <div className="mt-9">
            <div className="text-base mb-5">가격</div>
            <PrettoSlider
              className="mb-5"
              min={0}
              step={1}
              max={100000}
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
            <div className="flex justify-between">
              <div className="font-normal text-xs text-[#9E9E9E]">
                <span className="text-[#424242] mr-1">{value[0]}</span>원
              </div>
              <div className="font-normal text-xs text-[#9E9E9E]">
                <span className="text-[#424242] mr-1">{value[1]}</span>원
              </div>
            </div>
          </div>
        </Collapse>
      </CategoryContainer>
      <ItemContainer>
        <div className="flex justify-between mb-8">
          <div className="text-xs text-normal text-[#424242]">전체 123</div>
          <div className="flex h-[22px] items-center text-[#424242] font-medium text-xs">
            <div className="pr-2 border-solid border-[#E0E0E0] border-r">
              등록순
            </div>
            <div className="px-2 border-solid border-[#E0E0E0] border-r">
              조회수순
            </div>
            <div className="px-2 border-solid border-[#E0E0E0] border-r">
              낮은 가격순
            </div>
            <div className="pl-2">높은 가격순</div>
          </div>
        </div>
        {/* 상품 리스트 */}
        <ItemInsideContainer>
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
                12,345<span className="text-[#191919] text-base">원 ~</span>
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
                12,345<span className="text-[#191919] text-base">원 ~</span>
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
                12,345<span className="text-[#191919] text-base">원 ~</span>
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
                12,345<span className="text-[#191919] text-base">원 ~</span>
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
        </ItemInsideContainer>
      </ItemContainer>
    </Container>
  );
};
export default RealTime;

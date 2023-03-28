import {
  Container,
  EventImg,
  List,
  ListContainer,
  ListDate,
  ListSubTitle,
  ListTitle,
  SubTitle,
  Title,
} from "./Event.style";
import { Link } from "react-router-dom";
import EventData from "./EventData";

const Event = () => {
  return (
    <Container>
      <Title>이벤트 목록</Title>
      <SubTitle>파비의 다양한 이벤트를 한눈에 확인하세요!</SubTitle>
      <ListContainer>
        {EventData.map((item, index) => {
          return (
            <Link to={`detail/${index}`} key={item.id}>
              <List>
                <EventImg src={item.img} />
                <div className="col-span-8">
                  <ListTitle>{item.title}</ListTitle>
                  <ListSubTitle>{item.subTitle}</ListSubTitle>
                  <ListDate>{item.date}</ListDate>
                </div>
              </List>
            </Link>
          );
        })}
      </ListContainer>
    </Container>
  );
};
export default Event;

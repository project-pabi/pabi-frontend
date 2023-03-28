import { Link, useParams } from "react-router-dom";
import { Container, DetailButton, SubTitle, Title } from "./Event.style";
import EventData from "./EventData";

const EventDetail = () => {
  type EventParams = {
    id: string;
  };
  const { id } = useParams<EventParams>();
  const event = EventData.find((event) => event.id === Number(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <Container>
      <Title>{event.title}</Title>
      <SubTitle>{event.subTitle}</SubTitle>
      <div className="bg-white py-[60px] px-[58.5px]">
        <img src={event.img} alt="img" className="w-full" />
        <div className="mt-8">{event.content}</div>
        <div className="mt-8 items-center">
          <DetailButton>당첨자 안내</DetailButton>
          <Link to="/event">
            <DetailButton className="mt-6">목록보기</DetailButton>
          </Link>
        </div>
      </div>
    </Container>
  );
};
export default EventDetail;

import { useParams } from 'react-router-dom';
import FAQCategoryData from './FAQCategoryData';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';

const FAQCategory = () => {
  type EventParams = {
    id: string;
  };

  const [isOpen, setIsOpen] = useState<boolean[]>([]);

  const handleClick = (index: number) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  const { id } = useParams<EventParams>();
  const event = FAQCategoryData.find((event) => event.id === Number(id));

  if (event === undefined) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <div className="text-section-title-1 mb-5">{event.title}</div>
      {event.value.map((data, index) => {
        return (
          <>
            <ListItemButton style={{ padding: 0 }} onClick={() => handleClick(index)}>
              <ListItemText
                primary={
                  <div className="flex items-center py-4 border-solid border-b-2 border-gray-300 cursor-pointer">
                    <div className="text-primary font-bold text-base mr-[10px]">Q.</div>
                    <div className="text-sm font-medium">{data}</div>
                  </div>
                }
              />
              {isOpen[index] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={isOpen[index]} timeout="auto" unmountOnExit className="pl-4">
              <List component="div" disablePadding></List>
              <div>{data}</div>
            </Collapse>
          </>
        );
      })}
    </div>
  );
};

export default FAQCategory;

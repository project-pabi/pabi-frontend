import React, { FC, ReactElement } from "react";
import type { TabProps } from "@component/Tab";

interface Props {
  children: ReactElement[];
}

const TabList: FC<Props> = ({ children }) => {
  const childrenAddClassname = React.Children.map(
    children,
    (item: ReactElement) => {
      const className = `${
        item.props.className ? item.props.className : ""
      } flex-grow justify-center items-center`;
      const props = { ...item.props, className: className };
      console.log(className);
      return React.cloneElement<TabProps>(item, props, item.props.children);
    }
  );

  return (
    <div className="w-full h-12 rounded-[1.25rem] flex">
      {childrenAddClassname}
    </div>
  );
};

export default TabList;

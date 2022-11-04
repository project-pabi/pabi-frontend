import React, { FC, ReactNode, ReactElement } from "react";
import tw from "twin.macro";
import styled from "styled-components";

interface TabProps {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => any;
  className?: string;
  attributes?: any;
}

interface TabButtonProps {
  className?: any;
}

const TabButtton = styled.button(({ className }: TabButtonProps) => [
  className && tw`${className}`,
  tw`
    h-full
  `,
]);

const Tab: FC<TabProps> = ({ children, onClick, attributes, className }) => {
  console.log(className);
  return (
    <TabButtton
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        if (onClick) {
          onClick(event);
        }
      }}
      {...attributes}
      className={className}
    >
      {attributes?.className}
      {children}
    </TabButtton>
  );
};

export default Tab;
export type { TabProps };

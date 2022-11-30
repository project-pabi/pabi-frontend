import React, { FC, ReactNode, forwardRef } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

interface TabProps {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => any;
  className?: string;
  attributes?: any;
  isSelect?: boolean;
  isComplite?: boolean;
  selectClass?: string;
  unselectClass?: string;
}

interface TabButtonProps {
  className?: any;
  isSelect?: boolean;
}

const TabButtton = styled.button(({ className, isSelect }: TabButtonProps) => [
  className && tw`${className}`,
  tw`
      h-full
      bg-transparent
      z-10
    `,
]);

export type Ref = HTMLButtonElement;
const Tab: FC<TabProps> = ({
  children,
  onClick,
  attributes,
  className = '',
  isSelect = false,
  isComplite = false,
  selectClass = '',
  unselectClass = '',
}) => {
  return (
    <TabButtton
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        if (onClick) {
          onClick(event);
        }
      }}
      {...attributes}
      className={className + (isSelect ? selectClass : unselectClass) + (isComplite ? ' text-red-500' : '')}>
      {children}
    </TabButtton>
  );
};
export default Tab;
export type { TabProps };

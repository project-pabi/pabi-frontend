import React, { FC, ReactNode, forwardRef } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';

interface TabProps {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => any;
  className?: string;
  attributes?: any;
  isSelect?: boolean;
  isComplete?: boolean;
  selectClass?: string;
  unselectClass?: string;
  tabWidth?: number;
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
  isComplete = false,
  selectClass = '',
  unselectClass = '',
  tabWidth = 0,
}) => {
  return (
    <TabButtton
      onClick={(event: React.MouseEvent<HTMLElement>) => {
        if (onClick) {
          onClick(event);
        }
      }}
      {...attributes}
      style={{ width: `${tabWidth}px` }}
      className={'pl-1 text-base ' + className + (isSelect ? selectClass : unselectClass)}>
      {children}
      {isComplete && <CheckIcon className="ml-1 pr-[-0.25rem]" />}
    </TabButtton>
  );
};
export default Tab;
export type { TabProps };

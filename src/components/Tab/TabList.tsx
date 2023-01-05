import React, { FC, ReactElement, useState, useEffect, forwardRef, useRef } from 'react';
import type { TabProps } from '@component/Tab';
import tw from 'twin.macro';
import styled from 'styled-components';
import { cloneDeep } from 'lodash';

interface Props {
  children: ReactElement[];
  className?: string;
  tabIndex?: number;
}

interface TabsProps {
  index?: number;
  tabWidth: number;
}

const Tabs = styled.div<TabsProps>`
  ${(props) => {
    if (props.index != undefined) {
      return `
      &:after {
        width: ${props.tabWidth}px;
        transform: translateX(${props.index * props.tabWidth}px);
      }`;
    }
  }}
  ${tw`
    shadow-signature
    w-full 
    h-12
    rounded-[1.25rem]
    flex
    font-medium
    
    bg-white
    after:content-['']
    after:rounded-[1.25rem]
    after:absolute  
    after:align-middle
    after:h-12
    after:bg-primary-500
  `}
`;

export type Ref = HTMLDivElement;

const TabList: FC<Props> = ({ children, className, tabIndex }) => {
  let [tabWidth, setTabWidth] = useState<number>(0);
  let [addClass, setAddClass] = useState<string>('');
  const tabRef = useRef<Ref>(null);
  const childrenCount = React.Children.count(children);

  const getTabButtonWidth = () => {
    return (tabRef.current?.offsetWidth ?? 0) / childrenCount;
  };

  const resizeHandler = () => {
    const width = getTabButtonWidth();
    setTabWidth(width);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    const width = getTabButtonWidth();
    setTabWidth(width);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    if (tabIndex != undefined) {
      setTimeout(() => {
        setAddClass('transition after:transition');
      }, 50);
    } else {
      setAddClass('');
    }
  }, [tabIndex]);

  const childrenAddClassname = React.Children.map(children, (item: ReactElement) => {
    const itemProps: TabProps = cloneDeep(item.props);
    itemProps.selectClass = 'text-white';
    itemProps.unselectClass = 'text-gray-700';
    itemProps.tabWidth = tabWidth;
    const className = `flex-initial justify-center items-center transition duration-500 ${
      itemProps.className ? itemProps.className : ''
    }`;
    let props: any = { ...itemProps, className: className };

    return React.cloneElement<TabProps>(item, props, itemProps.children);
  });

  return (
    <Tabs ref={tabRef} className={className + ' ' + addClass} index={tabIndex} tabWidth={tabWidth}>
      {childrenAddClassname}
    </Tabs>
  );
};

export default TabList;

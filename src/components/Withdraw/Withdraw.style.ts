import styled from 'styled-components';
import tw from 'twin.macro';

export const ReasonBox = tw.div`
  text-section-title-2 flex items-center
`;
export const ReasonLabel = tw.label`
  cursor-pointer
`;
export const ReasonCheck = tw.input`
  mr-[10px] w-5 h-5 cursor-pointer
`;
export const ReasonTextarea = tw.textarea`
  rounded-5 w-full h-40 border-solid border mt-3 p-6
`;
export const InputCount = tw.div`
  absolute bottom-6 right-6 text-gray-500
`;
export const Button = tw.div`
  px-5 py-3 text-base rounded-5 
`;
export const RemainBox = tw.div`
  rounded-3 p-6 flex items-center justify-between
`;
export const RemainValue = tw.div`
  text-section-title-1 text-gray-800
`;
export const ModalOverlay = tw.div`
  fixed inset-0 w-full h-full flex justify-center items-center 
  bg-[rgba(0, 0, 0, 0.5)]
`;
export const ModalTitle = tw.div`
  text-section-title-1 text-black mb-8
`;
export const ModalContent = tw.div`
  bg-white rounded-8 shadow-2xl relative w-[660px] h-[396px] py-6 font-normal text-gray-700 text-base
`;
export const CloseButton = tw.div`
  absolute top-[30px] right-[30px] cursor-pointer
`;
export const CheckButton = tw.div`
  bg-primary text-white rounded-5 text-center cursor-pointer py-3 text-base font-medium absolute left-1/4 bottom-6 w-[280px] 
`;
export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 8px;
`;

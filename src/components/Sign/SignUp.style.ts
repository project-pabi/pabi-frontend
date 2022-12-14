import tw from "twin.macro";

export const SignInContainer = tw.div`
bg-[#E4E4F7] w-[588px] mx-auto mt-[100px] mb-10 rounded-[20px]
shadow-[0_28px_40px_4px_rgba(0,0,0,0.18)]
py-[70px] px-[102px] 
`;
export const Title = tw.div`
font-bold text-[40px] leading-[59px] text-[#424242] mt-5 mb-[50px]
`;
export const PabiLogo = tw.img`
max-w-[100px] h-10 mx-auto my-0
`;
export const Input = tw.input`
w-full h-12 bg-[#ffffff] rounded-[20px] py-[13.5px] px-6 mt-2 text-[14px]
`;
export const Button = tw.button`
w-full h-12 rounded-[20px] py-[13.5px] text-center text-[#ffffff] mt-2
`;
export const Label = tw.label`
text-sm text-[#757575]
`;
export const ErrorMessage = tw.div`
text-[#ED4D4D] ml-6 mt-1 text-xs
`;

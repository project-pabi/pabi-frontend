import tw from "twin.macro";

export const Container = tw.div`
mx-auto w-[1344px] grid grid-cols-12 gap-6
`;
export const SignInContainer = tw.div`
bg-[#CCCCFF] mt-[100px] mb-[122px] rounded-[20px] z-10
shadow-[0_28px_40px_4px_rgba(0,0,0,0.18)]
pt-[75px] pb-[80px] px-[90px] col-span-5 col-start-2
`;

export const Title = tw.div`
font-bold text-[40px] leading-[59px] text-[#424242] mt-5 mb-[50px]
`;
export const PabiLogoMain = tw.img`
w-[100px] h-10
`;
export const Input = tw.input`
h-[70px] bg-[#ffffff] rounded-[20px] p-6 border-2
w-100%
focus:(outline-none border-[#0000D8])
`;
export const ErrorMessage = tw.div`
text-[#ED4D4D] ml-6 mt-1 text-xs
`;
export const Button = tw.button`
w-100% h-[70px] bg-[#A1A1E8] rounded-[20px] p-6 text-center text-[#ffffff] mt-[70px]
`;
export const SignUp = tw.button`
w-100% h-[70px] bg-[#0000D8] rounded-[20px] p-6 text-center text-[#ffffff]
`;
export const WarnIcon = tw.img`
absolute ml-[330px] mt-[25px]
`;

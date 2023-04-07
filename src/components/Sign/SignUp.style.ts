import tw from "twin.macro";

export const PabiLogoMain = tw.img`
max-w-[100px] mx-auto pt-[90px]
`;
export const Container = tw.div`
mx-auto w-[1344px] grid grid-cols-12 gap-6
`;
export const SignInContainer = tw.div`
bg-primary-100 mt-[50px] mb-[120px] rounded-5
shadow-[0_28px_40px_4px_rgba(0,0,0,0.18)]
pt-[68px] pb-20 px-[114px] col-span-6 col-start-4
`;
export const Title = tw.div`
font-bold text-Headline3 text-gray-800 mb-4
`;

export const Input = tw.input`
w-full h-12 bg-white rounded-5 py-[13.5px] px-6 mt-2 text-sm border-2
focus:(outline-none border-primary)
`;

export const Button = tw.button`
w-full h-12 rounded-5 py-[13.5px] text-center text-white mt-2 relative
shadow-[0_4px_20px_4px_rgba(198, 198, 224, 0.8)]
`;
export const Label = tw.label`
text-sm text-gray-600
`;
export const ErrorMessage = tw.div`
text-system-error ml-6 mt-1 text-xs
`;
export const WarnIcon = tw.img`
`;
export const SearchIcon = tw.img`
absolute left-40 mt-[2px]
`;
export const ReSearchIcon = tw.img`
absolute mt-[3px]
`;

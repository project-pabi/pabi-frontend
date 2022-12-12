import tw from "twin.macro";

export const NavContainer = tw.div`
  max-w-[1440px] m-auto 
`;
export const SearchBox = tw.input`
  border border-solid border-2 border-[#EEEEEE] w-[500px] h-12 rounded-[20px]
  pl-6 pr-10 py-3 relative
`;
export const PabiLogo = tw.img`
  w-40 items-center 
`;
export const Menu = tw.div`
mr-[34px] cursor-pointer text-base text-[#424242]
  first:mr-[38px] last:mr-0 last:text-[#ffffff]
  last:bg-primary last:rounded-[20px] last:py-[10px] last:px-4
`;
export const SubMenu = tw.div`
  mr-9 cursor-pointer font-bold text-base
  last:mr-0 last:text-[#9e9e9e] last:cursor-not-allowed
`;

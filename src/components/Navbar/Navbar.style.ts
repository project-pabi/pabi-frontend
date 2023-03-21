import tw from "twin.macro";

export const NavContainer = tw.div`
  
`;
export const SearchBox = tw.input`
  border border-solid border-2 border-gray-200 w-[500px] h-12 rounded-5
  pl-6 pr-10 py-3 relative
`;
export const PabiLogo = tw.img`
  w-40 items-center 
`;
export const Menu = tw.div`
  mr-[34px] cursor-pointer text-base text-gray-800
  first-of-type:mr-[38px] last:mr-0 last:text-white
  last:bg-primary last:rounded-5 last:py-[10px] last:px-4
`;
export const SubMenu = tw.div`
  mr-9 font-bold text-base
`;
export const Sign = tw.div`
cursor-pointer text-base text-gray-800 font-medium flex items-center
`;

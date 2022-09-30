import tw from "tailwind-styled-components";
import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  height: 100%;
`;

export const PabiLogo = tw.img`
  w-40 items-center
`;
export const Menu = tw.li`
  mr-10 last:mr-0 text-xl
`;

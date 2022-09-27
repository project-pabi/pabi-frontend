import tw from "tailwind-styled-components";
import styled from "styled-components";

// export const MenuBar = tw.div`
//   flex
//   flex-wrap
//   justify-between
//   items-center
// `;
export const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding-top: 30px;
`;
export const PabiLogo = tw.img`
  w-40

`;
export const Menu = tw.li`
  mr-10 last:mr-0
`;

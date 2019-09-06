import styled from "styled-components";

export const SideBarContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #00c482;
  z-index: 0;
`;

export const Sidebar = styled.div`
  top: 0;
  left: 0;
  width: 100px;
  position: absolute;
  bottom: 0px;
  z-index: 1;
`;

export const PageContainer = styled.div`
  top: 0;
  left: 0px;
  transition: all 400ms ease-in-out;
  height: 100%;
  position: absolute;
  z-index: 1000;
  right: 0;
  background-color: #fff;
  box-shadow: 0 15px 5px rgba(0, 0, 0, 0.4);
  border-radius: 25px;
  padding: 20px 10px;
  padding-bottom: 0px;
  height: calc(100% - 20px);

  ${({ open }) =>
    open &&
    `
    left: 100px;
  `};
`;

export const ToggleMenuContainer = styled.div`
  width: 35px;
  cursor: pointer;
  > span {
    display: block;
    width: 30px;
    height: 3px;
    background-color: #766d8a;
    margin: 4px 0px;
    &:first-child {
      width: 24px;
    }
  }
`;

import styled from "styled-components";
import Container from "../Container/Container";

export const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 112px;
  background-color: ${(props) =>
    props.$scrolled ? "var(--main-bg-color)" : "#ffffff"};
  transition: background-color 0.3s ease;
`;

export const HeaderContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Stopgap = styled.div`
  height: 112px;
`;

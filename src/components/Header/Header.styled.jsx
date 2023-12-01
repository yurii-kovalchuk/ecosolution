import styled from "styled-components";
import Container from "../Container/Container";

export const HeaderSection = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 36px 0;
  z-index: 1000;
  background-color: ${(props) =>
    props.$scrolled ? "var(--main-bg-color)" : "#ffffff"};
  transition: background-color 0.3s ease;

  @media screen and (min-width: 1280px) {
    padding: 24px 0;
  }
`;

export const HeaderContainer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Interactive = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

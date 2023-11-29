import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);
`;

export const Content = styled.div`
  width: calc(100vw - 40px);
  height: calc(100vh - 72px);
  @media screen and (min-width: 480px) {
    max-width: 480px;
  }
`;

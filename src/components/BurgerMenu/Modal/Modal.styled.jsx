import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);
`;

export const ContentContainer = styled.div`
  height: 100%;
  padding: 36px 20px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
    max-width: 768px;
    padding: 36px 30px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1440px;
    padding: 30px 100px;
  }
`;

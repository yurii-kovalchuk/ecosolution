import styled from "styled-components";

export const ContainBox = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

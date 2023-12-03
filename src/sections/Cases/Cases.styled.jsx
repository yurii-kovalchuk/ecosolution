import styled from "styled-components";

export const CasesTitle = styled.h2`
  margin-bottom: 24px;

  color: var(--dark-green-btn-color);
  font-family: var(--main-font);
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    font-size: 36px;
    line-height: 36px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
  }
`;

export const CarouselWrap = styled.div`
  overflow: hidden;
`;

export const CasesList = styled.ul`
  @media screen and (min-width: 768px) {
    margin-left: -12px;
    margin-right: -12px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: -24px;
    margin-right: -24px;
  }
`;

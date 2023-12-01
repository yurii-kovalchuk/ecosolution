import styled from "styled-components";

export const AboutSection = styled.section`
  padding-top: 36px;
  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 120px;
  }
`;

export const AboutTitle = styled.h2`
  margin-bottom: 24px;

  color: var(--dark-green-btn-color);
  font-family: var(--main-font);
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    width: 272px;
    margin-bottom: 0;
    font-size: 36px;
    line-height: 36px;
  }

  @media screen and (min-width: 1280px) {
    width: 365px;
    font-size: 48px;
    line-height: 48px;
  }
`;

export const AboutTxt = styled.p`
  position: relative;
  color: var(--dark-green-btn-color);
  text-align: justify;
  font-family: var(--second-font);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media screen and (min-width: 768px) {
    width: var(--tablet-width);
    &::before {
      width: 1px;
      content: "";
      display: block;
      position: absolute;
      top: 0px;
      bottom: 0;
      left: -11px;
      background-color: var(--green-btn-color);
    }
  }

  @media screen and (min-width: 1280px) {
    width: var(--desktop-width);
    &::before {
      left: -159px;
    }
  }
`;

export const AboutWrap = styled.div`
  padding-bottom: 26px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 122px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-row: auto;
  grid-gap: 24px;
  align-items: stretch;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1280px) {
    grid-gap: 48px;
  }
`;

export const GridItem = styled.div`
  box-sizing: border-box;
  padding: 12px;
  background: #eaedf1;
`;

export const ItemTitle = styled.span`
  color: var(--dark-green-btn-color);
  font-family: var(--main-font);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;
`;

export const ItemTxt = styled.p`
  margin-top: 46px;
  color: var(--dark-green-btn-color);
  text-align: justify;
  font-family: var(--second-font);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;
`;

export const GridImgItem = styled.div`
  display: none;
  grid-column: span 2;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const AboutImg = styled.img`
  width: 100%;
`;

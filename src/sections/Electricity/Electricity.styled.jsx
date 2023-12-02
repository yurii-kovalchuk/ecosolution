import styled from "styled-components";

export const ElectricitySection = styled.section`
  padding-bottom: 36px;
  text-align: center;
  @media screen and (min-width: 768px) {
    padding-bottom: 100px;
  }
  @media screen and (min-width: 1280px) {
    padding-bottom: 120px;
  }
`;

export const ElectricityTitle = styled.h2`
  position: relative;
  margin-bottom: 96px;
  color: var(--dark-green-btn-color);
  text-align: center;
  font-family: var(--main-font);
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  &::after {
    width: 1px;
    height: 48px;
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: -72px;
    background-color: var(--green-btn-color);
  }

  @media screen and (min-width: 768px) {
    max-width: 368px;
    margin: 0 auto 135px;
    font-size: 36px;
    line-height: 36px;
    &::after {
      height: 86px;
      bottom: -110px;
    }
  }

  @media screen and (min-width: 1280px) {
    max-width: 500px;
    margin: 0 auto 120px;
    font-size: 48px;
    line-height: 48px;
    &::after {
      bottom: -102px;
    }
  }
`;

export const ValueWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const ElectricityValue = styled.span`
  color: var(--green-btn-color);
  text-align: center;
  font-family: var(--main-font);
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-transform: uppercase;
  vertical-align: middle;

  @media screen and (min-width: 768px) {
    font-size: 100px;
    line-height: 100px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 164px;
    line-height: 164px;
  }
`;

export const ElectricityMeasure = styled.span`
  color: var(--dark-green-btn-color);
  text-align: center;
  font-family: var(--main-font);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 48px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
  }
`;

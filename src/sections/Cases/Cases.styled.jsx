import styled from "styled-components";
import Container from "../../components/Container/Container";

export const CarouselWrap = styled(Container)`
  max-width: calc(100% - 40px);
  padding-left: 0;
  padding-right: 0;
  overflow: hidden;

  @media screen and (min-width: 480px) {
    max-width: 440px;
  }

  @media screen and (min-width: 768px) {
    max-width: 708px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1240px;
  }
`;

export const CasesTitle = styled.h2`
  margin-bottom: 116px;
  box-sizing: border-box;

  color: var(--dark-green-btn-color);
  font-family: var(--main-font);
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    padding-right: 90px;
    max-width: 50%;

    font-size: 36px;
    line-height: 36px;
    border-right: 1px solid #97d28b;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 120px;
    padding-right: 220px;

    font-size: 48px;
    line-height: 48px;
  }
`;

export const CasesList = styled.ul`
  margin-left: -6px;
  margin-right: -6px;

  @media screen and (min-width: 768px) {
    margin-left: -12px;
    margin-right: -12px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: -24px;
    margin-right: -24px;
  }
`;

export const SlideCounter = styled.span`
  position: absolute;
  top: calc(-19px - 34px);
  left: 6px;

  color: var(--dark-green-btn-color);
  text-align: justify;
  font-family: var(--second-font);
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -1.12px;

  span {
    color: rgba(23, 61, 51, 0.25);
  }

  @media screen and (min-width: 768px) {
    top: calc(-32px - 34px);
    left: calc(50% + 9px);
  }

  @media screen and (min-width: 1280px) {
    top: calc(-114px - 34px);
    left: calc(50% + 161px);
  }
`;

export const NextSlideBtn = styled.button`
  position: absolute;
  top: calc(-26px - 66px);
  right: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 14px;

  border-radius: 100px;
  border: 1px solid #173d33;

  transition: border-color 0.3s ease;

  svg {
    width: 36px;
    height: 36px;

    path {
      stroke: var(--dark-green-btn-color);
      transition: stroke 0.3s ease;
    }
  }

  &:hover {
    border-color: var(--green-btn-color);

    path {
      stroke: var(--green-btn-color);
    }
  }

  @media screen and (min-width: 768px) {
    top: calc(-40px - 66px);
    right: 12px;
  }

  @media screen and (min-width: 1280px) {
    padding: 24px;

    top: calc(-120px - 84px);
    right: 24px;
  }
`;

export const PrevSlideBtn = styled(NextSlideBtn)`
  right: calc(6px + 12px + 66px);

  svg {
    transform: rotate(180deg);
  }

  @media screen and (min-width: 768px) {
    right: calc(12px + 12px + 66px);
  }

  @media screen and (min-width: 1280px) {
    right: calc(24px + 24px + 84px);
  }
`;

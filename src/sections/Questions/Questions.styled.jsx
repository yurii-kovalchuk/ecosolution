import styled, { keyframes, css } from "styled-components";
import Container from "../../components/Container/Container";

export const QuestContainer = styled(Container)`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    justify-content: space-between;
  }
`;

export const QuestTitle = styled.h2`
  margin-bottom: 24px;
  box-sizing: border-box;

  color: var(--dark-green-btn-color);
  font-family: var(--main-font);
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 36px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    line-height: 48px;
  }
`;

export const QuestCustom = styled.div`
  @media screen and (min-width: 768px) {
    width: var(--tablet-width);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    width: var(--desktop-width);
  }
`;

export const QuestList = styled.ul`
  @media screen and (min-width: 768px) {
    width: var(--tablet-width);
  }

  @media screen and (min-width: 1280px) {
    width: var(--desktop-width-half);
  }
`;

export const QuestItem = styled.li`
  padding: 16px 0 16px 24px;
  &:last-child {
    padding-bottom: 0;
  }
  border-top: 1px solid var(--green-btn-color);

  @media screen and (min-width: 768px) {
    padding-left: 44px;
  }

  @media screen and (min-width: 1280px) {
    padding: 24px 0 24px 52px;
  }
`;

export const Question = styled.div`
  position: relative;

  color: var(--dark-green-btn-color);
  text-align: justify;
  font-family: var(--second-font);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  svg {
    position: absolute;
    left: -8px;
    top: 0;
    bottom: 0;
    margin: auto;

    transform: translateX(-100%);
  }

  @media screen and (min-width: 768px) {
    svg {
      width: 28px;
      height: 28px;
      left: -16px;
      path {
        stroke-width: 1;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    svg {
      left: -24px;
    }
  }
`;

export const Answer = styled.div`
  overflow: hidden;
  height: ${(props) => (props.$isActive ? "auto" : "0")};
  margin-top: ${(props) => (props.$isActive ? "16px" : "0")};

  ${({ $isActive }) =>
    $isActive &&
    css`
      animation: ${fadeIn} 1.2s linear 1;
    `}

  color: var(--dark-green-btn-color);
  text-align: justify;
  font-family: var(--second-font);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.56px;

  @media screen and (min-width: 1280px) {
    margin-top: ${(props) => (props.$isActive ? "24px" : "0")};
    font-size: 16px;
  }
`;

const fadeIn = keyframes`
  from {
    max-height: 0;
  }
  to {
    max-height: 1000px;
  }
`;

export const ContactUsWrap = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  justify-content: spacce-between;
  align-items: center;
  gap: 12px;
`;

export const ContactUsQuest = styled.span`
  color: var(--dark-green-btn-color);
  font-family: var(--second-font);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const ContactUsLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  border-radius: 500px;
  background: var(--green-btn-color);
  color: var(--dark-green-btn-color);

  transition: background 0.3s ease, color 0.3s ease;

  svg circle {
    fill: var(--dark-green-btn-color);
    transition: fill 0.3s ease;
  }

  &:hover {
    background: var(--dark-green-btn-color);
    color: var(--green-btn-color);
    svg circle {
      fill: var(--green-btn-color);
    }
  }
`;

export const ContactUsTxt = styled.span`
  font-family: var(--second-font);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

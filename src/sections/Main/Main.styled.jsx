import styled from "styled-components";

export const MainSection = styled.section`
  padding-top: 110px;
  @media screen and (min-width: 768px) {
    padding-top: 128px;
  }
  @media screen and (min-width: 128px) {
    padding-top: 176px;
  }
`;

export const MainTitle = styled.h1`
  margin-bottom: 24px;
  box-sizing: border-box;

  color: var(--dark-green-btn-color);
  font-family: var(--main-font);
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    max-width: 300px;
    margin-bottom: 0;
    margin-right: auto;

    font-size: 48px;
    line-height: 48px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 485px;

    font-size: 64px;
    line-height: 64px;
  }
`;

export const MainTxt = styled.p`
  color: var(--dark-green-btn-color);
  text-align: justify;
  font-family: var(--second-font);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const MainWrapper = styled.div`
  padding-bottom: 24px;
  border-bottom: 1px solid var(--green-btn-color);
  @media screen and (min-width: 768px) {
    display: flex;
    padding-bottom: 26px;
  }
  @media screen and (min-width: 1280px) {
    padding-bottom: 28px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: 342px;
    align-items: start;
  }

  @media screen and (min-width: 768px) {
    width: 460px;
    padding-right: 96px;
  }
`;

export const MainLink = styled.a`
  padding: 3px 3px 3px 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  border-radius: 500px;
  border: 1px solid var(--green-btn-color);
  color: var(--dark-green-btn-color);

  transition: border-color 0.3s ease, background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    border-color: var(--dark-green-btn-color);
    background-color: var(--dark-green-btn-color);
    color: var(--green-btn-color);
  }
`;

export const MainLinkTxt = styled.span`
  font-family: var(--second-font);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.64px;
`;

export const MainLinkIcon = styled.span`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  background: var(--green-btn-color);
`;

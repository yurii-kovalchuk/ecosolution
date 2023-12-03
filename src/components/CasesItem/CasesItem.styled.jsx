import styled from "styled-components";

export const CaseImg = styled.img`
  width: 100%;
  height: 168px;
  object-fit: cover;
  @media screen and (min-width: 1280px) {
    height: 296px;
  }
`;

export const CaseInfo = styled.div`
  padding: 24px 12px 12px;
  background: #eaedf1;

  @media screen and (min-width: 1280px) {
    padding: 36px 48px;
  }
`;

export const CaseTitleWrap = styled.div`
  margin-bottom: 21px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 36px;
    gap: 80px;
  }
`;

export const CaseTitle = styled.h3`
  color: var(--dark-green-btn-color);
  font-family: var(--second-font);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: -0.8px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const CaseLink = styled.a`
  padding: 16px;
  margin: 3px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  background: var(--green-btn-color);

  transition: background 0.3s ease;

  svg {
    width: 28px;
    height: 28px;

    path {
      stroke: var(--dark-green-btn-color);
      transition: stroke 0.3s ease;
    }
  }

  &:hover {
    background: var(--dark-green-btn-color);
    svg path {
      stroke: var(--green-btn-color);
    }
  }

  @media screen and (min-width: 768px) {
    margin: 6px 0;
  }

  @media screen and (min-width: 1280px) {
    margin: 0;
  }
`;

export const CaseDescriptWrap = styled.div`
  padding-top: 12px;
  border-top: 1px solid var(--green-btn-color);

  display: flex;
  justify-content: space-between;

  color: var(--dark-green-btn-color);
  font-family: var(--second-font);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 24px;
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;

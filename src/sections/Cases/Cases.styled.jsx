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

export const CasesItem = styled.div``;

export const CaseInfo = styled.div`
  padding: 24px 12px 12px;

  background: #eaedf1;
`;

export const CaseTitleWrap = styled.div`
  margin-bottom: 21px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
`;

export const CaseTitle = styled.h3`
  color: var(--dark-green-btn-color);
  text-align: justify;
  font-family: var(--second-font);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
`;

export const CaseBtn = styled.a`
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
`;

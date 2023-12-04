import styled from "styled-components";

export const ContactUsTitle = styled.h2`
  margin-bottom: 24px;
  text-align: center;
  color: var(--dark-green-btn-color);
  font-family: var(--main-font);
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 36px;
    line-height: 36px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 120px;
    font-size: 48px;
    line-height: 48px;
  }
`;

export const ContactsWrap = styled.div`
  padding-right: 76px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: var(--tablet-width);
  }

  @media screen and (min-width: 1280px) {
    width: var(--desktop-width-half);
    gap: 32 px;
  }
`;

export const ContactsBadge = styled.span`
  margin-bottom: 8px;
  display: block;
  color: var(--dark-green-btn-color);
  text-align: justify;
  font-family: var(--second-font);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 16px;
  }
`;

export const PhoneList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
`;

export const ContactsLink = styled.a`
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;

  color: var(--dark-green-btn-color);
  font-family: var(--second-font);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    svg path {
      stroke: var(--green-btn-color);
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const SocialIcons = styled.ul`
  margin-bottom: 24px;
  display: flex;
  gap: 8px;

  svg path {
    stroke: var(--dark-green-btn-color);
  }
`;

export const SocialLink = styled.a`
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    svg path {
      stroke: var(--green-btn-color);
      color: var(--green-btn-color);
    }
  }
  
  @media screen and (min-width: 1280px) {
    padding: 0;
`;

export const FormWrap = styled.div`
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: var(--tablet-width);
  }

  @media screen and (min-width: 1280px) {
    width: var(--desktop-width-half);
  }
`;

export const ContactUsWrap = styled.div`
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    gap: 48px;
  }
`;

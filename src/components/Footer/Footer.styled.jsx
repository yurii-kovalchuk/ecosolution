import styled from "styled-components";

export const FootContainer = styled.div`
  padding: 24px 0;
  border-top: 1px solid var(--green-btn-color);
  @media screen and (min-width: 768px) {
    padding: 40px 0;
  }
`;

export const FootHead = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FootLinkIcon = styled.a`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  background: var(--green-btn-color);

  transition: background 0.3s ease;
  svg {
    transform: rotate(-90deg);

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

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    position: relative;
  }
`;

export const SocialIcons = styled.ul`
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  gap: 8px;

  svg path {
    stroke: var(--dark-green-btn-color);
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    right: calc(50% - 12px);
    transform: translateX(100%);
  }

  @media screen and (min-width: 1280px) {
    right: var(--desktop-width);
  }
`;

export const MailWrap = styled.a`
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    right: calc(50% - 12px);
    transform: translateX(100%);
  }

  @media screen and (min-width: 1280px) {
    right: var(--desktop-width);
  }
`;

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  svg path {
    transition: stroke 0.3s ease, color 0.3s ease;
  }

  &:hover {
    svg path {
      stroke: var(--green-btn-color);
      color: var(--green-btn-color);
    }
  }
`;

export const AddressWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  position: relative;

  color: var(--dark-green-btn-color);
  font-family: var(--second-font);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  a {
    line-height: normal;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Copyright = styled.span``;

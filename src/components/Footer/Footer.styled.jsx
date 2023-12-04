import styled from "styled-components";

export const FootContainer = styled.div`
  padding: 24px 0;
  border-top: 1px solid var(--green-btn-color);
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

export const SocialIcons = styled.ul`
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  gap: 8px;

  svg path {
    stroke: var(--dark-green-btn-color);
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
    padding: 16px 0 40px;
  }
  @media screen and (min-width: 1280px) {
    padding: 12px 0 36px;
  }
`;

export const Copyright = styled.span``;

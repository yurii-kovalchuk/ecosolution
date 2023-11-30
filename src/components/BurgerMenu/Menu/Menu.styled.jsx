import styled from "styled-components";

export const MenuContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 24px;
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);
  @media screen and (min-width: 768px) {
    width: 320px;
  }
`;

export const CloseBtn = styled.button`
  display: flex;
  justify-content: start;
  align-items: end;
  gap: 4px;
  transform: translateX(-4px);
  color: var(--white);
  transition: color 0.3s ease;
  path {
    stroke: var(--white);
    transition: stroke 0.3s ease;
  }
  &:hover {
    color: var(--green-btn-color);
    path {
      stroke: var(--green-btn-color);
    }
  }
`;

export const CloseTxt = styled.span`
  font-family: var(--second-font);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;

export const Navigation = styled.nav`
  position: relative;
  margin-top: 33px;

  &::before {
    height: 1px;
    content: "";
    display: block;
    position: absolute;
    top: -24px;
    left: 0;
    right: 0;
    background-color: var(--white);
  }
`;

export const NavItem = styled.li`
  margin-bottom: 8px;
`;

export const NavLink = styled.a`
  color: ${(props) =>
    props.$isActive ? "var(--green-btn-color)" : "rgba(255, 255, 255, 0.25)"};
  transition: color 0.3s ease;

  path {
    stroke: ${(props) =>
      props.$isActive ? "var(--green-btn-color)" : "rgba(255, 255, 255, 0.25)"};
    transition: stroke 0.3s ease;
  }
  &:hover {
    color: ${(props) =>
      props.$isActive ? "var(--green-btn-color)" : "var(--white)"};
    path {
      stroke: ${(props) =>
        props.$isActive ? "var(--green-btn-color)" : "var(--white)"};
    }
  }
`;

export const NavTxt = styled.span`
  margin-right: 8px;

  font-family: var(--second-font);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.96px;
`;

export const SocialMedia = styled.div`
  margin-top: auto;
`;

export const SocialLink = styled.a`
  margin-right: 8px;
  color: #fff;
  transition: color 0.3s ease;
  path {
    transition: stroke 0.3s ease;
  }

  &:hover {
    color: var(--green-btn-color);
    path {
      stroke: var(--green-btn-color);
    }
  }
`;

import styled from "styled-components";

export const GetInTouchBtn = styled.a`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
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
  }
`;

export const GeyInTouchTxt = styled.span`
  font-family: var(--second-font);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

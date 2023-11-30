import styled from "styled-components";

export const MenuButton = styled.button`
  padding: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 500px;
  background: var(--light-green-btn-color);

  &:hover {
    background: var(--green-btn-color);
  }

  transition: background-color 0.3s ease;
`;

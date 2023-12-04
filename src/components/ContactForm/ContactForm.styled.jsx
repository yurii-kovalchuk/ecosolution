import styled from "styled-components";

export const Form = styled.form`
  padding: 36px 12px;
  background: #eaedf1;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;

  color: var(--dark-green-btn-color);
  text-align: justify;
  font-family: var(--second-font);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 28px;
  padding-bottom: 8px;

  border: transparent;
  background-color: transparent;
  border-bottom: 1px solid var(--green-btn-color);

  color: var(--dark-green-btn-color);
  font-family: var(--second-font);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  &.is-invalid {
    border-bottom: 1px solid #d28b8b;
  }

  ::placeholder {
    color: #bdbdbd;
    font-family: var(--second-font);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.72px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  margin-bottom: 16px;

  border: transparent;
  background-color: transparent;
  border-bottom: 1px solid var(--green-btn-color);
  resize: none;

  color: var(--dark-green-btn-color);
  font-family: var(--second-font);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;

  &.is-invalid {
    border-bottom: 1px solid #d28b8b;
  }

  ::placeholder {
    color: #bdbdbd;
    font-family: var(--second-font);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.72px;
  }
`;

export const SubmitBtn = styled.button`
  padding: 3px 4px 3px 16px;
  margin-left: auto;
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

export const SubmitTxt = styled.span`
  font-family: var(--second-font);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.64px;
`;

export const SubmitIcon = styled.span`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  background: var(--green-btn-color);
`;

export const FieldWrap = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: 6px;
  right: 0;

  color: #d28b8b;
  text-align: right;
  font-family: Fira Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
`;

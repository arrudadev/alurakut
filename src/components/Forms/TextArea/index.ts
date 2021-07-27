import styled from 'styled-components';

export const TextArea = styled.textarea`
  width: 100%;
  height: 150px;

  resize: none;

  background-color: #f4f4f4;
  color: #333333;

  border: 0;
  border-radius: 16px;

  padding: 14px 16px;
  margin-bottom: 14px;

  ::placeholder {
    color: #333333;

    opacity: 1;
  }
`;

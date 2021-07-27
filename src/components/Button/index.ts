import styled from 'styled-components';

type ButtonProps = {
  isActive?: boolean;
};

export const Button = styled.button<ButtonProps>`
  border: 0;
  border-radius: 10000px;

  padding: 8px 12px;

  color: ${({ isActive }) => (isActive ? '#ffffff' : 'rgb(46, 123, 180)')};
  background-color: ${({ isActive }) =>
    isActive ? '#6f92bb' : 'rgb(217, 230, 246)'};
`;

import styled from 'styled-components';

export const IconList = styled.ul`
  margin-top: 32px;

  list-style: none;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  li {
    font-size: 12px;

    color: #5a5a5a;

    display: grid;
    grid-template-areas:
      'title title'
      'icon icon';

    &:not(:last-child) {
      margin-right: 5px;
    }
  }
`;

export const IconTitle = styled.span`
  display: block;
  font-style: italic;
`;

export const IconWrapper = styled.span`
  min-width: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

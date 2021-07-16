import styled from 'styled-components';

export const List = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-bottom: 16px;

    font-size: 12px;
    color: #2e7bb4;
    text-decoration: none;

    img {
      width: 16px;
      height: 16px;

      margin-right: 5px;
    }
  }
`;

export const Divider = styled.hr`
  margin-top: 12px;
  margin-bottom: 8px;

  border-color: transparent;
  border-bottom-color: #ecf2fa;
`;

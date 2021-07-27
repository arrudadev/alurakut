import styled from 'styled-components';

export const Box = styled.div`
  background: #ffffff;
  border-radius: 8px;

  padding: 16px;
  margin-bottom: 10px;

  .boxLink {
    color: #2e7bb4;

    font-size: 14px;
    font-weight: 800;
    text-decoration: none;
  }

  .title {
    font-size: 32px;
    font-weight: 400;

    margin-bottom: 20px;
  }

  .subTitle {
    font-size: 18px;
    font-weight: 400;

    margin-bottom: 20px;
  }

  .smallTitle {
    color: #333333;

    font-size: 16px;
    font-weight: 700;

    margin-bottom: 20px;
  }

  hr {
    margin-top: 12px;
    margin-bottom: 8px;

    border-color: transparent;
    border-bottom-color: #ecf2fa;
  }
`;

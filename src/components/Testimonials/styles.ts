import styled from 'styled-components';

import { Box } from '../Box';

export const Wrapper = styled(Box)`
  ul {
    width: 100%;
    max-height: 800px;
    list-style: none;
    margin-bottom: 20px;

    li {
      display: flex;
      padding: 8px;
      margin-bottom: 10px;
      background-color: #f4f4f4;
      border-radius: 10px;

      img {
        object-fit: cover;
        background-position: center center;
        width: 70px;
        height: 70px;
        margin-right: 20px;
        border-radius: 8px;
      }

      span {
        font-weight: 600;
        color: #2e7bb4;
        margin-right: 5px;
      }

      p {
        padding: 8px 0px;
        font-size: 14px;
      }
    }
  }

  .see-all {
    display: flex;
    justify-content: center;

    font-size: 14px;
    font-weight: 800;

    color: #2e7bb4;
    text-decoration: none;
  }
`;

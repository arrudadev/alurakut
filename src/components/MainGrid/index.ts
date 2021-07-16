import styled from 'styled-components';

export const MainGrid = styled.main`
  width: 100%;
  max-width: 500px;

  padding: 16px;
  margin-left: auto;
  margin-right: auto;

  .profile-area {
    display: none;
    @media (min-width: 860px) {
      display: block;
    }
  }

  @media (min-width: 860px) {
    max-width: 1110px;

    display: grid;
    grid-gap: 10px;
    grid-template-areas: 'profile-area welcome-area profile-relation-area';
    grid-template-columns: 200px 1fr 312px;
  }
`;

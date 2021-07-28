import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-areas:
    'logo-area'
    'form-area'
    'footer-area';

  padding: 16px;
  max-width: 1110px;

  @media (min-width: 860px) {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'logo-area form-area'
      'logo-area form-area'
      'footer-area footer-area';
  }
`;

export const LogoArea = styled.section`
  grid-area: logo-area;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  background-color: var(--backgroundTertiary);
  border-radius: var(--commonRadius);

  padding: 16px;
  text-align: center;
  min-height: 263px;

  @media (min-width: 860px) {
    min-height: 368px;
  }

  p {
    font-size: 12px;
    line-height: 1.2;

    &:not(:last-child) {
      margin-bottom: 12px;
    }

    strong {
      color: var(--colorQuarternary);
    }
  }

  img {
    max-height: 45px;
    margin-bottom: 36px;
  }
`;

export const FormArea = styled.section`
  grid-area: form-area;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    text-align: center;

    padding: 16px;
    padding-left: 50px;
    padding-right: 50px;

    background-color: var(--backgroundSecondary);
    border-radius: var(--commonRadius);

    &:not(:last-child) {
      margin-bottom: 12px;
    }

    &:first-child {
      min-height: 224px;

      @media (min-width: 860px) {
        min-height: 282px;
      }
    }

    p {
      font-size: 14px;
    }

    a {
      text-decoration: none;
      color: var(--colorPrimary);
    }

    input {
      display: block;
      width: 100%;

      border: 1px solid var(--textQuarternaryColor);
      border-radius: var(--commonRadius);
      background-color: var(--backgroundTertiary);

      padding: 12px;

      margin-top: 24px;
      margin-bottom: 16px;
    }

    button {
      display: block;
      width: 100%;

      padding: 12px;

      border: 0;
      border-radius: var(--commonRadius);
      background-color: var(--colorPrimary);

      color: var(--textSecondaryColor);
    }
  }
`;

export const FooterArea = styled.footer`
  grid-area: footer-area;

  background-color: var(--backgroundQuarternary);
  border-radius: var(--commonRadius);

  padding: 8px;

  p {
    font-size: 12px;
    text-align: center;

    a {
      text-decoration: none;
      color: var(--colorPrimary);
    }
  }
`;

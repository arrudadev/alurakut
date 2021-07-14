import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  background-color: #308bc5;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1110px;

  position: relative;

  background-color: #308bc5;

  margin: auto;
  padding: 7px 16px;

  z-index: 101;

  @media (min-width: 860px) {
    justify-content: flex-start;
  }
`;

export const Nav = styled.nav`
  display: none;

  a {
    font-size: 12px;
    text-decoration: none;

    color: white;

    padding: 10px 16px;

    position: relative;

    &:after {
      content: ' ';

      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;

      background-color: #5292c1;

      width: 1px;
      height: 12px;

      margin: auto;
    }
  }

  @media (min-width: 860px) {
    display: flex;
  }
`;

export const Button = styled.button`
  border: 0;

  background: transparent;

  display: inline-block;
  align-self: center;

  @media (min-width: 860px) {
    display: none;
  }
`;

export const Input = styled.input`
  color: #ffffff;
  font-size: 12px;

  background: #5579a1;

  padding: 10px 42px;

  border: 0;
  border-radius: 1000px;

  background-image: url(${`http://alurakut.vercel.app/icons/search.svg`});
  background-position: 15px center;
  background-repeat: no-repeat;

  ::placeholder {
    color: #ffffff;
    opacity: 1;
  }
`;

export const Logo = styled.img`
  height: 34px;
  padding: 9px 14px;
  background-color: #ffffff;
  border-radius: 1000px;
`;

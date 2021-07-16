import styled from 'styled-components';

type WrapperProps = {
  isMenuOpen: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  top: 48px;
  bottom: 0;
  right: 0;
  left: 0;

  background: white;
  z-index: 100;

  padding: 46px;

  transition: 0.3s;

  pointer-events: ${({ isMenuOpen }) => (isMenuOpen ? 'all' : 'none')};

  opacity: ${({ isMenuOpen }) => (isMenuOpen ? '1' : '0')};

  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? 'translateY(0)' : 'translateY(calc(-100% - 48px))'};

  @media (min-width: 860px) {
    display: none;
  }
`;

export const Container = styled.div`
  max-width: 400px;
  margin: auto;
`;

export const BoxLink = styled.a`
  font-size: 18px;
  font-weight: 800;
  color: #2e7bb4;

  -webkit-text-decoration: none;
  text-decoration: none;
`;

export const Divider = styled.hr`
  margin-top: 12px;
  margin-bottom: 8px;

  border-color: transparent;
  border-bottom-color: #ecf2fa;
`;

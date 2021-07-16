import { MenuList } from '../MenuList';

import { BoxLink, Container, Divider, Wrapper } from './styles';

type MobileMenuProps = {
  githubUser: string;
  isMenuOpen: boolean;
};

export function MobileMenu({ githubUser, isMenuOpen }: MobileMenuProps) {
  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <Container>
        <img
          src={`https://github.com/${githubUser}.png`}
          alt={`${githubUser}`}
          style={{ borderRadius: '8px' }}
        />

        <Divider />

        <BoxLink href={`/user/${githubUser}`}>@{githubUser}</BoxLink>

        <Divider />

        <MenuList />
      </Container>
    </Wrapper>
  );
}

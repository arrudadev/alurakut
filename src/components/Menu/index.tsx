import { useState } from 'react';

import { Link } from '../Link';
import { MobileMenu } from '../MobileMenu';

import { Button, Container, Input, Logo, Nav, Wrapper } from './styles';

type MenuProps = {
  githubUser: string;
};

export function Menu({ githubUser }: MenuProps) {
  const [isMenuOpen, setMenuState] = useState(false);

  const menuItems = [
    { name: 'Inicio', slug: '/' },
    { name: 'Amigos', slug: '/' },
    { name: 'Comunidades', slug: '/' },
  ];

  return (
    <Wrapper>
      <Container>
        <Logo src="/logo.svg" />

        <Nav style={{ flex: 1 }}>
          {menuItems.map(menuItem => (
            <Link
              key={`key__${menuItem.name.toLocaleLowerCase()}`}
              href={`${menuItem.slug.toLocaleLowerCase()}`}
            >
              {menuItem.name}
            </Link>
          ))}
        </Nav>

        <Nav>
          <Link href="/">Sair</Link>

          <div>
            <Input placeholder="Pesquisar no Orkut" />
          </div>
        </Nav>

        <Button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src="/menu-open.svg" alt="Open Menu" />}

          {!isMenuOpen && <img src="/menu-closed.svg" alt="Close Menu" />}
        </Button>
      </Container>

      <MobileMenu githubUser={githubUser} isMenuOpen={isMenuOpen} />
    </Wrapper>
  );
}

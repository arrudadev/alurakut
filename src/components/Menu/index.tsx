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
    { name: 'Amigos', slug: '/amigos' },
    { name: 'Comunidades', slug: '/comunidades' },
  ];

  return (
    <Wrapper>
      <Container>
        <Logo src="http://alurakut.vercel.app/logo.svg" />

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
          <a href="/logout">Sair</a>

          <div>
            <Input placeholder="Pesquisar no Orkut" />
          </div>
        </Nav>

        <Button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && (
            <img
              src="http://alurakut.vercel.app/icons/menu-open.svg"
              alt="Open Menu"
            />
          )}
          {!isMenuOpen && (
            <img
              src="http://alurakut.vercel.app/icons/menu-closed.svg"
              alt="Close Menu"
            />
          )}
        </Button>
      </Container>

      <MobileMenu githubUser={githubUser} isMenuOpen={isMenuOpen} />
    </Wrapper>
  );
}

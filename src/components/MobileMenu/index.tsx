import { Link } from '../Link';

import { BoxLink, Container, Divider, MenuList, Wrapper } from './styles';

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

        <MenuList>
          <nav>
            <Link href="/">
              <img
                src="http://alurakut.vercel.app/icons/user.svg"
                alt="Perfil"
              />
              Perfil
            </Link>
            <Link href="/">
              <img
                src="http://alurakut.vercel.app/icons/book.svg"
                alt="Recados"
              />
              Recados
            </Link>
            <Link href="/">
              <img
                src="http://alurakut.vercel.app/icons/camera.svg"
                alt="Fotos"
              />
              Fotos
            </Link>
            <Link href="/">
              <img
                src="http://alurakut.vercel.app/icons/sun.svg"
                alt="Depoimentos"
              />
              Depoimentos
            </Link>
          </nav>

          <Divider />

          <nav>
            <Link href="/">
              <img
                src="http://alurakut.vercel.app/icons/plus.svg"
                alt="GitHub Trends"
              />
              GitHub Trends
            </Link>
            <Link href="/logout">
              <img
                src="http://alurakut.vercel.app//icons/logout.svg"
                alt="Sair"
              />
              Sair
            </Link>
          </nav>
        </MenuList>
      </Container>
    </Wrapper>
  );
}

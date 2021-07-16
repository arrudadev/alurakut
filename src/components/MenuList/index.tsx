import { Link } from '../Link';

import { Divider, List } from './styles';

export function MenuList() {
  return (
    <List>
      <nav>
        <Link href="/">
          <img src="http://alurakut.vercel.app/icons/user.svg" alt="Perfil" />
          Perfil
        </Link>

        <Link href="/">
          <img src="http://alurakut.vercel.app/icons/book.svg" alt="Recados" />
          Recados
        </Link>

        <Link href="/">
          <img src="http://alurakut.vercel.app/icons/camera.svg" alt="Fotos" />
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
          <img src="http://alurakut.vercel.app//icons/logout.svg" alt="Sair" />
          Sair
        </Link>
      </nav>
    </List>
  );
}

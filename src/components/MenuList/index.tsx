import { Link } from '../Link';

import { Divider, List } from './styles';

export function MenuList() {
  return (
    <List>
      <nav>
        <Link href="/">
          <img src="/user.svg" alt="Perfil" />
          Perfil
        </Link>

        <Link href="/">
          <img src="/book.svg" alt="Recados" />
          Recados
        </Link>

        <Link href="/">
          <img src="/camera.svg" alt="Fotos" />
          Fotos
        </Link>

        <Link href="/">
          <img src="/sun.svg" alt="Depoimentos" />
          Depoimentos
        </Link>
      </nav>

      <Divider />

      <nav>
        <Link href="/">
          <img src="/plus.svg" alt="GitHub Trends" />
          GitHub Trends
        </Link>

        <Link href="/">
          <img src="/logout.svg" alt="Sair" />
          Sair
        </Link>
      </nav>
    </List>
  );
}

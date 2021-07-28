import { useState } from 'react';

import { Link } from '../components/Link';
import {
  Container,
  Wrapper,
  LogoArea,
  FormArea,
  FooterArea,
} from '../styles/login';

export default function Login() {
  const [githubUser, setGithubUser] = useState('');

  function handleLogin() {
    console.log('login');
  }

  return (
    <Container>
      <Wrapper>
        <LogoArea>
          <img src="https://alurakut.vercel.app/logo.svg" alt="Logo" />

          <p>
            <strong>Conecte-se</strong> aos seus amigos e familiares usando
            recados e mensagens instantâneas
          </p>
          <p>
            <strong>Conheça</strong> novas pessoas através de amigos de seus
            amigos e comunidades
          </p>
          <p>
            <strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só
            lugar
          </p>
        </LogoArea>

        <FormArea>
          <form className="box" onSubmit={handleLogin}>
            <p>
              Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
            </p>

            <input
              required
              placeholder="Usuário"
              value={githubUser}
              onChange={ev => {
                setGithubUser(ev.target.value);
              }}
            />
            <button type="submit">Login</button>
          </form>

          <footer className="box">
            <p>
              Ainda não é membro? <br />
              <Link href="/login">
                <strong>ENTRAR JÁ</strong>
              </Link>
            </p>
          </footer>
        </FormArea>

        <FooterArea>
          <p>
            © 2021 alura.com.br - <Link href="/">Sobre o Orkut.br</Link> -{' '}
            <Link href="/">Centro de segurança</Link> -{' '}
            <Link href="/">Privacidade</Link> - <Link href="/">Termos</Link> -{' '}
            <Link href="/">Contato</Link>
          </p>
        </FooterArea>
      </Wrapper>
    </Container>
  );
}

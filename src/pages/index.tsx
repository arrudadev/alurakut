import { useState } from 'react';

import { GetServerSideProps } from 'next';

import jwt from 'jsonwebtoken';
import nookies from 'nookies';

import { ActionsBox } from '../components/ActionsBox';
import { Box } from '../components/Box';
import { Followers } from '../components/Followers';
import { IconSet } from '../components/IconSet';
import { MainGrid } from '../components/MainGrid';
import { Menu } from '../components/Menu';
import { ProfileRelationsBox } from '../components/ProfileRelationsBox';
import { ProfileSidebar } from '../components/ProfileSidebar';
import { Testimonials } from '../components/Testimonials';

type Community = {
  id: string;
  name: string;
  image: string;
};

type User = {
  id: string;
  name: string;
  image: string;
};

type HomeProps = {
  githubUser: string;
};

export default function Home({ githubUser }: HomeProps) {
  const [communities, setCommunities] = useState<Community[]>([
    {
      id: '1',
      name: 'Eu odeio acordar cedo',
      image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
    },
  ]);

  const users: User[] = [
    {
      id: '1',
      name: 'juunegreiros',
      image: 'https://github.com/juunegreiros.png',
    },
    {
      id: '2',
      name: 'omariosouto',
      image: 'https://github.com/omariosouto.png',
    },
    {
      id: '3',
      name: 'peas',
      image: 'https://github.com/peas.png',
    },
    {
      id: '4',
      name: 'rafaballerini',
      image: 'https://github.com/rafaballerini.png',
    },
    {
      id: '5',
      name: 'marcobrunodev',
      image: 'https://github.com/marcobrunodev.png',
    },
    {
      id: '6',
      name: 'diego3g',
      image: 'https://github.com/diego3g.png',
    },
    {
      id: '7',
      name: 'felipefialho',
      image: 'https://github.com/felipefialho.png',
    },
  ];

  return (
    <>
      <Menu githubUser={githubUser} />
      <MainGrid>
        <div className="profile-area" style={{ gridArea: 'profile-area' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>

        <div className="welcome-area" style={{ gridArea: 'welcome-area' }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>

            <IconSet />
          </Box>

          <ActionsBox />

          <Testimonials githubUser={githubUser} />
        </div>

        <div
          className="profile-relations-area"
          style={{ gridArea: 'profile-relation-area' }}
        >
          <Followers githubUser={githubUser} />

          <ProfileRelationsBox title="Comunidades" items={communities} />

          <ProfileRelationsBox title="Pessoas da comunidade" items={users} />
        </div>
      </MainGrid>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;

  const decodedToken = jwt.decode(token) as { user: string };

  const githubUser = decodedToken?.user;

  if (!githubUser) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      githubUser,
    },
  };
};

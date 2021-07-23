import { FormEvent, useEffect, useState } from 'react';

import { Box } from '../components/Box';
import { IconSet } from '../components/IconSet';
import { MainGrid } from '../components/MainGrid';
import { Menu } from '../components/Menu';
import { ProfileRelationsBox } from '../components/ProfileRelationsBox';
import { ProfileSidebar } from '../components/ProfileSidebar';
import { Testimonials } from '../components/Testimonials';

type GitHubFollower = {
  login: string;
  avatar_url: string;
};

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

type Follower = {
  id: string;
  name: string;
  image: string;
};

export default function Home() {
  const [communities, setCommunities] = useState<Community[]>([
    {
      id: '1',
      name: 'Eu odeio acordar cedo',
      image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
    },
  ]);

  const [communityTitle, setCommunityTitle] = useState('');
  const [communityImage, setCommunityImage] = useState('');

  const [followers, setFollowers] = useState<Follower[]>([]);

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

  useEffect(() => {
    fetch('https://api.github.com/users/monteiro-alexandre/followers')
      .then(response => {
        return response.json();
      })
      .then((gitHubFollowers: GitHubFollower[]) => {
        const serializedFollowers = gitHubFollowers.map(follower => {
          return {
            id: follower.login,
            name: follower.login,
            image: follower.avatar_url,
          };
        });

        setFollowers(serializedFollowers);
      });
  }, []);

  function handleCreateCommunity(event: FormEvent) {
    event.preventDefault();

    if (communityTitle.length > 0 && communityImage.length > 0) {
      const community = {
        id: new Date().toISOString(),
        name: communityTitle,
        image: communityImage,
      };

      setCommunities([...communities, community]);

      setCommunityTitle('');
      setCommunityImage('');
    }
  }

  return (
    <>
      <Menu githubUser="monteiro-alexandre" />
      <MainGrid>
        <div className="profile-area" style={{ gridArea: 'profile-area' }}>
          <ProfileSidebar githubUser="monteiro-alexandre" />
        </div>

        <div className="welcome-area" style={{ gridArea: 'welcome-area' }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>

            <IconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={handleCreateCommunity}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                  value={communityTitle}
                  onChange={event => setCommunityTitle(event.target.value)}
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                  value={communityImage}
                  onChange={event => setCommunityImage(event.target.value)}
                />
              </div>

              <button type="submit">Criar comunidade</button>
            </form>
          </Box>

          <Testimonials githubUser="monteiro-alexandre" />
        </div>

        <div
          className="profile-relations-area"
          style={{ gridArea: 'profile-relation-area' }}
        >
          <ProfileRelationsBox title="Seguidores" items={followers} />

          <ProfileRelationsBox title="Comunidades" items={communities} />

          <ProfileRelationsBox title="Pessoas da comunidade" items={users} />
        </div>
      </MainGrid>
    </>
  );
}

import { FormEvent, useState } from 'react';

import { Box } from '../components/Box';
import { IconSet } from '../components/IconSet';
import { MainGrid } from '../components/MainGrid';
import { Menu } from '../components/Menu';
import { ProfileRelationsBoxWrapper } from '../components/ProfileRelationsBoxWrapper';
import { ProfileSidebar } from '../components/ProfileSidebar';

export default function Home() {
  const [communities, setCommunities] = useState([
    {
      id: '12802378123789378912789789123896123',
      title: 'Eu odeio acordar cedo',
      image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
    },
  ]);

  const [communityTitle, setCommunityTitle] = useState('');
  const [communityImage, setCommunityImage] = useState('');

  const users = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'diego3g',
    'felipefialho',
  ];

  function handleCreateCommunity(event: FormEvent) {
    event.preventDefault();

    if (communityTitle.length > 0 && communityImage.length > 0) {
      const community = {
        id: new Date().toISOString(),
        title: communityTitle,
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
        </div>

        <div
          className="profile-relations-area"
          style={{ gridArea: 'profile-relation-area' }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({communities.length})</h2>
            <ul>
              {communities.map(community => {
                return (
                  <li key={community.id}>
                    <a href={`/users/${community.title}`}>
                      <img src={community.image} alt={community.title} />
                      <span>{community.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({users.length})
            </h2>

            <ul>
              {users.map(user => {
                return (
                  <li key={user}>
                    <a href={`/users/${user}`}>
                      <img src={`https://github.com/${user}.png`} alt={user} />
                      <span>{user}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}

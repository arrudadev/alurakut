import { Box } from '../components/Box';
import { IconSet } from '../components/IconSet';
import { MainGrid } from '../components/MainGrid';
import { Menu } from '../components/Menu';
import { ProfileRelationsBoxWrapper } from '../components/ProfileRelationsBoxWrapper';
import { ProfileSidebar } from '../components/ProfileSidebar';

export default function Home() {
  const users = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ];

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
        </div>

        <div
          className="profile-relations-area"
          style={{ gridArea: 'profile-relation-area' }}
        >
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

import { GetServerSideProps } from 'next';

import jwt from 'jsonwebtoken';
import nookies from 'nookies';

import { ActionsBox } from '../components/ActionsBox';
import { Box } from '../components/Box';
import { CommunityPersons } from '../components/CommunityPersons';
import { Followers } from '../components/Followers';
import { IconSet } from '../components/IconSet';
import { MainGrid } from '../components/MainGrid';
import { Menu } from '../components/Menu';
import { ProfileRelationsBox } from '../components/ProfileRelationsBox';
import { ProfileSidebar } from '../components/ProfileSidebar';
import { Testimonials } from '../components/Testimonials';
import { useCommunity } from '../hooks/useCommunity';

type HomeProps = {
  githubUser: string;
};

export default function Home({ githubUser }: HomeProps) {
  const { communities } = useCommunity();

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

          <CommunityPersons />
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

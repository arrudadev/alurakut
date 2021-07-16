import { Box } from '../Box';
import { MenuList } from '../MenuList';

type ProfileSidebarProps = {
  githubUser: string;
};

export function ProfileSidebar({ githubUser }: ProfileSidebarProps) {
  return (
    <Box as="aside">
      <img
        src={`https://github.com/${githubUser}.png`}
        alt={githubUser}
        style={{ borderRadius: '8px' }}
      />

      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${githubUser}`}>
          @{githubUser}
        </a>
      </p>

      <hr />

      <MenuList />
    </Box>
  );
}

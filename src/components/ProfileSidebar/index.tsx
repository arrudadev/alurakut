import { Box } from '../Box';

type ProfileSidebarProps = {
  githubUser: string;
};

export function ProfileSidebar({ githubUser }: ProfileSidebarProps) {
  return (
    <Box>
      <img
        src={`https://github.com/${githubUser}.png`}
        alt={githubUser}
        style={{ borderRadius: '8px' }}
      />
    </Box>
  );
}

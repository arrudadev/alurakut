import { useEffect, useState } from 'react';

import { ProfileRelationsBox } from '../ProfileRelationsBox';

type Follower = {
  id: string;
  name: string;
  image: string;
};

type GitHubFollower = {
  login: string;
  avatar_url: string;
};

type FollowersProps = {
  githubUser: string;
};

export function Followers({ githubUser }: FollowersProps) {
  const [followers, setFollowers] = useState<Follower[]>([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUser}/followers`)
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
  }, [githubUser]);

  return <ProfileRelationsBox title="Seguidores" items={followers} />;
}

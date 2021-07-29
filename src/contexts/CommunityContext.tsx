import { createContext, ReactNode, useState } from 'react';

type Community = {
  id: string;
  name: string;
  image: string;
};

type CommunityContextProps = {
  communities: Community[];
  createCommunity: (community: Community) => void;
};

type CommunityContextProviderProps = {
  children: ReactNode;
};

export const CommunityContext = createContext({} as CommunityContextProps);

export function CommunityContextProvider({
  children,
}: CommunityContextProviderProps) {
  const [communities, setCommunities] = useState<Community[]>([
    {
      id: '1',
      name: 'Eu odeio acordar cedo',
      image: '/capa-comunidade-01.jpg',
    },
  ]);

  function createCommunity(community: Community) {
    setCommunities([...communities, community]);
  }

  return (
    <CommunityContext.Provider value={{ communities, createCommunity }}>
      {children}
    </CommunityContext.Provider>
  );
}

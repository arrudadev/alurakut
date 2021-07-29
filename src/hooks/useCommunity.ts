import { useContext } from 'react';

import { CommunityContext } from '../contexts/CommunityContext';

export function useCommunity() {
  const context = useContext(CommunityContext);

  return context;
}

import { useCommunity } from '../../hooks/useCommunity';
import { ProfileRelationsBox } from '../ProfileRelationsBox';

export function CommunitiesBox() {
  const { communities } = useCommunity();

  return <ProfileRelationsBox title="Comunidades" items={communities} />;
}

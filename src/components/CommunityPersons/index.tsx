import { ProfileRelationsBox } from '../ProfileRelationsBox';

type User = {
  id: string;
  name: string;
  image: string;
};

export function CommunityPersons() {
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

  return <ProfileRelationsBox title="Pessoas da comunidade" items={users} />;
}

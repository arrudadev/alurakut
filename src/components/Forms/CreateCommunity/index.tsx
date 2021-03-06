import { FormEvent, useState } from 'react';

import { useCommunity } from '../../../hooks/useCommunity';
import { Button } from '../../Button';
import { Input } from '../Input';

export function CreateCommunityForm() {
  const { createCommunity } = useCommunity();

  const [communityTitle, setCommunityTitle] = useState('');
  const [communityImage, setCommunityImage] = useState('');

  function handleCreateCommunity(event: FormEvent) {
    event.preventDefault();

    if (communityTitle.length > 0 && communityImage.length > 0) {
      const community = {
        id: new Date().toISOString(),
        name: communityTitle,
        image: communityImage,
      };

      createCommunity(community);

      setCommunityTitle('');
      setCommunityImage('');
    }
  }

  return (
    <form onSubmit={handleCreateCommunity}>
      <div>
        <Input
          placeholder="Qual vai ser o nome da sua comunidade?"
          name="title"
          aria-label="Qual vai ser o nome da sua comunidade?"
          type="text"
          value={communityTitle}
          onChange={event => setCommunityTitle(event.target.value)}
        />
      </div>

      <div>
        <Input
          placeholder="Coloque uma URL para usarmos de capa"
          name="image"
          aria-label="Coloque uma URL para usarmos de capa"
          value={communityImage}
          onChange={event => setCommunityImage(event.target.value)}
        />
      </div>

      <Button type="submit" isActive>
        Criar comunidade
      </Button>
    </form>
  );
}

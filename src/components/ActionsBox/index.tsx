import { useState } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';
import { CreateCommunityForm } from '../Forms/CreateCommunity';
import { CreateTestimonialForm } from '../Forms/CreateTestimonial';

import { Tabs, TabsItem } from './styles';

export function ActionsBox() {
  const [createCommunityVisible, setCreateCommunityVisible] = useState(true);
  const [createTestimonialVisible, setCreateTestimonialVisible] =
    useState(false);

  function makeCreateCommunityVisible() {
    setCreateCommunityVisible(true);
    setCreateTestimonialVisible(false);
  }

  function makeCreateTestimonialVisible() {
    setCreateCommunityVisible(false);
    setCreateTestimonialVisible(true);
  }

  return (
    <Box>
      <h2 className="subTitle">O que você deseja fazer?</h2>

      <Tabs>
        <Button
          isActive={createCommunityVisible}
          onClick={makeCreateCommunityVisible}
        >
          Criar comunidade
        </Button>

        <Button
          isActive={createTestimonialVisible}
          onClick={makeCreateTestimonialVisible}
        >
          Escrever depoimento
        </Button>
      </Tabs>

      <TabsItem visible={createCommunityVisible}>
        <CreateCommunityForm
          communities={[]}
          setCommunities={() => {
            console.log('teste');
          }}
        />
      </TabsItem>

      <TabsItem visible={createTestimonialVisible}>
        <CreateTestimonialForm
          testimonials={[]}
          setTestimonials={() => {
            console.log('teste');
          }}
        />
      </TabsItem>
    </Box>
  );
}

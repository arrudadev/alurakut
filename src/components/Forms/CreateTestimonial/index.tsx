import { FormEvent, useState } from 'react';

import { useTestimonial } from '../../../hooks/useTestimonial';
import { Button } from '../../Button';
import { Input } from '../Input';
import { TextArea } from '../TextArea';

export function CreateTestimonialForm() {
  const { createTestimonial } = useTestimonial();

  const [githubUser, setGithubUser] = useState('');
  const [testimonial, setTestimonial] = useState('');

  function handleCreateTestimonial(event: FormEvent) {
    event.preventDefault();

    if (githubUser.length > 0 && testimonial.length > 0) {
      const newTestimonial = {
        id: new Date().toISOString(),
        githubUser,
        name: githubUser,
        text: testimonial,
      };

      createTestimonial(newTestimonial);

      setGithubUser('');
      setTestimonial('');
    }
  }

  return (
    <form onSubmit={handleCreateTestimonial}>
      <div>
        <Input
          placeholder="Digite seu usuário do github?"
          name="user"
          aria-label="Digite seu usuário do github?"
          type="text"
          value={githubUser}
          onChange={event => setGithubUser(event.target.value)}
        />
      </div>
      <div>
        <TextArea
          placeholder="Digite seu depoimento..."
          name="testimonial"
          aria-label="Digite seu depoimento..."
          value={testimonial}
          onChange={event => setTestimonial(event.target.value)}
        />
      </div>

      <Button type="submit" isActive>
        Criar depoimento
      </Button>
    </form>
  );
}

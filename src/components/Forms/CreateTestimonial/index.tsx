import { FormEvent, useState } from 'react';

import { Input } from '../Input';

type Testimonial = {
  githubUser: string;
  testimonial: string;
};

type CreateTestimonialFormProps = {
  testimonials: Testimonial[];
  setTestimonials(testimonials: Testimonial[]): void;
};

export function CreateTestimonialForm({
  testimonials,
  setTestimonials,
}: CreateTestimonialFormProps) {
  const [githubUser, setGithubUser] = useState('');
  const [testimonial, setTestimonial] = useState('');

  function handleCreateTestimonial(event: FormEvent) {
    event.preventDefault();

    if (githubUser.length > 0 && testimonial.length > 0) {
      const newTestimonial = {
        id: new Date().toISOString(),
        githubUser,
        testimonial,
      };

      setTestimonials([...testimonials, newTestimonial]);

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
        <Input
          placeholder="Digite seu depoimento..."
          name="testimonial"
          aria-label="Digite seu depoimento..."
          value={testimonial}
          onChange={event => setTestimonial(event.target.value)}
        />
      </div>

      <button type="submit">Criar depoimento</button>
    </form>
  );
}

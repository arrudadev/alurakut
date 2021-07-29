import { createContext, ReactNode, useState } from 'react';

type Testimonial = {
  id: string;
  githubUser: string;
  name: string;
  text: string;
};

type TestimonialContextProps = {
  testimonials: Testimonial[];
  createTestimonial: (testimonial: Testimonial) => void;
};

type TestimonialContextProviderProps = {
  children: ReactNode;
};

export const TestimonialContext = createContext({} as TestimonialContextProps);

export function TestimonialContextProvider({
  children,
}: TestimonialContextProviderProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: '1',
      githubUser: 'monteiro-alexandre',
      name: 'Alexandre Monteiro',
      text: 'Depoimento 1',
    },
    {
      id: '2',
      githubUser: 'monteiro-alexandre',
      name: 'Alexandre Monteiro',
      text: 'Depoimento 2',
    },
    {
      id: '3',
      githubUser: 'monteiro-alexandre',
      name: 'Alexandre Monteiro',
      text: 'Depoimento 3',
    },
  ]);

  function createTestimonial(testimonial: Testimonial) {
    setTestimonials([...testimonials, testimonial]);
  }

  return (
    <TestimonialContext.Provider value={{ testimonials, createTestimonial }}>
      {children}
    </TestimonialContext.Provider>
  );
}

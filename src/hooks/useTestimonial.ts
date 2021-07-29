import { useContext } from 'react';

import { TestimonialContext } from '../contexts/TestimonialContext';

export function useTestimonial() {
  const context = useContext(TestimonialContext);

  return context;
}

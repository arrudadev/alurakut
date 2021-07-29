import { useTestimonial } from '../../hooks/useTestimonial';

import { Wrapper } from './styles';

type TestimonialsProps = {
  githubUser: string;
};

export function Testimonials({ githubUser }: TestimonialsProps) {
  const { testimonials } = useTestimonial();

  return (
    <Wrapper>
      <h2 className="subTitle">Depoimentos de {githubUser}</h2>
      <ul>
        {testimonials.map((testimonial, index) => (
          <li key={index}>
            <img
              src={`https://github.com/${testimonial.githubUser}.png`}
              alt=""
            />
            <div>
              <div>
                <span>{testimonial.name}</span>
              </div>
              <p>{testimonial.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <a href="#" className="see-all">
        Ver todos
      </a>
    </Wrapper>
  );
}

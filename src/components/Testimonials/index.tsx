import { Wrapper } from './styles';

type TestimonialsProps = {
  githubUser: string;
};

type Testimonial = {
  githubUser: string;
  name: string;
  publishDate: string;
  text: string;
};

export function Testimonials({ githubUser }: TestimonialsProps) {
  const testimonials = [
    {
      githubUser: 'monteiro-alexandre',
      name: 'Alexandre Monteiro',
      publishDate: '22 jul, 21',
      text: 'Depoimento 1',
    },
    {
      githubUser: 'monteiro-alexandre',
      name: 'Alexandre Monteiro',
      publishDate: '22 jul, 21',
      text: 'Depoimento 2',
    },
    {
      githubUser: 'monteiro-alexandre',
      name: 'Alexandre Monteiro',
      publishDate: '22 jul, 21',
      text: 'Depoimento 3',
    },
  ] as Testimonial[];

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
                <time> - {testimonial.publishDate}</time>
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

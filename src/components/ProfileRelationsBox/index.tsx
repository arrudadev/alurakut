import { Wrapper } from './styles';

type ProfileRelationsBoxProps = {
  title: string;
  items: {
    id: string;
    image: string;
    name: string;
  }[];
};

export function ProfileRelationsBox({
  title,
  items,
}: ProfileRelationsBoxProps) {
  return (
    <Wrapper>
      <h2 className="smallTitle">
        {title} ({items.length})
      </h2>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              <a href={`/users/${item.name}`}>
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}

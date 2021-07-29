import { IconList, IconTitle, IconWrapper } from './styles';

export function IconSet() {
  const profileItems = [
    { name: 'Recados', slug: 'recados', icon: 'book' },
    { name: 'Fotos', slug: 'fotos', icon: 'camera' },
    { name: 'Videos', slug: 'videos', icon: 'video-camera' },
    { name: 'Fãs', slug: 'fas', icon: 'star' },
    { name: 'Mensagens', slug: 'mensagens', icon: 'email' },
  ];

  const profileStatusItems = [
    { name: 'Confiável', slug: 'confiavel', icon: 'smile' },
    { name: 'Legal', slug: 'legal', icon: 'cool' },
    { name: 'Sexy', slug: 'sexy', icon: 'heart' },
  ];

  return (
    <IconList>
      {profileItems.map(({ name, slug, icon }) => (
        <li key={`orkut__icon_set__${slug}`}>
          <IconTitle style={{ gridArea: 'title' }}>{name}</IconTitle>
          <IconWrapper style={{ gridArea: 'icon' }}>
            <img
              key={`orkut__icon_set__${slug}_img`}
              src={`/${icon}.svg`}
              alt={name}
              style={{ marginRight: '7px' }}
            />
            0
          </IconWrapper>
        </li>
      ))}

      {profileStatusItems.map(({ name, slug, icon }) => {
        const total = 2;
        return (
          <li key={`orkut__icon_set__${slug}`}>
            <IconTitle style={{ gridArea: 'title' }}>{name}</IconTitle>
            <IconWrapper style={{ gridArea: 'icon' }}>
              {[0, 1, 2].map((_, index) => {
                const isNotTheLastIconOfTheCurrentProfileStatus =
                  index <= total - 1;
                return (
                  <img
                    key={`orkut__icon_set__${slug}_img_${index}`}
                    src={`/${icon}.svg`}
                    style={{
                      marginRight: '2px',
                      opacity: isNotTheLastIconOfTheCurrentProfileStatus
                        ? 1
                        : '0.5',
                    }}
                    alt={name}
                  />
                );
              })}
            </IconWrapper>
          </li>
        );
      })}
    </IconList>
  );
}

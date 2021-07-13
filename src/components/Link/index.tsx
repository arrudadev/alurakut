import { ReactNode } from 'react';

import NextLink, { LinkProps as NextLinkProps } from 'next/link';

type LinkProps = NextLinkProps & {
  children: ReactNode;
};

export function Link({ href, children, ...props }: LinkProps) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>{children}</a>
    </NextLink>
  );
}

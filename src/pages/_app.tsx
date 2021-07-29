import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';

import { CommunityContextProvider } from '../contexts/CommunityContext';
import { TestimonialContextProvider } from '../contexts/TestimonialContext';
import { GlobalStyle } from '../styles/global';
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CommunityContextProvider>
        <TestimonialContextProvider>
          <Component {...pageProps} />
        </TestimonialContextProvider>
      </CommunityContextProvider>
    </ThemeProvider>
  );
}

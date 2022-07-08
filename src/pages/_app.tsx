import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

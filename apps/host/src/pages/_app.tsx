import '../app.styled/rootColor.css';
import '../app.styled/reset.css';
import '../app.styled/common.css';
import React, { ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import AppReactQueryProvider from "../app.components/provider/AppReactQueryProvider";
import AppLayout from "../app.feature/layout/AppLayout";


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode,
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <AppReactQueryProvider pageProps={pageProps}>
      <Head>
        <title>PROJECT -ART</title>
      </Head>
      <AppLayout>{getLayout(<Component {...pageProps} />)}</AppLayout>
    </AppReactQueryProvider>
  );
};

App.getInitialProps = async ({ Component, ctx }: any) => {
  let pageGetInitialProps = {};

  /** sever side scope **/
  if (ctx.req) {
    ctx.res.setHeader('Cache-Control', 'private, no-cache, must-revalidate');
  }

  if (Component.getInitialProps) {
    pageGetInitialProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps: {
      ...pageGetInitialProps,
    },
  };
};

export default App;

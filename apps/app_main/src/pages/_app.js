import '../app.styled/reset.css';
import Header from "@pkg/layout/src/Header";

export default function App({ Component, pageProps }) {
  console.log(pageProps)
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageGetInitialProps = {};

  if (Component.getInitialProps) {
    pageGetInitialProps = await Component.getInitialProps(ctx);
    console.log(pageGetInitialProps)
  }

  return {
    pageProps: {
      appName: 'main',
      ...pageGetInitialProps,
    },
  };
};
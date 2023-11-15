import '../app.styled/reset.css';

export default function App({ Component, pageProps }) {
  console.log(pageProps)
  return (
    <>
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
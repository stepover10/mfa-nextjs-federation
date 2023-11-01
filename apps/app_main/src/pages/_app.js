import Header from "layout/src/Header"
import '../app.styled/fonts.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
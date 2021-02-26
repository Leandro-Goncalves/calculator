import { ScreenProvider } from '../contexts/ScreenContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <ScreenProvider>
      <Component {...pageProps} />
    </ScreenProvider>
  )
}

export default MyApp

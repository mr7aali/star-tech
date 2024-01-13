import Providers from '@/lib/Providers'
import '@/styles/globals.css'



export default function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <Providers>
      <Component {...pageProps} />
    </Providers>

  )
}
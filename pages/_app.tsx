import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../store'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
    <Component className="h-full pt-12 bg-white md:h-screen dark:bg-black" {...pageProps} />
  </Provider>
  )

}

export default MyApp

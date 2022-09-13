import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../store'
import { Provider } from 'react-redux'
import { ThemeProvider } from '../context/ThemeContext'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider className="h-screen pt-12 bg-white md:h-screen dark:bg-black">

  <Provider store={store}>

      <Component {...pageProps} />
  </Provider>
  </ThemeProvider>

  )

}

export default MyApp

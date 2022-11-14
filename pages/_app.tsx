import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from '../context/ThemeContext'
import { store } from '../store'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider className="h-screen pt-12 bg-white dark:bg-black md:h-screen">
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </SessionProvider>
  )

}

export default MyApp

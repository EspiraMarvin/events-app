import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from '../context/ThemeContext'
import { store } from '../store'
import { GoogleOAuthProvider } from '@react-oauth/google';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_CLIENT_ID}`}>
      <ThemeProvider className="h-screen pt-12 bg-white md:h-screen dark:bg-black">
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  )

}

export default MyApp

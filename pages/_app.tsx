import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { AuthProvider } from "../context/AuthContext"
import { ThemeProvider } from "../context/ThemeContext"

import { store } from "../store/store"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <SessionProvider session={pageProps.session}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </SessionProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp

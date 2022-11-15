import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { ThemeProvider } from "../context/ThemeContext"
import { store } from "../store"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp

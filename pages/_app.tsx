import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "../store/store"
import { AuthProvider } from "../context/AuthContext"
import { ThemeProvider } from "../context/ThemeContext"
import { SessionProvider } from "next-auth/react"
import { useRouter } from "next/router"
import ProtectedRoute from "../components/ProtectedRoute"

const noAuthRequired = ["/login", "/register"]

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <AuthProvider>
      <ThemeProvider>
        <SessionProvider session={pageProps.session}>
          <Provider store={store}>
            {noAuthRequired.includes(router.pathname) && (
              <Component {...pageProps} />
            )}
            {!noAuthRequired.includes(router.pathname) && (
              <ProtectedRoute>
                <Component {...pageProps} />
              </ProtectedRoute>
            )}
          </Provider>
        </SessionProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp

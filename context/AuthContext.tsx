import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { getCookie, deleteCookie, setCookie } from "cookies-next"
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth"
import { auth } from "../firebase/firebase"

interface User {
  uid?: string
  displayName?: string
  email?: string
  avatar?: string
  photoURL?: string
}

interface AuthContextInterface {
  currentUser: User | null | {}
  token?: string
  isAuthenticated: boolean
  signUpUser: (email: string, password: string) => void
  loginUser: (email: string, password: string) => any
  signInGoogle: () => any
  signInGithub: () => any
  logoutUser: () => void
}

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<User | string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  console.log("currentUser", currentUser)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setCurrentUser({
          uid: user?.uid,
          email: user?.email,
          displayName: user?.displayName,
          avatar: user?.photoURL,
        })
        setIsAuthenticated(true)
      } else {
        setCurrentUser(null)
        setIsAuthenticated(false)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signUpUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInGoogle = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  const signInGithub = () => {
    const provider = new GithubAuthProvider()
    return signInWithPopup(auth, provider)
  }

  const logoutUser = async () => {
    setCurrentUser(null)
    await signOut(auth)
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentUser,
        signUpUser,
        loginUser,
        logoutUser,
        signInGoogle,
        signInGithub,
      }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  )
}

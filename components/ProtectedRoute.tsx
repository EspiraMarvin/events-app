import React, { useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import { useRouter } from "next/router"

type Props = {}

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const { currentUser: user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  return <>{user ? children : null}</>
}

import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/router"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import { useDispatch } from "react-redux"
import { setCredential } from "../slices/authSlice"

type InputType = {
  email: string
  password: string
}

export default function AuthInput() {
  const [loading, setLoading] = useState<boolean>(false)
  const [email] = useState<string>("test3@gmail.com")
  const [password] = useState<string>("123pass")

  const [label, setLabel] = useState<string>("Login")
  const dispatch = useDispatch()

  const router = useRouter()

  const { register, handleSubmit } = useForm<InputType>()

  const handleRegister = () =>
    setLabel((prevLab) => {
      if (prevLab === "Login") {
        return "Register"
      } else {
        return "Login"
      }
    })

  const onSubmit: SubmitHandler<InputType> = async ({ email, password }) => {
    if (label === "Login") {
      await LoginUser(email, password)
    } else {
      await registerUser(email, password)
    }
  }

  const LoginUser = async (email: string, password: string) => {
    try {
      const data = { email, password }
      setLoading(true)
      const res = await axios.post(`http://localhost:5000/api/auth/login`, data)

      dispatch(setCredential(res.data.accessToken))
      if (res) router.push("/events")
    } catch (error: any) {
      toast.error(error?.response?.data?.message, {
        id: Math.random().toString(),
      })
      setLoading(false)
    }
  }

  const registerUser = async (email: string, password: string) => {
    try {
      setLoading(true)
      const data = { email, password }

      const res = await axios.post(
        `http://localhost:5000/api/auth/register`,
        data
      )
      if (res) router.replace("/events")
    } catch (error: any) {
      toast.error(error?.response?.data?.message, {
        id: Math.random().toString(),
      })
      setLoading(false)
    }
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col max-w-4xl space-y-4 min-w-fit md:w-80">
          <input
            type="text"
            className="authInput"
            placeholder="Email Address"
            value={email}
            {...register("email", { required: true })}
          />
          <input
            type="password"
            className="authInput"
            placeholder="Password"
            value={password}
            {...register("password", { required: true })}
          />
        </div>

        <button
          type="submit"
          className="border-[#2424242] mt-10 flex w-full items-center justify-center rounded-lg bg-[#0EA5E9] py-1.5 font-medium italic tracking-wider text-white xl:py-2"
        >
          {loading ? "Loading..." : label}
        </button>
      </form>
      <div className="pr-2 mt-4 text-right text-white">
        <span className="font-light">
          {label === "Login" ? "No Account yet?" : "Have an Account?"}{" "}
        </span>{" "}
        <span
          className="font-bold text-white cursor-pointer hover:underline"
          onClick={handleRegister}
        >
          {label === "Login" ? "Register" : "Login"}
        </span>
      </div>
      <Toaster position="bottom-center" />
    </div>
  )
}

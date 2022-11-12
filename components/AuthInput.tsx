import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/router"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import { useDispatch } from "react-redux"
import { setCredential } from "../slices/authSlice"
import { booleanFilter } from "../utils/booleanFilter"

type InputType = {
  email: string
  password: string
}

export default function AuthInput() {
  const [loading, setLoading] = useState<boolean>(false)

  const [label, setLabel] = useState<string>("Login")
  const dispatch = useDispatch()

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>()

  const handleRegister = () =>
    setLabel((prevLab) => {
      if (prevLab === "Login") {
        return "Register"
      } else {
        return "Login"
      }
    })

  console.log("errors", errors)

  const onSubmit: SubmitHandler<InputType> = async ({ email, password }) => {
    if (label === "Login") {
      await LoginUser(email, password)
    } else {
      await registerUser(email, password)
    }
  }

  const toastMessage = (message: string, type: any) => {
    if (type === "error")
      toast.error(`${message}`, {
        id: Math.random().toString(),
      })
    if (type === "success")
      toast.success(`${message}`, {
        id: Math.random().toString(),
      })
  }

  const LoginUser = async (email: string, password: string) => {
    try {
      const data = { email, password }
      setLoading(true)
      const res = await axios.post(`http://localhost:5000/api/auth/login`, data)

      dispatch(setCredential(res.data.accessToken))
      if (res) router.push("/events")
    } catch (error: any) {
      error?.response?.data?.message
        ? toast.error(error?.response?.data?.message, {
            id: Math.random().toString(),
          })
        : toastMessage("Server Error", "error")
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
    <div className="p-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col max-w-4xl space-y-4 min-w-fit md:w-80">
          <input
            type="text"
            className="authInput"
            placeholder="Email Address"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="px-1 text-[13px] font-light text-orange-500">
              This field is required !
            </span>
          )}
          <input
            type="password"
            className="authInput"
            placeholder="Password"
            {...register("password", { required: true, min: 4, max: 60 })}
          />
          {errors.password && (
            <span className="px-1 text-[13px] font-light text-orange-500">
              Your password must contain between 4 and 60 characters.
            </span>
          )}
        </div>

        <button
          type="submit"
          className={booleanFilter(
            "border-[#2424242] flex w-full items-center justify-center rounded-lg bg-[#0EA5E9] py-1.5 font-medium italic tracking-wider text-white xl:py-2",
            errors.password && errors.email ? "" : "mt-10"
          )}
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

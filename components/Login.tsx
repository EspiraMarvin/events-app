// import { GoogleLogin } from '@react-oauth/google';
// import { useDispatch } from 'react-redux';
// import { signInUser } from "../slices/userSlice"
import AuthInput from "./AuthInput"

export default function Login() {
  // const dispatch = useDispatch()

  // const onSuccess = (credentialResponse: any) => {
  //   console.log(credentialResponse)
  //   // const { credential } = credentialResponse
  //   dispatch(signInUser(credentialResponse))
  // }

  // const onError = () => {
  // console.log("Login Failed")
  // }

  return (
    <div className="flex items-center justify-center h-screen" id="login-btn">
      <div className="z-50 flex flex-col items-center justify-center space-y-14 md:space-y-0">
        <div className="text-2xl font-bold text-white top-10 md:absolute md:top-44 md:text-4xl 2xl:text-5xl">
          All Events Around You
        </div>
        <AuthInput />
        {/* <GoogleLogin
          onSuccess={onSuccess}
          onError={onError}
          auto_select
          size="large"
        /> */}
      </div>
    </div>
  )
}

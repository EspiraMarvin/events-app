import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { signInUser } from '../slices/userSlice'
import  Background from './Background'

export default function Login() {
    const dispatch = useDispatch()
    
    const onSuccess = (credentialResponse: any) => {
        console.log(credentialResponse);
        // const { credential } = credentialResponse
        dispatch(signInUser(credentialResponse))
    }

    const onError = () => {
        console.log('Login Failed');
    }

  return (
    <div className="flex items-center justify-center h-screen" id="login-btn">
        <Background />
        <div className="z-50 flex flex-col items-center justify-center grid-cols-1 space-y-10">
            <span className='text-3xl font-bold text-white md:absolute md:top-44 md:text-4xl 2xl:text-5xl'>
                All Events Around You
            </span>
        <GoogleLogin
            onSuccess={onSuccess}
            onError={onError}
            auto_select
            size="large"
        />
        </div>
       
    </div>
  )
}
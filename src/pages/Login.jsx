import React from 'react'
import SubmitButton from '../components/SubmitButton'
import TextInput from '../components/TextInput'
import PasswordInput from '../components/PasswordInput'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
  return (
    <div className='flex min-w-screen min-h-screen justify-center items-center'>
        <div className='min-h-screen p-6 min-w-screen md:min-w-md shadow-lg shadow-black/20 flex flex-col'>
            <div className='flex flex-col gap-8 w-full min-h-30'>
                <div className='flex flex-col gap-1.5 font-bold'>
                    <h1 className='text-3xl max-w-3xs'>Signin to your PopX account</h1>
                    <p className='text-muted-foreground text-base max-w-2xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,</p>
                </div>
                <div className='flex flex-col gap-4 mb-4 text-purple-600'>
                    <TextInput
                      label = 'Email Address'
                      type = 'email'
                      placeholder = 'Enter email address'
                      required
                    />
                    <PasswordInput
                      label = 'Password'
                      placeholder = 'Enter password'
                      required
                    />
                    <SubmitButton onClick={() => {navigate('/profile')}} className='mt-2 w-full py-5 bg-violet-600 hover:bg-violet-700 rounded-sm'>Login</SubmitButton>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Login
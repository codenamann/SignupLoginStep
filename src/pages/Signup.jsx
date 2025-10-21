import React from 'react'
import TextInput from '../components/TextInput'
import PasswordInput from '../components/PasswordInput'
import SubmitButton from '../components/SubmitButton'
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group'
import RadioInput from '../components/RadioInput'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate();
  return (
    <div className='flex min-w-screen min-h-screen justify-center items-center'>
        <div className='min-h-screen p-6 min-w-screen md:min-w-md shadow-lg shadow-black/20 flex flex-col'>
            <div className='flex flex-1 flex-col gap-8 w-full min-h-30'>
                <div className='flex flex-col gap-1.5'>
                    <h1 className='text-3xl max-w-3xs'>Create your <br />PopX account</h1>
                </div>
                <div className='flex flex-col justify-start flex-1 gap-4 mb-4 text-purple-600'>
                    <TextInput
                    label = 'Full Name'
                    type = 'text'
                    placeholder = 'Enter full name'
                    required
                    />
                    <TextInput
                    label = 'Phone number'
                    type = 'number'
                    placeholder = 'Enter full name'
                    required
                    />
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
                    <TextInput
                    label = 'Company name'
                    type = 'text'
                    placeholder = 'Enter company name'
                    />
                    <RadioInput heading='Are you a business?' required items='choice' />
                    <SubmitButton onClick={() => {navigate('/profile')}} className=' mt-auto w-full py-5 bg-violet-600 hover:bg-violet-700 rounded-sm'>Create Account</SubmitButton>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Signup
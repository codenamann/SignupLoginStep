import React from 'react'
import { Button } from '../components/ui/button'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
    const navigate = useNavigate();
  return (
    <div className='flex min-w-screen min-h-screen justify-center items-center'>
        <div className='min-h-screen p-6 min-w-screen md:min-w-md shadow-lg shadow-black/20 flex flex-col'>
            <div className='flex flex-1'></div>
            <div className='flex flex-col gap-8 w-full min-h-30 font-bold'>
                <div className='flex flex-col gap-1.5'>
                    <h1 className='text-3xl'>Welcome to PopX</h1>
                    <p className='text-muted-foreground text-base max-w-2xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi,</p>
                </div>
                <div className='flex flex-col gap-2 mb-4 font-bold'>
                    <Button onClick={() => {navigate('/signup')}} className='w-full py-5 bg-violet-600 hover:bg-violet-700 rounded-sm'>Create Account</Button>
                    <Button onClick={() => {navigate('/login')}} className='w-full py-5 bg-violet-500/50 hover:bg-violet-500/60 rounded-sm text-black'>Already Registered? Login</Button>
                </div>
                
            </div>
        </div>  
    </div>
  )
}

export default Landing
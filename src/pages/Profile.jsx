import React from 'react'
import SubmitButton from '../components/SubmitButton'
import TextInput from '../components/TextInput'
import PasswordInput from '../components/PasswordInput'
import { ProfileInfo } from '../components/ProfileInfo'

const Profile = () => {
  return (
    <div className='flex max-w-screen min-h-screen justify-center items-center'>
        <div className='min-h-screen max-w-screen md:max-w-md shadow-lg shadow-black/20 flex flex-col'>
            <div className='flex flex-col gap-1.5 font-semibold shadow-xl p-6'>
                <h1 className='text-xl text-gray-700 '>Account Settings</h1>
            </div>
            <div className='p-6 flex flex-col w-full min-h-30 bg-gray-50 flex-1'>
                <ProfileInfo
                    name="Naman Tiwari"
                    email="naman@example.com"
                    image="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
                />
                <div className='border-dashed border-b-2 py-6 '>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolorum et illo aperiam. Nesciunt molestias dolor provident excepturi officiis ex culpa voluptatem corporis fuga enim soluta, iure dignissimos minima dolorem.</p>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Profile
import React from 'react'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

const RadioInput = ({heading, required, items}) => {
  return (
    <div>
        <div className='flex'>
            <p className='font-medium text-black'>{heading}</p>
            {required && <span className="text-destructive ml-1">*</span>}
        </div>
        <div className='mt-2'>
            {items == 'choice' && 
            <RadioGroup className={'flex'}>
                <div className='flex'>
                    <RadioGroupItem value="yes" className=' border-gray-400 text-purple-600 data-[state=checked]:border-purple-600'/>
                    <Label className='ml-2 text-black'>Yes</Label>
                </div>
                <div className='flex'>
                    <RadioGroupItem value="no" className='border-gray-400 text-purple-600 data-[state=checked]:border-purple-600'/>
                    <Label className='ml-2 text-black'>No</Label>
                </div>
            </RadioGroup>}
        </div>
    </div>
  )
}

export default RadioInput
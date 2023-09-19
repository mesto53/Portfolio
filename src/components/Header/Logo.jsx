import React from 'react'
import Resume from './Resume'


export default function Logo() {
  return (
    <div className='flex items-center gap-2'>
      <div className='bg-white text-black rounded-full w-[35px] h-[35px] flex items-center justify-center'>
        <b>MA</b>
      </div>
      <div>
        <h2 className='text-white'>Mohammad Almestrah</h2>
        <Resume/>
      </div>
    </div>

  )
}

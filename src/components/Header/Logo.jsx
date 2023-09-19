import React from 'react'
import Resume from './Resume'


export default function Logo() {
  return (
    <div className='flex itmes-center gap-2'>
            <span className='w-[35px] h-[35px] mt-3 bg-white text-black font-[500]
              rounded-full flex items-center justify-center'><b>MA</b></span>
            <div className='leading-[20px]'>
              <h2 className='text-white mb-2'>Mohammad Almestrah</h2>
              <Resume/>
            </div>
    </div>
  )
}

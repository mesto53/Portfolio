import React from 'react'

export default function Socail() {
    return (
        <div className='flex items-center gap-9 mt-14'>
            <span className='text-white text-[25px] font-[600]'>Connect</span>
            <span><a title='github' target='_blank' rel="noreferrer"  href='https://github.com/mesto53' className='text-white text-[30px] font-[600]'><i className='ri-github-line'></i></a></span>
            <span><a title='LinkedIn' target='_blank' rel="noreferrer"  href='https://www.linkedin.com/in/mohammad-almestrah-662392254' className='text-white text-[30px] font-[600] '><i className='ri-linkedin-box-fill'></i></a></span>
            <span><a title='instagram' target='_blank' rel="noreferrer"  href='https://www.instagram.com/you_can_code_2000/' className='text-white text-[30px] font-[600]'><i className="ri-instagram-fill"></i></a></span>
        </div>
    )
}

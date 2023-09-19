import React from 'react'
import backendImg from '../../../assets/images/backend.png';


export default function Serv(props) {
    return (
        <>
            {props.way ? (<div className='mt-6 sm:mt-0 sm:mb-12'>
                <div className='flex items-center flex-col sm:flex-row'>
                    <div className='flex justify-end w-full mx-auto items-center'>
                        <div className='w-full sm:w-1/2 sm:pl-8'>
                            <div data-aos='fade-left' data-aos-duration='1200' className='bg-white p-4 rounded group shadow 
                cursor-pointer ease-in duration-150'>
                                <h3 className='flex items-center text-[20px] '><img className='h-[40px] w-[40px] items-center ml-10 mr-5' src={props.image} alt={props.desc}></img>{props.desc}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
        transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                        <figure><img src={backendImg} alt={props.desc} /></figure>
                    </div>
                </div>
            </div> ): (<div className='mt-6 sm:mt-0 sm:mb-12'>
                <div className='flex items-center flex-col sm:flex-row'>
                    <div className='flex justify-start w-full mx-auto items-center'>
                        <div className='w-full sm:w-1/2 sm:pr-8'>
                            <div data-aos='fade-right' data-aos-duration='1200' className=' p-4 bg-white rounded group shadow 
            cursor-pointer ease-in duration-150'>
                                <h3 className='flex items-center text-[20px]'><img className='h-[40px] w-[40px] items-center ml-16 mr-7' src={props.image} alt={props.desc}></img>{props.desc}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
    transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center'>
                        <figure><img src={backendImg} alt={props.desc} /></figure>
                    </div>
                </div>
            </div>)}
        
        </>

    )
}

import React from 'react'
import Socail from '../UI/Common/Socail';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  return (
    <footer className='bg-[#12141e] pt-12'>
      <div className='container'>
        <div className='sm:flex items-center justify-between md:gap-8'>
          <div className='w-full sm:w-1/2'>
            <h2 className='text-[26px] leading-10 mb-6 text-white font-[600] md:text-[2rem]'>
              Want to give me an opportunity?
            </h2>
              <button className='flex items-center gap-2 text-white font-[600] border border-solid
            border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white
            hover:font-[500] ease-in duration-100' onClick={() => navigate('contact')}>
                <i className='ri-mail-line'></i>
                Hire me
              </button>
          </div>

          <div className='w-full sm:w-1/2'>
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0 text-[20px]'>
              "Every great developer you know got there by solving problems which they were unqualified to solve until they actually did it."
            </p>

            <div className='flex items-center gap-4 flex-wrap md:gap-8'>
              <Socail />
            </div>
          </div>
        </div>
      </div>

      {/* perosnal footer branding */}
      <div className='bg-[#1b1e29] py-3 mt-14'>
        <div className='container'>
          <div className='flex items-center justify-center sm:justify-between'>
            <div className='hidden sm:block'>
              <div className='flex items-center gap-[10px]'>
                <span className='w-[35px] h-[35px]  bg-white text-black text-[18px] font-[500]
                     rounded-full flex items-center justify-center'>MA</span>

                <div className='leading-[20px]'>
                  <h2 className='text-xl text-white font-[700]'>Mohammad Almestrah</h2>
                </div>
              </div>
            </div>
            <div>
              <p className='text-gray-400 text-[14px]'>Copyright &copy; {year} <br /><b>Mohammad Almestrah</b> </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;
import React from 'react';
import mesto from '../../../assets/images/mesto.png';
import CountUp from 'react-countup';
import Socail from '../Common/Socail';
import containerStyle from '../style/Styles';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <div className='container pt-14' style={containerStyle}>
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                {/* her left start */}
                <div className='w-full md:basis-1/2'>
                    <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[600]
                        text-[25px]'>Hi,
                    </h5>

                    <h1 data-aos='fade-right' data-aos-duration='1500' className='text-headingColor font-[800]
                        text-[1.8rem] sm-text[40px] leading-[35px] sm:leading-[46px] mt-5'>I'm Mohammad Almestrah <br /> A CS Engineering Graduate
                    </h1>

                    <div data-aos='fade-right' data-aos-duration='1500' data-aos-delay='150' className='flex items-center gap-6 mt-7'>
                        <button className='flex items-center gap-2 bg-black text-white font-[600] border border-solid
             py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor ease-in duration-100' onClick={() => navigate('contact')}><i className='ri-mall-line'></i>Hire Me</button>
                    </div>

                    <p data-aos='fade-left' data-aos-duration='1500' className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'>
                        <span className='ri-apps-2-line'></span>
                        <b>I am a software engineering aspirant who is seeking to find the opportunity to up skill in a hardworking and competitive environment as well as be
                            motivated by the company to do the best for the
                            sake of helping myself and the company advance in the software engineering industry by becoming an asset.</b>
                    </p>
                    <Socail />
                </div>
                {/* hero left end */}

                {/* hero img */}
                <div className='basis-1/3 mt-10 sm:mt-0'>
                    <img  className='flex items-center justify-center ' src={mesto} alt='mesto image' />
                </div>
                {/* hero img end */}

                {/* hero image content right */}
                <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col
                        md:justify-end md:text-end'>
                    <div className='mb-10'>
                        <span><a href='#reactjs' className='text-smallTextColor text-[80px] '><i className="ri-reactjs-fill"></i></a></span>
                        <CountUp className='text-headingColor font-[600] bold text-[20px]' start={0} end={60} duration={3} suffix='%' />
                    </div>
                    <div className='mb-10'>
                        <span><a href='#javascript' className='text-smallTextColor text-[80px]'><i className="ri-javascript-fill"></i></a></span>
                        <CountUp className='text-headingColor font-[600] bold text-[20px]' start={0} end={70} duration={3} suffix='%' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

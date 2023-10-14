import React from 'react';
import java from '../../../assets/images/java.svg';
import html from '../../../assets/images/html.svg';
import javascript from '../../../assets/images/javascript.svg';
import react from '../../../assets/images/react.svg';
import pyImage from '../../../assets/images/pyImage.png';
import C from '../../../assets/images/c#.png';
import net from '../../../assets/images/net.jpeg';
import Serv from './Serv';
import php from '../../../assets/images/php.png'
import laravel from '../../../assets/images/laravel.jpeg'
import angular from '../../../assets/images/angular.jpeg'





const Services = () => {
    return (
        <section id="services">
            <div className='container lg:pt-5'>
                <div className='text-center'>
                    <h2 className='text-headingColor font-[800] text-[2.4rem] mt-10'>Skill Set</h2>
                    <p className='lg:max-w-[600px] lg:max-auto justify-between text-headingcolor font-[500] text-[16px] leading-7 '></p>
                </div>

                <div className='flex flex-col justify-center sm:py-12'>
                    <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
                        <div className='relative text-gray-700 antialiased text-sm font-semibold'>
                            {/* vertical line  */}
                            <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2'></div>
                            <Serv image={java} desc='Java' way={0}/>
                            <Serv image={html} desc='HTML & CSS' way={1} />
                            <Serv image={javascript} desc='Javascript' way={0}/>
                            <Serv image={react} desc='ReactJs' way={1} />
                            <Serv image={react} desc='React Native' way={0}/>
                            <Serv image={C} desc='C Sharp' way={1} />
                            <Serv image={pyImage} desc='Python' way={0}/>
                            <Serv image={net} desc='Asp.Net' way={1} />
                            <Serv image={php} desc='PHP' way={0}/>
                            <Serv image={angular} desc='Angular' way={1}/>
                            <Serv image={laravel} desc='Laravel' way={0}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
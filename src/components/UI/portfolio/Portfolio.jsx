import React, { useState, useEffect } from 'react'
import data from '../../../data/portfolioData'
import containerStyle from '../style/Styles';

const Portfolio = () => {
    const [nextItems, setNextitems] = useState(3);
    const [portfolios, setPortfolios] = useState(data);
    const [selectTab, setSelectTab] = useState('all');

    const loadMoreHandler = () => {
        if(nextItems+3 > portfolios.length){
              const minus = portfolios.length-nextItems;
              setNextitems(prev => prev +minus);
        }else{
           setNextitems(prev => prev + 3)
        }
        
    }
    const Menimize = () => {
        setNextitems(3)
    }
    useEffect(() => {
        if (selectTab === 'all') {
            setPortfolios(data);
        }
        if (selectTab === 'web-design') {
            const filteredData = data.filter(item => item.category === 'Web Design')
            setPortfolios(filteredData);
        }
        if (selectTab === 'Mobile') {
            const filteredData = data.filter(item => item.category === 'Mobile')
            setPortfolios(filteredData);
        }
        if (selectTab === 'Database') {
            const filteredData = data.filter(item => item.category === 'Database')
            setPortfolios(filteredData);
        }
    }, [selectTab])

    return (
        <div style={containerStyle}>
            <div className='container'>
                {/* Title & Buttons */}
                <div className='flex items-center justify-between flex-wrap'>
                    <div className='mb-7 sm:mb-0'>
                        <h3 className='text-headingColor text-[2.5rem] font-[700]'>
                            Projects
                        </h3>
                    </div>

                    <div className='flex gap-4'>
                        <button onClick={() => setSelectTab('all')} className='bg-smallTextColor bg-black text-white font-[500] gap-2 hover:bg-smallTextColor
                    ease-in duration-100 py-2 px-4 rounded-[8px]'>
                            All
                        </button>
                        <button onClick={() => setSelectTab('web-design')} className='bg-smallTextColor bg-black text-white font-[500] gap-2 hover:bg-smallTextColor
                    ease-in duration-100 py-2 px-4 rounded-[8px]'>
                            Full Stack
                        </button>
                        <button onClick={() => setSelectTab('Mobile')} className='bg-smallTextColor bg-black text-white font-[500] gap-2 hover:bg-smallTextColor
                    ease-in duration-100 py-2 px-4 rounded-[8px]'>
                            Mobile
                        </button>
                        <button onClick={() => setSelectTab('Database')} className='bg-smallTextColor bg-black text-white font-[500] gap-2 hover:bg-smallTextColor
                    ease-in duration-100 py-2 px-4 rounded-[8px]'>
                            Database
                        </button>
                    </div>
                </div>

                <div className='flex items-center gap-4 flex-wrap mt-12 '>
                    {
                        portfolios?.slice(0, nextItems).map((portfolio, index) => (
                            <div key={index} data-aos='fade-zoom-in' data-aos-delay='50' data-aos-duration='1000' className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                                <figure><img className='rounded-[8px]' src={portfolio.imgUrl} alt='' /></figure>

                                <div className='w-full h-full bg-primaryColor bg-opacity-50  top-0 left-0 z-[5] hidden group-hover:block'>
                                    <div className='w-full h-full flex items-center justify-center'>
                                        <button className='text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] 
                                        font-[500] ease-in duration-200'>  <a target='_blank' rel="noreferrer" href='https://github.com/mesto53?tab=repositories'> Details </a> </button></div>
                                    <div class="w-50 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                                        <p class="text-white text-sm">{portfolio.title}</p>
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className='text-center mt-6'>
                    {nextItems < portfolios.length && data.length > 3 && (
                        <button onClick={loadMoreHandler}
                            className='bg-smallTextColor bg-black text-white font-[500] gap-2 hover:bg-smallTextColor
                     ease-in duration-100 py-2 px-4 rounded-[8px]'>Load More</button>
                    )}
                </div>
                <div className='text-center mt-6'>
                    {nextItems === portfolios.length && (
                        <button onClick={Menimize}
                            className='bg-smallTextColor bg-black text-white font-[500] gap-2 hover:bg-smallTextColor
                     ease-in duration-100 py-2 px-4 rounded-[8px]'>Menimize</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;

import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Download from '../../assets/DL.png'
import Star from '../../assets/st.png'
import Review from '../../assets/Review.png'




const AppsDetails = () => {
    const { id } = useParams();
    const appId = parseInt(id)
    const data = useLoaderData();
    const singleApp = data.find(book => book.id === appId)
    const reviews = singleApp.reviews / 1000000;
    return (
        <div className='p-5 md:p-10'>
            <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                <div className='flex-shrink-0'>
                    <img src={singleApp.image} alt=""  className='w-full max-w-xs md:max-w-[280px] h-auto object-cover rounded-lg mx-auto md:mx-0'  />
                </div>
                <div lassName='flex-1'>
                    <div>
                        <div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-lg md:text-2xl font-semibold'>
                            <h1  >{singleApp.title}  </h1>
                            <p className='text-base md:text-lg md:ml-2' > {singleApp.description}</p>
                        </div>
                        <p className='mt-2 text-sm md:text-base'>Developed by :<span className='text-[#632EE3]' > {singleApp.companyName}</span></p>
                    </div>
                    <hr className='my-5 w-full' />

                    <div className='flex items-center sm:items-start justify-between gap-5 sm:gap-10 p-5'>

                        <div className='flex flex-col items-center'>
                            <img src={Download} alt="" className='w-10 h-10 md:w-12 md:h-12'/>
                            <p className='text-sm md:text-base mt-1'>Downloads</p>
                            <p className='text-2xl md:text-3xl font-semibold' >{singleApp.downloads}M</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={Star} alt="" className='w-10 h-10 md:w-12 md:h-12'/>
                            <p className='text-sm md:text-base mt-1' >Average Ratings</p>
                            <p className='text-2xl md:text-3xl font-semibold'  >{singleApp.ratingAvg}</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <img src={Review} alt="" className='w-10 h-10 md:w-12 md:h-12' />
                            <p className='text-sm md:text-base mt-1'>Total Reviews </p>
                            <p className='text-2xl md:text-3xl font-semibold'  >{reviews}M</p>
                        </div>

                    </div>
                    <div className='mt-5 text-center md:text-left'>
                        <button className="btn btn-active btn-primary md:w-auto ">Install Now ({singleApp.size} MB)</button>
                    </div>
                </div>
            </div>
            <hr className='my-8' />

            <div className='my-8'>
                <h1>bar chart section</h1>

            </div>

            <hr className='my-8' />

            <h1 className='text-xl md:text-2xl font-semibold mb-2'>Description</h1>
            <p className='text-sm md:text-base text-justify'>{singleApp.des}</p>
            
        </div>
    );
};

export default AppsDetails;
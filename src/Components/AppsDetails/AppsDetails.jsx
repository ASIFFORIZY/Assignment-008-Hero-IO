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
        <div className='p-20'>
            <div className='flex gap-10'>
                <div>
                    <img src={singleApp.image} alt="" className=' w-70 h-70 object-cover rounded-lg' />
                </div>
                <div className=' w-full'>
                    <div>
                        <div className='flex items-center text-2xl font-semibold'>
                            <h1  >{singleApp.title}  </h1>
                            <p> : {singleApp.description}</p>
                        </div>
                        <p className='mt-2'>Developed by <span className='text-[#632EE3]' > {singleApp.companyName}</span></p>
                    </div>
                    <hr className='mt-5' />

                    <div className='flex items-center p-5 gap-10'>

                        <div>
                            <img src={Download} alt="" />
                            <p>Downloads</p>
                            <p className='text-3xl' >{singleApp.downloads}M</p>
                        </div>
                        <div>
                            <img src={Star} alt="" />
                            <p>Average Ratings</p>
                            <p className='text-3xl'  >{singleApp.ratingAvg}</p>
                        </div>
                        <div>
                            <img src={Review} alt="" />
                            <p>Total Reviews </p>
                            <p className='text-3xl'  >{reviews}M</p>
                        </div>

                    </div>
                    <div>
                        <button className="btn btn-active btn-primary">Install Now ({singleApp.size} MB)</button>
                    </div>
                </div>
            </div>
            <hr className='my-8' />

            <div className='my-8'>
                <h1>bar chart section</h1>

            </div>

            <hr className='my-8' />

            <h1 className='text-xl font-semibold mb-2'>Description</h1>
            {singleApp.des}
        </div>
    );
};

export default AppsDetails;
import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Card/Card';

const Home = () => {
    const Data = useLoaderData();
    console.log(Data)
    return (
        <div >


            <div className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] p-6 md:p-20'>
                <div>
                    <h1 className=' text-3xl md:text-5xl  font-bold text-white text-center mb-10' >Trusted by Millions, Built for You</h1>
                </div>

                <div className='flex flex-col md:flex-row  justify-around text-center text-white gap-8 md:gap-0' >
                    <div>
                        <p>Total Downloads</p>
                        <h1 className=' text-4xl md:text-6xl font-bold' >29.6M</h1>
                        <h2>21% more than last month</h2>
                    </div >
                    <div>
                        <p>Total Reviews</p>
                        <h1 className='text-4xl md:text-6xl font-bold' >906K</h1>
                        <h2>46% more than last month</h2>
                    </div>
                    <div>
                        <p>Active Apps</p>
                        <h1 className='text-4xl md:text-6xl font-bold' >132+</h1>
                        <h2>31 more will Launch</h2>
                    </div>
                </div>
            </div>

            <div className='text-center mt-10'>
                <h1 className='text-3xl md:text-4xl font-bold' >Trending Apps</h1>
                <p className='text-sm text-[#627382] mt-3'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='card-container  mt-8 px-4' >


                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6' >

                    {
                        Data.map(data => <Card key={data.id} data={data} ></Card>)
                    }
                </div>


                <div className='text-center mt-6' >
                    <button className="btn btn-primary">Show All</button>
                </div>

            </div>





        </div>

    );
};

export default Home;
import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import Card from '../Card/Card';
import PlayStore from '../../assets/paly store.png';
import AppStore from '../../assets/app store.png';
import heroBg from '../../assets/hero.png';

const Home = () => {
    const allData = useLoaderData();
    return (
        <div >

            <div className="mt-20 text-center max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold">We Build</h1>
                <h1 className="text-3xl md:text-5xl font-bold">
                    <span className="text-[#9F62F2]">Productive</span> Apps
                </h1>
                <p className="text-[#627382] mt-5 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                    At HERO.IO, we craft innovative apps designed to make everyday
                    life simpler, smarter, and more exciting. Our goal is to turn
                    your ideas into digital experiences that truly make an impact.
                </p>

                <div className="flex flex-wrap gap-3 justify-center mt-15">
                    <a
                        href="https://play.google.com/store/games?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border px-4 py-2 rounded-md text-gray-600 hover:shadow cursor-pointer"
                    >
                        <img src={PlayStore} alt="" className="h-5" />
                        <p>Google Play</p>
                    </a>

                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border px-4 py-2 rounded-md text-gray-600 hover:shadow cursor-pointer"
                    >
                        <img src={AppStore} alt="" className="h-5" />
                        <p>App Store</p>
                    </a>
                </div>

            </div>
            <div className="flex justify-center mt-10">
                <img src={heroBg} alt="" className="w-full max-w-3xl" />
            </div>


            <div className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] p-6 md:p-20'>
                <div>
                    <h1 className=' text-3xl md:text-5xl  font-bold text-white text-center mb-10' >Trusted by Millions, Built for You</h1>
                </div>

                <div className='flex flex-col md:flex-row  justify-around text-center text-white gap-8 md:gap-0' >
                    <div>
                        <p className='text-sm' >Total Downloads</p>
                        <h1 className=' text-3xl md:text-5xl font-bold' >29.6M</h1>
                        <h2 className='text-sm' >21% more than last month</h2>
                    </div >
                    <div>
                        <p className='text-sm' >Total Reviews</p>
                        <h1 className='text-3xl md:text-5xl font-bold' >906K</h1>
                        <h2 className='text-sm' >46% more than last month</h2>
                    </div>
                    <div>
                        <p className='text-sm' >Active Apps</p>
                        <h1 className='text-3xl md:text-5xl font-bold' >132+</h1>
                        <h2 className='text-sm' >31 more will Launch</h2>
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
                        allData?.map(data => <Card key={data.id} data={data} ></Card>)
                    }
                </div>


                <div className='text-center mt-20' >
                    <NavLink  to='/apps' onClick={() => window.scrollTo(0, 0)} ><button className="btn btn-primary">Show All</button></NavLink>
                </div>

            </div>





        </div>

    );
};

export default Home;
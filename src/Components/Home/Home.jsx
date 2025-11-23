import React from 'react';

const Home = () => {
    return (
        <div className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] p-20' >
            <div>
                <h1 className='text-5xl font-bold text-white text-center mb-10' >Trusted by Millions, Built for You</h1>
            </div>

            <div className='flex justify-around text-center text-white' >
                <div>
                    <p>Total Downloads</p>
                    <h1 className='text-6xl font-bold' >29.6M</h1>
                    <h2>21% more than last month</h2>
                </div >
                <div>
                    <p>Total Reviews</p>
                    <h1 className='text-6xl font-bold' >906K</h1>
                    <h2>46% more than last month</h2>
                </div>
                <div>
                    <p>Active Apps</p>
                    <h1 className='text-6xl font-bold' >132+</h1>
                    <h2>31 more will Launch</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;
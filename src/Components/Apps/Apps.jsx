import React from 'react';
import PlayStore from '../../assets/paly store.png';
import AppStore from '../../assets/app store.png';
import heroBg from '../../assets/hero.png';
import { useLoaderData } from 'react-router';
import AllCards from '../AllCards/AllCards';

const Apps = () => {
    const publicData = useLoaderData();

    return (
        <div className="px-4 md:px-10 lg:px-16 w-full">

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

            <div className="mt-20">
                <h1 className="text-3xl md:text-5xl font-bold text-center">Our All Applications</h1>
                <p className="text-[#627382] max-w-2xl mx-auto text-center mt-5 text-sm md:text-base">
                    Explore All Apps on the Market developed by us. We code for Millions.
                </p>

                <div className="flex flex-col md:flex-row justify-between mt-10 items-center gap-4 mx-2">
                    <h1 className="font-bold text-lg md:text-xl">
                        ({publicData.length}) Apps Found
                    </h1>

                    <label className="input flex items-center gap-2 border px-4 py-2 rounded-md w-full md:w-72">
                        <svg className="h-[1.2em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            type="search"
                            required
                            className="w-full outline-none"
                            placeholder="Search"
                        />
                    </label>
                </div>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {publicData.map(appData => (
                    <AllCards key={appData.id} appData={appData} />
                ))}
            </div>
        </div>
    );
};

export default Apps;

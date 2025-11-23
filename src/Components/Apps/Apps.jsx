import React from 'react';
import PlayStore from '../../assets/paly store.png'
import AppStore from '../../assets/app store.png'
import heroBg from '../../assets/hero.png'

const Apps = () => {
    return (
        <div>
            <div className='m-15' >
                <h1 className='text-3xl md:text-5xl  font-bold  text-center ' >We Build</h1>     
                <h1 className='text-3xl md:text-5xl  font-bold  text-center' > <span className='text-[#9F62F2]' >Productive</span> Apps</h1>     
                <p  className='text-[#627382] max-w-6/12 mx-auto text-center mt-5 '>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className='flex gap-3 justify-center mt-10' >
                    <div className='flex items-center gap-2 border px-3 py-1 rounded-sm text-gray-400' ><img src={PlayStore} alt="" className='h-5'/> <p>Google Play</p></div>
                    <div className='flex items-center gap-2 border px-3 py-1 rounded-sm text-gray-400' ><img src={AppStore} alt=""  className='h-5' /> <p>App Store</p></div>
                    
                </div>                                                 
            </div>



            <div className='flex justify-center' >
                <img src={heroBg} alt=""  />
            </div>
        </div>
    );
};

export default Apps;
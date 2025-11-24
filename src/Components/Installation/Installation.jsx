import React from 'react';
import Star from '../../assets/logo.png'
import { Download, StarIcon } from 'lucide-react';


const Installation = () => {
    return (
        <div>

            <div className='text-center mt-16' >
                <h1 className='text-3xl md:text-5xl font-bold' >Your Installed Apps</h1>
                <p className='text-sm text-[#627382] mt-3'>Explore All Trending Apps on the Market developed by us</p>
            </div>


            <div  className='flex items-center justify-between mt-10 flex-wrap gap-3'  >
                <div><h1 className='font-bold text-lg md:text-xl' >1 Apps Found</h1></div>
                <div>
                    <select defaultValue="Pick a color" className="select w-40 ">
                        <option disabled={true}>Sort By Size</option>
                        <option>Low To High</option>
                        <option>High to low</option>
                    </select>
                </div>
            </div>



            <div className='bg-gray-100 p-3 mt-10 rounded-xl flex items-center justify-between gap-5 flex-wrap sm:flex-nowrap ' >
                <div className='flex items-center gap-2 min-w-0' >
                    <div><img src={Star}  alt="" className='w-16' /></div>
                    <div >
                        <div className='min-w-0'><h1 className='text-lg font-semibold truncate'>Forest</h1></div>
                        <div className='flex gap-2 lg:gap-5 items-center text-sm mt-1 flex-wrap' >
                            <div className='flex items-center gap-1 text-green-600 ' ><Download className='w-4' ></Download><h1> 9M</h1></div>
                            <div className='flex items-center gap-1 text-orange-500'> <StarIcon className='w-4' ></StarIcon><p>5</p></div>
                            <p className='text-red-500'>288 MB</p>
                        </div>
                    </div>
                </div>

                <div text-left md:text-right >
                    <button className="btn btn-success whitespace-nowrap">Uninstall</button>
                </div>
            </div>





        </div>
    );
};

export default Installation;
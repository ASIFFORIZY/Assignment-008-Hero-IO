import React from 'react';
import Star from '../../assets/star.png'
import { Download, StarIcon } from 'lucide-react';

const Card = ({ appData }) => {
    return (
        <div className="card bg-base-100 shadow-sm m-4 h-full flex flex-col">


            <div className="rounded-2xl overflow-hidden p-3">
                <img
                    src={appData.image}
                    alt={appData.title}
                    className="w-full h-48 object-cover rounded-lg"
                />
            </div>


            <div className="card-body flex flex-col flex-grow">
                <h2 className="card-title">{appData.title}</h2>

                <p className="flex-grow">{appData.description}</p>


                <div className="card-actions justify-between mt-3">
                    <div><button className=' px-3 rounded-lg bg-gray-200 text-green-600 font-semibold flex gap-1' > <Download className='w-3' ></Download> {appData.downloads}M</button></div>

                    <button className="px-3 py-1 rounded-lg bg-gray-200 text-orange-500 flex items-center gap-1 font-semibold">
                        <StarIcon className='w-4'></StarIcon>
                        {appData.ratingAvg}
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Card;

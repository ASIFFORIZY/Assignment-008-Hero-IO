import React from 'react';
import Star from '../../assets/star.png'

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
                    <button className="px-3 py-1 rounded-lg bg-gray-200 text-green-600 font-semibold">
                        {appData.downloads} M+
                    </button>

                    <button className="px-3 py-1 rounded-lg bg-gray-200 text-orange-500 flex items-center gap-1 font-semibold">
                        <img src={Star} alt="Star" className="h-3" />
                        {appData.ratingAvg}
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Card;

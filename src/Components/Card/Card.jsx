import React from 'react';
import Star from '../../assets/star.png'

const Card = ({ data }) => {
    return (
        <div className="card bg-base-100 shadow-sm m-4">
            <div className="rounded-2xl overflow-hidden p-3 ">
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-48 object-cover rounded-lg"
                />
            </div>
            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>  
                <p>{data.description}</p>
                
                <div className="card-actions justify-between mt-3">
                    <div><button className=' px-3 rounded-lg bg-gray-200 text-green-600 font-semibold' >{data.downloads} M+</button></div>
                    <div   ><button className=' px-3 rounded-lg bg-gray-200 text-orange-500 flex items-center gap-1 font-semibold' ><img src={Star} alt="Star" className='h-3' /> {data.ratingAvg}</button></div>
                </div>

                
            </div>

            
        </div>
    );
};

export default Card;

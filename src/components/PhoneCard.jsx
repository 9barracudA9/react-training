import React from 'react';
import '../data/data.js'
import {phonesData} from "../data/data";

const PhoneCard = () => {
    return (<ul>{
        phonesData.map((element) => {
            <li>
                <div className='p-4 border-2 border-black bg-blue-300 w-80 h-800 flex-col'>
                    <h1 className='font-bold text-center text-3xl mb-4'>{element.model}</h1>
                    <p className='text-xl'>{element.description}</p>
                    <div className='flex justify-between mt-10'>
                        <p className='text-green-900'>{element.ratio}</p>
                        <p>{element.price + "$"}</p>
                    </div>
                    <button
                        className='p-2 m-4 flex justify-center border-2 border-black w-28 rounded font-bold text-blue-950'>BUY
                    </button>
                </div>
            </li>
        })
    }
    </ul>);
};

export default PhoneCard;
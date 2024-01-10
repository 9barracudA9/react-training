import React from 'react';
import MainBtn from "./MainBtn";
import Btn from "./Btn";

const TodoElement = ({text, onClickActionFirst, onClickActionScnd, firstTitle, scndTitle, priorityColor}) => {
    return (
        <li className='hover: text-cyan-950 flex justify-between items-center border-2 border-gray-700 rounded-2xl py-2 px-4 w-[100%] mb-[10px] '>
            <p className=' text-white shadow-amber-100'>{text}</p>
            <Btn color={priorityColor}/>
            <div className='flex justify-between items-center gap-2 ml-[40px]'>
                <MainBtn width='w-[80px]' onClick={onClickActionFirst} text={firstTitle}/>
                <MainBtn width='w-[80px]' text={scndTitle} onClick={onClickActionScnd}/>
            </div>
        </li>
    );
};

export default TodoElement;
import React from 'react';
import MainBtn from "./MainBtn";

const TodoElement = ({text, onClickAction, onClickActionDone}) => {
    return (
        <li className='hover: text-cyan-950 flex justify-between gap-[0] items-center border-2 border-gray-700 rounded-2xl py-2 px-4 '>
            <p className=' text-white shadow-amber-100'>{text}</p>
            <div className='flex justify-between items-center gap-2 ml-[40px]'>
                <MainBtn width='w-[80px]' onClick={onClickAction} text="In Progress"/>
                <MainBtn width='w-[80px]' text="Done" onClick={onClickActionDone}/>
            </div>
        </li>
    );
};

export default TodoElement;
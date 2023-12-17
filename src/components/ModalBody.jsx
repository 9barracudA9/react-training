import React from 'react';
import MainBtn from "./MainBtn";

const ModalBody = ({number}) => {
    return (
        <div className="flex flex-col items-center justify-between">
            <h1
                className='text-[34px] text-center font-bold text-white border-b-2 border-white pb-[5px] '
            >Good Job!
            </h1>
            <p
                className='text-center text-[27px] my-10 text-white  '
            > Well done,you have invited <span className='text-[30px] text-yellow-400 font-bold'> {number} </span>people
                on your event
            </p>
            <MainBtn
                onClick={() => window.location.reload()}
                text="Ok!"/>
        </div>
    );
};

export default ModalBody;
import React from 'react';
import {quizData} from "../data/questions";

const ResultBox = ({answer, reloadQuiz}) => {
    return (
        <div
            className='m-0 m-auto border-2 border-black rounded py-2 px-4 max-w-[40%] bg-yellow-300 flex flex-col items-center justify-between'>
            <h1 className='text-2xl font-bold text-center mb-[30px] '>You finished the test!</h1>
            <p className='text-center text-xl'>You gave <span
                className='text-green-900 font-bold'>{answer}</span> correct
                answers
                of <span className='font-bold text-blue-950'>{quizData.length}</span>
            </p>
            <button
                className='py-2 px-4 text-xl border-2 border-black bg-transparent rounded my-4'
                onClick={reloadQuiz}
            >Try Again
            </button>

        </div>
    );
};

export default ResultBox;
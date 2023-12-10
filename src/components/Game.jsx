import React from 'react';


const Game = ({nextQuestion, percentage, question}) => {
    return (

        <div className='w-[500px] m-0 m-auto border-black border-2 p-4 rounded shadow-sm bg-blue-300'>
            <span style={{width: `${percentage}%`}}
                  className=' transition-1000 h-2 border-[1px] border-amber-50 block mb-3 bg-green-500'></span>
            <div className='text-2xl font-bold mb-[30px]'>{question.title}</div>
            <ul>
                {question.variants.map((text, index) => {
                    return <li key={text} className='li-element' onClick={() => nextQuestion(index)}>
                        {text}
                    </li>
                })}

            </ul>
        </div>)
};

export default Game;
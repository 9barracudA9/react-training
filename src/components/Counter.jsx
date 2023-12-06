import React, {useState} from 'react';
import Btn from "./Btn";

const Counter = () => {
    const [count, setCount] = useState(0)
    const increaseCount = () => {
        setCount((prev) => prev + 1)


    }
    const decreaseCount = () => {
        setCount((prev) => prev - 1)
    }
    return (
        <div>
            <div className='text-2xl font-bold'>{count}
            </div>
            <div>
                <Btn text='Increase' onClick={increaseCount}/>
                <Btn text='Decrease' onClick={decreaseCount}/>
            </div>

        </div>
    );
};

export default Counter;
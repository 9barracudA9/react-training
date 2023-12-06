import React, {useState} from 'react';

const Input = ({props}) => {
    const [value, setValue] = useState('')
    const showValue = (e) => {
        setValue(e.target.value)
    }
    return (
        <>
            <input
                onChange={showValue}
                value={value}
                className='py-2 px-4 border-black rounded text-xl mt-10 ml-10 '
            />
        </>
    );
};

export default Input;
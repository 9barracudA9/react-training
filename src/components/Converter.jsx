import React, {useState} from 'react';

const Converter = () => {
    const [value, setValue] = useState('0')
    const [active, setActive] = useState(false)
    const defaultCurrencies = ['UAH', 'USD', 'EUR', 'GBP']

    const onActiveToggler = () => {
        setActive((prevState) => !prevState)
        console.log(active)
    }

    return (
        <div
            className='flex flex-col items-center border-2 border-gray-700 rounded-2xl shadow-gray-600 shadow-xl bg-transparent max-w-[300px] py-2 px-4  '>
            <ul className='flex justify-center gap-[2px] items-center mb-[20px] min-w-fit '>
                {
                    defaultCurrencies.map((cur) => (
                        <li className={active ?
                            'flex border-2 border-gray-700 py-2 px-4 text-sm cursor-pointer bg-green-500 text-white '
                            : 'flex border-2 border-gray-700 py-2 px-4 text-sm cursor-pointer '
                        }
                            onClick={onActiveToggler}
                        >
                            {cur}
                        </li>
                    ))
                }

            </ul>
            <input value={value}
                   className=' max-w-[100%] h-[80px] border border-transparent rounded-2xl text-center text-[32px] '
                   type="number"
            />
        </div>
    );
};

export default Converter;
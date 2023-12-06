import React, {useEffect, useState} from 'react';
import {getData} from "../API/reauest";
import {ClipLoader} from "react-spinners";

const FetchedNames = () => {
    const [data, setData] = useState([])

    const fetch = async () => {
        const data = await getData()
        setData(data)
    }

    useEffect(() => {
        fetch()


    }, []);
    if (!data.length) return <div className='w-screen h-screen flex justify-center items-center '>
        <ClipLoader
            loading={!data.length}/>
    </div>
    return (
        <div>
            <h1 className='underline accent-yellow-400 font-medium text-4xl shadow-sm text-center'>Hello React!</h1>
            <ul>
                {data.map((e) => <li key={Math.random()}>{e.name}</li>)}
            </ul>
            <ul>
                {data.map((e) => <li key={Math.random()}>{e.model}</li>)}
            </ul>
        </div>
    );
};

export default FetchedNames;
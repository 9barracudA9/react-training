import React, {useState} from 'react';
import Btn from "./Btn";

const Tasks = () => {
    const [tasks, setTasks] = useState([{text: 'Create random tasks'}])
    const getInputValue = (e) => {
        console.log()
    }
    return (
        <div className='border-2 border-blue-700 w-1/3 m-8 p-4'>
            <p className='text-xl my-4'>{tasks[0].text}</p>

            <div className='flex justify-between'><Btn
                onClick={getInputValue}
                text='Delete'/>
                <Btn text='Edit'/>
            </div>
        </div>
    );
};

export default Tasks;
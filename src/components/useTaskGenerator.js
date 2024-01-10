import {useState} from 'react';

export const UseTaskGenerator = () => {
    const [value, setValue] = useState('')
    const [todo, setTodo] = useState([{
        title: 'Test Todo',
        id: Math.random() * 10,
        priority: 'Low'
    },
    ])
    const [progress, setProgress] = useState([{
        title: "First todo",
        id: Math.random() * 10,
        priority: 'Low'
    }
    ])
    const [finished, setFinished] = useState([{
        title: "First finished",
        id: Math.random() * 10,
        priority: 'Low'
    }])
    return {todo, value, finished, progress, setValue, setTodo, setProgress, setFinished};
};


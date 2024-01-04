import React, {useState} from 'react';
import Input from "./Input";
import TodoElement from "./TodoElement";
import MainBtn from "./MainBtn";

const TodoBody = () => {
    const [value, setValue] = useState('')
    const [todo, setTodo] = useState([{
        title: 'Test Todo',
        completed: false,
        inProgress: true,
        id: Math.random()
    },
    ])
    const [progress, setProgress] = useState([{
        title: "cHeck",
        completed: false,
        inProgress: true,
        id: Math.random()
    }
    ])
        

    const valueHandler = () => {
        setTodo(prevState => [...prevState, value])
        setValue("")
    }
    const deleteAndMoveTodo = (index) => {
        const updatedTodos = [...todo]
        setProgress((prevState) => [...prevState, index])
        console.log(progress)
        updatedTodos.splice(index, 1)
        setTodo(updatedTodos)


    }

    const inputHandler = (e) => {
        setValue(e.target.value)
    }
    return (
        <div className='flex justify-between items-center mx-[30px]'>
            <div
                className='flex flex-col gap-[15px] items-center justify-between border-2 border-gray-700 rounded-2xl py-2 px-4 shadow-xl shadow-gray-600'>
                <h1 className='text-center text-cyan-950 font-bold text-[27px] mb-[10px]'>
                    In progress...
                </h1>
                <ul>
                    {progress.map((element) =>
                        <li key={element.id}>{element.title}</li>
                    )

                    }

                </ul>
            </div>
            <div
                className='flex flex-col gap-[15px] items-center justify-between border-2 border-gray-700 rounded-2xl py-2 px-4 shadow-xl shadow-gray-600 min-w-[400px] '>
                <h1
                    className='text-center text-cyan-950 font-bold text-[27px] mb-[10px]'
                >Lets plan your life<
           /h1>

                <Input onChange={inputHandler} value={value}/>
                <MainBtn onClick={valueHandler} text='Add' width='w-[100%]'/>
                <ul className='flex flex-col items-center justify-between mt-[30px]'>
                    {
                        todo.map((element) => <TodoElement
                            text={element.title}
                            key={element.id}
                            onClickAction={deleteAndMoveTodo}
                            onClickActionDone={() => alert('hello')}/>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
export default TodoBody;
import React, {useState} from 'react';
import Input from "./Input";
import TodoElement from "./TodoElement";
import MainBtn from "./MainBtn";

const TodoBody = () => {
    const [value, setValue] = useState('')
    const [todo, setTodo] = useState([{
        title: 'Test Todo',
        id: Math.random() * 10
    },
    ])
    const [progress, setProgress] = useState([{
        title: "First todo",
        id: Math.random() * 10
    }
    ])
    const [finished, setFinished] = useState([{
        title: "First finished",
        id: Math.random() * 10
    }])


    const createNewTask = () => {
        const newTask = {
            title: value,
            id: Math.random() * 10
        }
        setTodo(prevState => [...prevState, newTask])
        setValue("")
    }

    const moveToProgress = (obj) => {
        setProgress(prevState => [...prevState, obj])
        setTodo(prevTodo => prevTodo.filter((todoItem) => todoItem.id !== obj.id))
        setFinished(prevTodo => prevTodo.filter((todoItem) => todoItem.id !== obj.id))

    }
    const moveToDone = (obj) => {
        setFinished(prevState => [...prevState, obj])
        setTodo(prevTodo => prevTodo.filter((todoItem) => todoItem.id !== obj.id))
        setProgress(prevTodo => prevTodo.filter((todoItem) => todoItem.id !== obj.id))
    }
    const moveToTaskList = (obj) => {
        setTodo(prevState => [...prevState, obj])
        setProgress(prevTodo => prevTodo.filter((todoItem) => todoItem.id !== obj.id))
    }
    const deleteTask = (obj) => {
        setFinished(prevTodo => prevTodo.filter((todoItem) => todoItem.id !== obj.id))
    }

    const inputHandler = (e) => {
        setValue(e.target.value)
    }
    return (
        <div className='mx-0 my-auto overflow-hidden px-[20px]'>
            <div className='flex flex-col items-center justify-between gap-4 mb-[40px]'>
                <h1
                    className='text-center text-cyan-950 font-bold text-[27px] mb-[10px]'
                >Lets plan your life<
           /h1>

                <Input onChange={inputHandler} value={value} width='w-[35%]'/>
                <MainBtn onClick={createNewTask} text='Add' width='w-[35%]'/>
            </div>

            <div className='flex justify-between items-stretch'>
                <div
                    className='flex flex-col gap-[15px] items-center justify-start border-2 border-gray-700 rounded-2xl py-2 px-4 shadow-xl shadow-gray-600 w-[30%] min-h-fit'>
                    <h1 className='text-center text-cyan-950 font-bold text-[27px] mb-[10px]'>
                        Todo list
                    </h1>
                    <ul className='flex flex-col items-center justify-between w-[100%]'>
                        {(todo.length > 0) ?
                            todo.map((element) => <TodoElement
                                text={element.title}
                                key={element.id}
                                firstTitle="Progress"
                                scndTitle='Done'
                                onClickActionFirst={() => moveToProgress(element)}
                                onClickActionScnd={() => moveToDone(element)}/>
                            ) : <h2 className='text-white text-xl'>The list is empty</h2>
                        }
                    </ul>
                </div>


                <div
                    className='flex flex-col gap-[15px] items-center justify-start border-2 border-gray-700 rounded-2xl py-2 px-4 shadow-xl shadow-gray-600 w-[30%] '>
                    <h1 className='text-center text-cyan-950 font-bold text-[27px] mb-[10px]'>
                        In progress...
                    </h1>
                    <ul className='flex flex-col items-center justify-between w-[100%] '>
                        {(progress.length > 0) ?
                            progress.map((element) => <TodoElement
                                    text={element.title}
                                    key={element.id}
                                    firstTitle="Done"
                                    scndTitle='Todo'
                                    onClickActionFirst={() => moveToDone(element)}
                                    onClickActionScnd={() => moveToTaskList(element)}
                                />
                            ) : <h2 className='text-white text-xl'>The list is empty</h2>
                        }
                    </ul>

                </div>


                <div
                    className='flex flex-col gap-[15px] items-center justify-start border-2 border-gray-700 rounded-2xl py-2 px-4 shadow-xl shadow-gray-600 w-[30%]'>
                    <h1 className='text-center text-cyan-950 font-bold text-[27px] mb-[10px]'>
                        Finished Tasks
                    </h1>
                    <ul className='flex flex-col items-center justify-between w-[100%] '>
                        {
                            (finished.length > 0) ?
                                finished.map((element) => <TodoElement
                                        text={element.title}
                                        key={element.id}
                                        firstTitle='Progress'
                                        scndTitle='Delete'
                                        onClickActionFirst={() => moveToProgress(element)}
                                        onClickActionScnd={() => deleteTask(element)}
                                    />
                                ) : <h2 className='text-white text-xl'>The list is empty</h2>
                        }
                    </ul>

                </div>
            </div>
        </div>
    )
}
export default TodoBody;
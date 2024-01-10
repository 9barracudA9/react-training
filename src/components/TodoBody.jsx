import React, {useState} from 'react';
import Input from "./Input";
import TodoElement from "./TodoElement";
import MainBtn from "./MainBtn";
import {UseTaskGenerator} from "./useTaskGenerator";

const TodoBody = () => {
    const {todo, value, finished, progress, setValue, setTodo, setProgress, setFinished} = UseTaskGenerator()
    const [priority, setPriority] = useState('Low')
    const createNewTask = () => {
        const newTask = {
            title: value,
            id: Math.random() * 10,
            priority: priority
        }
        if (!value) return null

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
    const selectHandler = (e) => {
        setPriority(e.target.value)
    }
    const inputHandler = (e) => {
        setValue(e.target.value)
    }
    const colorSelect = (obj) => {
        if (obj.priority === 'Low') {
            return "bg-green-500"
        } else if (obj.priority === 'Mid') {
            return 'bg-yellow-500'
        }
        return 'bg-red-500'
    }
    const priorityOrder = {High: 1, Mid: 2, Low: 3,};
    return (
        <div className='mx-0 my-auto overflow-hidden px-[20px]'>
            <div className='flex flex-col items-center justify-between gap-4 mb-[40px]'>
                <h1
                    className='text-center text-cyan-950 font-bold text-[27px] mb-[10px]'
                >Lets plan your life<
           /h1>

                <Input onChange={inputHandler} value={value} width='w-[35%]'/>
                <MainBtn onClick={createNewTask} text='Add' width='w-[35%]'/>
                <label htmlFor="Priority">Select the priority:</label>
                <select onChange={selectHandler} name="Priority" id="prioritySelect">
                    <optgroup>
                        <option value='Low'>Low</option>
                        <option value="Mid">Mid</option>
                        <option value="High">High</option>
                    </optgroup>
                </select>


            </div>

            <div className='flex justify-between items-stretch'>
                <div
                    className='flex flex-col gap-[15px] items-center justify-start border-2 border-gray-700 rounded-2xl py-2 px-4 shadow-xl shadow-gray-600 w-[30%] min-h-fit'>
                    <h1 className='text-center text-cyan-950 font-bold text-[27px] mb-[10px]'>
                        Todo list
                    </h1>
                    <ul className='flex flex-col items-center justify-between w-[100%]'>
                        {(todo.length > 0) ?
                            todo.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]).map((element) =>
                                <TodoElement
                                    text={element.title}
                                    key={element.id}
                                    firstTitle="Progress"
                                    scndTitle='Done'
                                    priorityColor={colorSelect(element)}
                                    onClickActionFirst={() => moveToProgress(element)}
                                    onClickActionScnd={() => moveToDone(element)}/>
                            ) :
                            <h2 className='text-white text-xl'>The list is empty</h2>
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
                            progress.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
                                .map((element) => <TodoElement
                                        text={element.title}
                                        key={element.id}
                                        firstTitle="Done"
                                        scndTitle='Todo'
                                        priorityColor={colorSelect(element)}
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
                                finished.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]).map((element) =>
                                    <TodoElement
                                        text={element.title}
                                        key={element.id}
                                        firstTitle='Progress'
                                        scndTitle='Delete'
                                        priorityColor={colorSelect(element)}
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
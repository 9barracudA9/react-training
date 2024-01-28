import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import FullQuiz from "./components/FullQuiz";
import Inviter from "./components/Inviter";
import GreetPage from "./components/GreetPage";
import TodoBody from "./components/TodoBody";
import TicTacToe from "./components/TicTacToe";


const App = () => {
    return (
        <>
            <header
                className='bg-gray-700 py-2 px-[60px] flex items-center justify-between gap-4 text-white shadow-gray-600 shadow-2xl
                            text-[25px] mb-[50px] border-b-2 border-white'
            >
                <Link to="/">Home Page</Link>
                <Link to='/quiz'> Quiz </Link>
                <Link to='/inviter'> Inviter </Link>
                <Link to='/todo'> Todo List </Link>
                <Link to='/tic-tac-toe'> Tic Tac Toe</Link>
            </header>
            <Routes>
                <Route path='/' element={<GreetPage/>}/>
                <Route path='/quiz' element={<FullQuiz/>}/>
                <Route path='/inviter' element={<Inviter/>}/>
                <Route path='/todo' element={<TodoBody/>}/>
                <Route path='tic-tac-toe' element={<TicTacToe/>}/>

            </Routes>


        </>
    )
}
export default App;

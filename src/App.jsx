import './App.css';
import FullQuiz from "./components/FullQuiz";


const App = () => {

    return (

        <FullQuiz reloadQuiz={reloadQuiz} answer={answer} question={question} percentage={percentage}
                  nextQuestion={nextQuestion}/>
        // <div className='bg-blue-300 border-2 border-white w-[450px] rounded-2xl px-4 py-2 '>
        //     <h1 className='font-bold text-2xl text-cyan-950  italic text-center'>Invite people!</h1>
        //     <ul className='mt-[40px]'>
        //         <li className='flex justify-between items-center py-2 px-4 border-2 border-white rounded-2xl hover:bg-amber-50 transition 0.3s '>
        //             <div className='flex'>
        //                 <img className="w-[50px] h-[50px] rounded-3xl"
        //                      src="https://reqres.in/img/faces/1-image.jpg" alt="User"
        //                 />
        //                 <div className='flex flex-col  ml-9'>
        //                     <h3>John Stockton</h3>
        //                     <p className='opacity-60 text-sm'>example777@gmail.com</p>
        //                 </div>
        //             </div>
        //
        //             <button className='w-[35px] h-[35px] rounded-3xl bg-green-500'>
        //
        //             </button>
        //         </li>
        //     </ul>
        // </div>
    )
}
export default App;

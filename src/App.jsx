import './App.css';
import {quizData} from "./data/questions";
import {useState} from "react";


const App = () => {
    const [step, setStep] = useState(0)
    const [answer, setAnswer] = useState(0)
    const question = quizData[step]
    const percentage = Math.round((step + 1) / quizData.length * 100)
    const nextQuestion = (index) => {
        setStep(step + 1)
        if (index === question.correct) {
            setAnswer(answer + 1)
        }
        console.log(step, answer)

    }
    return (
        step !== quizData.length ? (
            <div className='w-[500px] m-0 m-auto border-black border-2 p-4 rounded shadow-sm bg-blue-300'>
            <span style={{width: `${percentage}%`}}
                  className=' transition-1000 h-2 border-[1px] border-amber-50 block mb-3 bg-green-500'></span>
                <div className='text-2xl font-bold mb-[30px]'>{question.title}</div>
                <ul>
                    {question.variants.map((text, index) => {
                        return <li key={text} className='li-element' onClick={() => nextQuestion(index)}>
                            {text}
                        </li>
                    })

                    }
                    {/*<li className='li-element'>1.Im fine</li>*/}
                    {/*<li className='li-element'>2.No good</li>*/}
                    {/*<li className='li-element'>3.Perfect</li>*/}
                </ul>

            </div>) : (

            <div className='m-0 m-auto border-2 border-black rounded py-2 px-4 max-w-[40%] bg-yellow-300'>
                <h1 className='text-2xl font-bold text-center mb-[30px] '>You finished the test!</h1>
                <p className='text-center text-xl'>You gave <span
                    className='text-green-900 font-bold'>{answer}</span> correct
                    answers
                    of <span className='font-bold text-blue-950'>{quizData.length}</span>
                </p>

            </div>)
    )
}
export default App;

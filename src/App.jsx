import './App.css';
import {quizData} from "./data/questions";
import {useState} from "react";
import Game from './components/Game'
import ResultBox from "./components/ResultBox";


const App = () => {
    const [step, setStep] = useState(0)
    const question = quizData[step]
    const percentage = Math.round((step + 1) / quizData.length * 100)

    const [answer, setAnswer] = useState(0)

    const reloadQuiz = () => {
        setStep((step) => step = 0)
        setAnswer((answer) => answer = 0)
    }
    const nextQuestion = (index) => {
        setStep(step + 1)
        if (index === question.correct) {
            setAnswer(answer + 1)
        }


    }
    return (
        step !== quizData.length ? (
            <Game nextQuestion={nextQuestion} percentage={percentage} question={question}/>
        ) : (<ResultBox answer={answer} reloadQuiz={reloadQuiz}/>

        )
    )
}
export default App;

import React, {useState} from 'react';
import TicTacField from "./TicTacField";
import Input from "./Input";
import MainBtn from "./MainBtn";

const initialBoard = Array(9).fill(null)
const greet = 'Welcome to TIC TAC TOE game!'
const gameIsOngoing = 'The game is ongoing ...'
const TicTacToe = () => {

    const [board, setBoard] = useState(initialBoard)
    const [symbol, setSymbol] = useState('X')
    const [xValue, setXValue] = useState('')
    const [oValue, setOValue] = useState('')
    const [xPlayerName, setXPlayerName] = useState('')
    const [oPlayerName, setOPlayerName] = useState('')
    const [isGameFinished, setIsGameFinished] = useState(false)
    const [inputValue, setInputValue] = useState({
        X: "",
        O: ""
    })

    const winCases = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ]


    const xInputHandler = (event) => setXValue(event.target.value)
    const oInputHandler = (event) => setOValue(event.target.value)
    const addXPlayerName = () => {
        setXPlayerName(xValue)
        setXValue('')
    }
    const addOPlayerName = () => {
        setOPlayerName(oValue)
        setOValue('')

    }
    const checkIsWinnerExist = (board) =>
        winCases
            .some((winCase) => winCase
                .every((winIndex) => board[winIndex] === symbol))

    const passTurn = () => {
        setSymbol(prevState => prevState === 'X' ? 'O' : 'X')
    }
    const displayTheWinner = () => symbol === 'X' ? `The winner is ${xPlayerName}` : `The winner is ${oPlayerName}`

    const checkNames = xPlayerName.length > 0 && oPlayerName.length > 0

    const signHandler = (selectedIndex, sign) => {
        if (sign || isGameFinished || !checkNames) return;
        const newBoard = board.map((currentSymbol, index) => selectedIndex === index ? symbol : currentSymbol)
        setBoard([...newBoard]);
        const isWinner = checkIsWinnerExist(newBoard)
        if (isWinner) {
            setIsGameFinished(true)
            return;
        }
        passTurn()
    }
    const displayTitle = () => {
        if (checkNames && !isGameFinished) {
            return gameIsOngoing
        } else if (isGameFinished && checkNames) {
            return displayTheWinner()
        }
        return greet
    }
    const newGameHandler = () => {
        setBoard(initialBoard)
        setIsGameFinished(false)
        setXPlayerName("")
        setOPlayerName('')
    }
    return (

        <div className='mx-auto my-0 overflow-hidden px-[20px]'>
            <div className='flex items-center justify-between'>
                <div
                    className='border-2 border-white rounded-2xl py-2 px-4 flex flex-col items-center justify-between gap-4'>
                    <h3 className='text-3xl text-white font-bold'>X Player</h3>
                    <Input width='w-[250px]'
                           value={xValue}
                           onChange={xInputHandler}
                           disabled={checkNames}
                    />
                    <MainBtn width='w-[250px]'
                             onClick={addXPlayerName}
                             text="Add Player"
                             disabled={checkNames}
                    />

                    <h2 className='text-2xl text-cyan-950 font-bold'>{xPlayerName}</h2>
                </div>
                <div className='border-2 border-white rounded-2xl py-2 px-4 max-w-fit justify-center'>
                    <ul className='flex gap-1 max-w-[250px] flex-wrap'>
                        {
                            board.map((element, index) => {
                                return <TicTacField
                                    textColor={isGameFinished && element === symbol ? "text-green-500" : "text-white"}
                                    element={element}
                                    key={index}
                                    onClick={() => signHandler(index, element)}
                                />
                            })
                        }
                    </ul>
                </div>
                <div
                    className='border-2 border-white rounded-2xl py-2 px-4 flex flex-col items-center justify-between gap-4'>
                    <h3 className='text-3xl text-white font-bold'>O Player</h3>
                    <Input value={oValue}
                           width='w-[250px]'
                           onChange={oInputHandler}
                           disabled={checkNames}
                    />
                    <MainBtn width='w-[250px]'
                             onClick={addOPlayerName}
                             text="Add Player"
                             disabled={checkNames}
                    />
                    <h2 className='text-2xl text-cyan-950 font-bold'>{oPlayerName}</h2>
                </div>
            </div>
            <h4 className='text-center text-[35px] text-cyan-950 my-10'
            > {displayTitle()}
            </h4>
            <div className='flex justify-center'>
                {isGameFinished ? <MainBtn width='w-[250px]'
                                           text="New Game"
                                           onClick={newGameHandler}

                /> : null
                }
            </div>
        </div>
    );
};

export default TicTacToe;
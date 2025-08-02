import './App.css'
import {useState} from 'react'
import {fizzBuzz} from "./domain/fizzbuzz.js";
import {validateInput} from "./domain/inputValidator.js";

function App() {
    const [inputValue, setInputValue] = useState('')
    const [isInputValid, setIsInputValid] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const [result, setResult] = useState('')

    const handleInputChange = (e) => {
        const value = e.target.value
        setInputValue(value)

        const isValid = validateInput(value.trim())
        setIsInputValid(isValid)
        setErrorMessage(isValid ? '' : 'Please enter a valid whole number')
    }

    const fizzInput = () => {
        const fizzBuzzResult = fizzBuzz(parseInt(inputValue))
        setResult(fizzBuzzResult)
    }

    return (
        <>
            <div className="h-screen w-full flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl font-bold text-center">Hello FizzBuzz</h1>
                <div className="flex flex-col items-center gap-2">
                    {/* Input and Button Row - aligned at bottom */}
                    <div className="flex gap-4 items-end">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="numberInput">give number</label>
                            <input
                                id="numberInput"
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                className={`border rounded px-2 py-1 ${!isInputValid ? 'border-red-500' : ''}`}
                            />
                        </div>
                        <button
                            disabled={!isInputValid}
                            className={`px-4 py-1 rounded font-medium transition-colors ${!isInputValid ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
                            onClick={fizzInput}
                        >
                        Fizz It
                        </button>
                    </div>

                    {/* Error message below both input and button */}
                    <div className="h-5 w-full text-center">
                        {errorMessage && (
                            <p className="text-red-500 text-xs">{errorMessage}</p>
                        )}
                    </div>

                    {result && (
                        <div className="mt-4 p-4 bg-gray-100 rouded-lg">
                            <p className="test-lg font-semibold text-center">
                                Result: <span className="text-blue-600">{result}</span>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}


export default App
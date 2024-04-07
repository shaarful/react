import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from "./components/Counter.tsx";
import CounterToolkit from "./components/CounterToolkit.tsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="flex justify-center">
                <a href="/" target="_self" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Learn React</h1>
            <h2>Counter (state)</h2>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is <span className="font-bold">{count}</span>
                </button>
            </div>
            <h2>Counter (Redux)</h2>
            <Counter/>
            <h2>Counter (Redux Toolkit)</h2>
            <CounterToolkit/>
        </>
    )
}

console.log(<App key="test key"/>);

export default App

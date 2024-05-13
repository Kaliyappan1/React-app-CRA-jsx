import { useState } from "react";

function Counter() {
    const [count, setCount ]= useState(0)

    const CounterIncrease = () => {
        setCount(count + 1)
    } 

    const Reset = () => {
        setCount(0)
    } 

    const DecreseCount = () => {
        setCount(count - 1)
    } 

    return(<div className="container">
        <p className="Count-Container">{count}</p>
        <button onClick={CounterIncrease}>Increase</button>
        <button onClick={Reset}>Reset</button>
        <button onClick={DecreseCount}>Decrese</button>
    </div>)
}

export default Counter;
import { useState } from "react";

const Gallery = () => {
    var [counter,setCount]=useState(0);
    function increment() {
        setCount(counter+1)
    }
    function decrement() {
        setCount(counter-1)
    }
    function reset() {
        setCount(counter=0)
    }
    return (
        <section>
            <h1>This is Gallery Page</h1>
            <h2>Learning State</h2>
            <h3>The State of my variable count is {counter}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </section>
    );
};

export default Gallery
/*import { useState, useRef ,useEffect } from "react";
var UseRef = () => {
    var [text, setText] = useState("");
    var prevText = useRef("");
    useEffect(()=>{
        prevText.current=text;
    },[text]);
    return (
        <section>
            <h1>This is an example of useRef</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <h2>my Current render is {text}</h2>
            <h3>my previous render is{prevText.current}</h3>
        </section>
    );
};
export default UseRef;*/

import { useState, useRef, useEffect } from "react";

const UseRef = () => {
    const [number, setNumber] = useState(0);
    const prevNumber = useRef(0);

    useEffect(() => {
        prevNumber.current = number;
    }, [number]);

    return (
        <section style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>This is an example of UseRef</h1>
            <label htmlFor="numberInput" style={{ marginRight: "10px" }}>
                Enter a number:
            </label>
            <input id="numberInput" type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))}/>
            <h2 style={{ marginTop: "20px" }}>Current number: {number}</h2>
            <h3>Previous number: {prevNumber.current+number}</h3>
        </section>
    );
};

export default UseRef;

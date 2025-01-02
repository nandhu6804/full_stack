import { useState, useMemo } from "react";

const slowFunction = (number) => {
    for (let i = 0; i < 1000000000; i++) {} 
    return number * 2;
};

const UseMemoComponent = () => {
    const [num, setNum] = useState(0);
    const [theme, updateTheme] = useState(true);

    const darkLight = useMemo(() => ({
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
    }), [theme]);

    const doubledNumber = useMemo(() => 
        slowFunction(Number(num)), 
    [num]);

    return (
        <section>
            <h1>This is UseMemo Component</h1>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)}/>
            <br />
            <button onClick={() => updateTheme(!theme)}>Toggle Theme</button>
            <br />
            <h2 style={darkLight}>Doubled Number: {doubledNumber}</h2>
        </section>
    );
};

export default UseMemoComponent;



//UseMemo-3function
//slow function,theme direction,doubling up a number
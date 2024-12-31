import { useState ,useEffect} from "react";

var UseEffect=()=>{
    var [text,setText]=useState("Kongu");
    useEffect(()=>{
        console.log(text)
        setText("KEC")
    },[text])
    return(
        <section>
            <h2>Use Effect</h2>
            <input type="text" placeholder="Enter text" value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <h2>Text typed is {text}</h2>
        </section>
    );
};
export default UseEffect;
import React from "react";
import {useRef} from "react";

const LearnUseRef = () => {
    const inputRef = useRef(null);
    const focusRef = useRef();
    const backRef = useRef();
    const handleChange = (e) => {
        e.current.innerText = "Text Changed To Birat";
    }
    
    return (
        <>
            <div ref={backRef} style={{
                backgroundColor: "red",
                padding: "10px",
                color: "white",
                width: "100vw",
                height: "100vh"
            }}>
                <h1 ref={inputRef}>Text To Be Changed</h1>
                <button onClick={(e) => {
                    handleChange(inputRef)
                }}>
                    Click to Change the Text
                </button>
                <br/>
                <button onClick={
                    (e) => {
                        focusRef.current.focus();
                    }
                }>Focus
                </button>
                <br/>
                <input ref={focusRef}></input>
                <br/>
                <button onClick={
                    (e) => {
                        backRef.current.style.backgroundColor = "black";
                    }
                }>
                    Black
                </button>
                <br/>
                <button onClick={
                    (e) => {
                        backRef.current.style.backgroundColor = "white";
                        backRef.current.style.color = "black";
                    }
                }>
                    White
                </button>
            </div>
        </>
    );
}

export default LearnUseRef;
import React, {useEffect} from "react";
import style from './Area.module.css';
import {useState} from "react";

localStorage.setItem("counterValue", "0");
localStorage.setItem("maxValue", "5");
localStorage.setItem("startValue", "0");

const Area = () => {

    let localCounterValue = Number(localStorage.getItem("counterValue"));
    let localStartValue = Number(localStorage.getItem("startValue"));
    let localMaxValue = Number(localStorage.getItem("maxValue"));

    let [counterValue, setCounterValue] = useState(localStartValue)
    let [maxValue, setMaxValue] = useState(localMaxValue)
    let [startValue, setStartValue] = useState(localStartValue)

    const editCounterValue = () => {
        console.log("edit")
        if (counterValue !== maxValue) {
            setCounterValue(counterValue + 1)
        }
    }

    const resetCounterValue = () => {
        console.log("reset")
        setCounterValue(startValue)
    }

    const maxValueHandler = (e) => {
        debugger
        console.log("max")
        localStorage.setItem("maxValue", e.currentTarget.value);
    }

    const startValueHandler = (e) => {
        console.log("start")
        localStorage.setItem("startValue", e.currentTarget.value);
    }

    const setSettings = () => {
        console.log("set")
        setMaxValue(localMaxValue);
        setStartValue(localStartValue);
        setCounterValue(localStartValue);
    }

    useEffect(() => {
        console.log("effect")
        // setMaxValue(localMaxValue);
        // setStartValue(localStartValue);
    },[localStartValue, localMaxValue])

    return (
        <div className={style.area}>
            <div className={style.menu}>
                <div className={style.inputs}>
                    <div>
                        Max value <input value={localMaxValue} onChange={maxValueHandler} type={"number"} placeholder={"max value"}/>
                    </div>
                    <div>
                        Start value <input onChange={startValueHandler} value={startValue} type={"number"} placeholder={"start value"}/>
                    </div>
                </div>
                <div className={style.button}>
                    <button onClick={setSettings}>Set</button>
                </div>
            </div>
            <div className={style.menu}>
                <div className={style.inputs}>
                    <h1 className={(counterValue === Number(maxValue) ? style.error : style.default)}>{counterValue}</h1>
                </div>
                <div className={style.button}>
                    <button onClick={editCounterValue}>Inc</button>
                    <button onClick={resetCounterValue}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Area;

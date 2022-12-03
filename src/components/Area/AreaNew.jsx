import React, {useEffect} from "react";
import style from './Area.module.css';
import {useState} from "react";

const Area = () => {

    let localCounterValue = localStorage.getItem("counterValue");
    let localStartValue = localStorage.getItem("startValue");
    let localMaxValue = localStorage.getItem("maxValue");

    let [counterValue, setCounterValue] = useState(0)
    let [maxValue, setMaxValue] = useState(localMaxValue)
    let [startValue, setStartValue] = useState(localStartValue)

    const editCounterValue = () => {
        if (counterValue !== Number(maxValue)) {
            setCounterValue(counterValue + 1)
        }
    }

    const resetCounterValue = () => {

    }

    const maxValueHandler = (e) => {
        console.log("max")
        localStorage.setItem("maxValue", e.currentTarget.value);
    }

    const startValueHandler = (e) => {
        localStorage.setItem("startValue", e.currentTarget.value);
    }

    const setSettings = () => {
        setMaxValue(localMaxValue);
        setStartValue(localStartValue);
        setCounterValue(Number(localStartValue));
    }

    useEffect(() => {
        console.log("effect")
        localStorage.setItem("counterValue", "0");
        localStorage.setItem("maxValue", "5");
        localStorage.setItem("startValue", "0");
    },[])

    return (
        <div className={style.area}>
            <div className={style.menu}>
                <div className={style.inputs}>
                    <div>
                        Max value <input defaultValue={localMaxValue} onChange={maxValueHandler} type={"number"} placeholder={"max value"}/>
                    </div>
                    <div>
                        Start value <input onChange={startValueHandler} defaultValue={startValue} type={"number"} placeholder={"start value"}/>
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

import React, {useEffect} from "react";
import style from './Area.module.css';
import {useState} from "react";

const Area = () => {

    let localCounterValue = localStorage.getItem("counterValue");
    let localStartValue = localStorage.getItem("startValue");
    let localMaxValue = localStorage.getItem("maxValue");

    let [counterValue, setCounterValue] = useState(Number(localStartValue))
    let [maxValue, setMaxValue] = useState(Number(localMaxValue))
    let [startValue, setStartValue] = useState(Number(localStartValue))

    const editCounterValue = () => {
        if (counterValue !== Number(maxValue)) {
            setCounterValue(counterValue + 1)
        }
    }

    const resetCounterValue = () => {
        setCounterValue(0)
    }

    const maxValueHandler = (e) => {
        // debugger
        // setMaxValue(e.currentTarget.value);
        // localStorage.setItem("maxValue", `${e.currentTarget.value}`);
    }

    const startValueHandler = (e) => {
        setStartValue(e.currentTarget.value);
    }

    const setSettings = () => {
        localStorage.setItem("maxValue", maxValue);
        localStorage.setItem("startValue", startValue);
    }

    useEffect(() => {
        // localStorage.setItem("counterValue", "0");
        // localStorage.setItem("maxValue", "5");
        // localStorage.setItem("startValue", "0");
    }, [localMaxValue, localStartValue])

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

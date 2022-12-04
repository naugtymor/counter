import React, {useEffect} from "react";
import style from './Area.module.css';
import {useState} from "react";



const Area = () => {
    // debugger
    let localCounterValue = Number(localStorage.getItem("counterValue"));
    let localStartValue = Number(localStorage.getItem("startValue"));
    let localMaxValue = Number(localStorage.getItem("maxValue"));

    let [counterValue, setCounterValue] = useState(localStartValue)
    let [maxValue, setMaxValue] = useState(localMaxValue)
    let [startValue, setStartValue] = useState(localStartValue)

    const editCounterValue = () => {
        console.log("edit")
        if (localCounterValue !== localMaxValue) {
            setCounterValue(localCounterValue + 1)
            localStorage.setItem("counterValue", `${localCounterValue + 1}`);
        }
    }

    const resetCounterValue = () => {
        console.log("reset")
        setCounterValue(startValue)
        localStorage.setItem("counterValue", `${startValue}`);
    }

    const maxValueHandler = (e) => {
        console.log("max")
        setMaxValue(Number(e.currentTarget.value));
    }

    const startValueHandler = (e) => {
        console.log("start")
        setStartValue(Number(e.currentTarget.value));
    }

    const setSettings = () => {
        console.log("set")
        if (maxValue >= 0 && maxValue > startValue) {
            localStorage.setItem("maxValue", `${maxValue}`);
            localStorage.setItem("startValue", `${startValue}`);
            localStorage.setItem("counterValue", `${startValue}`);
            setCounterValue(startValue)
        }
    }
    useEffect(() => {
        if (localMaxValue === 0) {
            localStorage.setItem("maxValue", "5");
        }
    },[])

    return (
        <div className={style.area}>
            <div className={style.menu}>
                <div className={style.inputs}>
                    <div>
                        Max value <input
                        className={(maxValue <= 0 || maxValue <= startValue ? style.errorInput : "")}
                        value={maxValue}
                        onChange={maxValueHandler}
                        type={"number"}
                        placeholder={"max value"}/>
                    </div>
                    <div>
                        Start value <input
                        className={(startValue < 0 || maxValue <= startValue ? style.errorInput : "")}
                        onChange={startValueHandler}
                        value={startValue} type={"number"}
                        placeholder={"start value"}/>
                    </div>
                </div>
                <div className={style.button}>
                    <button onClick={setSettings}>Set</button>
                </div>
            </div>
            <div className={style.menu}>
                <div className={style.inputs}>
                    <h1 className={(counterValue === localMaxValue ? style.error : style.default)}>{counterValue}</h1>
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

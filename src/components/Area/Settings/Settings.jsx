// import style from "../../Area.module.css";
// import React from "react";
// import {useState} from "react";
//
// const Settings = () => {
//
//     localStorage.setItem("counterValue", "0");
//     localStorage.setItem("maxValue", "5");
//     localStorage.setItem("startValue", "0");
//
//     let localStartValue = localStorage.getItem("startValue");
//     let localMaxValue = localStorage.getItem("maxValue");
//     let [maxValue, setMaxValue] = useState(localMaxValue)
//     let [startValue, setStartValue] = useState(localStartValue)
//     let [counterValue, setCounterValue] = useState(0)
//
//
//     const maxValueHandler = (e) => {
//         console.log("max")
//         localStorage.setItem("maxValue", e.currentTarget.value);
//     }
//
//     const startValueHandler = (e) => {
//         localStorage.setItem("startValue", e.currentTarget.value);
//     }
//
//     const setSettings = () => {
//         setMaxValue(localMaxValue);
//         setStartValue(localStartValue);
//         setCounterValue(0);
//     }
//
//     return (
//         <div className={style.menu}>
//             <div className={style.inputs}>
//                 <div>
//                     Max value <input defaultValue={localMaxValue} onChange={maxValueHandler} type={"number"} placeholder={"max value"}/>
//                 </div>
//                 <div>
//                     Start value <input onChange={startValueHandler} defaultValue={startValue} type={"number"} placeholder={"start value"}/>
//                 </div>
//             </div>
//             <div className={style.button}>
//                 <button onClick={setSettings}>Set</button>
//             </div>
//         </div>
//     )
// }
//
// export default Settings;
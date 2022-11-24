import React from "react";
import style from './Area.module.css';

function Area() {
    return (
        <div className={style.area}>
            <div className={style.menu}>
                <div className={style.inputs}>
                    <div>
                        <input placeholder={"max value"}/>
                    </div>
                    <div>
                        <input placeholder={"start value"}/>
                    </div>
                </div>
                <div className={style.button}>
                    <button>Set</button>
                </div>
            </div>
            <div className={style.menu}>
                <div className={style.inputs}>
                    <h1>0</h1>
                </div>
                <div className={style.button}>
                    <button>Inc</button>
                    <button>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Area;

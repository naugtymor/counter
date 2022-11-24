import React from "react";
import style from './Nav.module.css';

function Nav() {
    return (
        <div className={style.nav}>
            <a href={""}>Counter</a>
            <a href={""}>Settings</a>
        </div>
    )
}

export default Nav;

import React from "react";
import styles from "./Header.module.css"
import { redirect } from "react-router-dom";

const Header = (props) => {

console.log('ran');

const redirectHandler = () => {
    return redirect('/');
}
    return (
        <header>
            <p className={styles['title-paragraph']} onClick={redirectHandler}>Star wars project</p>
        </header>
    )
}

export default React.memo(Header);
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
    return (
        <nav className={styles.navbar}>
            {props.children}
        </nav>
    )
}

export default React.memo(Navbar);
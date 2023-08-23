import React from "react";
import styles from "./Card.module.css"

const Card = (props) => {
    return (
        <div className={styles.card}>
            <h3>{props.title}</h3>
            <div className={styles['flex-card']}>
                <img src={props.imageSource} alt="George Lucas" />
                <p className={styles['card-text']}>{props.text}</p>
            </div>
        </div>
    )
}

export default React.memo(Card);
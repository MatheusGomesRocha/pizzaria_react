import React from "react";

import styles from './introduction.module.scss';

export default function Introduction () {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <h2>Authentic Italian Pizzas</h2>

                <h1>The Best Pizza in Town</h1>

                <div className={styles.button}>
                    <span>Order online now</span>
                </div>
            </div>

            <div className={styles.bounce}>
                <span>↓</span>
            </div>
        </div>
    )
}
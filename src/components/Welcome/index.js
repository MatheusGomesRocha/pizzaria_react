import React from "react";

import PizzaSlice from '../../assets/images/pizza-slice.png';

import styles from './welcome.module.scss';

export default function Welcome () {
    return(
        <div className={styles.container}>
            <section className={styles.left}>
                <section className={styles.header}>
                    <div />
                    <img src={PizzaSlice} />
                    <div />
                </section>
                
                <h1>Welcome to Pizza Home</h1>

                <p className={styles.textYellow}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                    minim veniam
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                </p>

                <div className={styles.button}>
                    <span>Learn More</span>
                </div>
            </section>
        </div>
    )
}
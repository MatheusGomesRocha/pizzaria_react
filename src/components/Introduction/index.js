import React from "react";

import PizzaImg from '../../assets/images/pizza.png';

import styles from './introduction.module.scss';

export default function Introduction () {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>nunc pulvinar et</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Consectetur libero id faucibus nisl tincidunt. Non odio euismod lacinia at quis risus sed vulputate. Tincidunt augue interdum velit 
                    uismod in pellentesque. Eu volutpat odio facilisis mauris sit amet.
                </p>
                <div className={styles.button}>
                    <span>Read More</span>
                </div>
            </div>

            <img src={PizzaImg} />
        </div>
    )
}
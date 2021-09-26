import React from "react";

import PizzaImg from '../../assets/images/pizza.png';

import styles from './styles.module.scss';

export default function Introduction () {
    return(
        <div className={styles.container}>
            <img src={PizzaImg} />
        </div>
    )
}
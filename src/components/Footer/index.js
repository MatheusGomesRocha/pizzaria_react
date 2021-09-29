import React from "react";

import PizzaLogo from '../../assets/images/pizza-logo.png';

import styles from './footer.module.scss';

export default function Footer () {
    return(
        <div className={styles.container}>
            <img src={PizzaLogo} />
            <span>By <a href="#">Matheus Gomes</a>. All Rights Reserverd</span>
        </div>
    )
}
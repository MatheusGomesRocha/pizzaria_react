import React from "react";

import PizzaLogo from '../../assets/images/pizza-logo.png';

import styles from './header.module.scss';

export default function Header () {
    return(
        <div className={styles.header}>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Features</li>
                    <li>Contact</li>

                    <li>
                        <img src={PizzaLogo} />
                    </li>

                    <li>(00) 12345-6789</li>
                    <li>0 Items - R$ 0,00</li>
                    <li>
                        <div className={styles.button}>
                            <span>Book a Table</span>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
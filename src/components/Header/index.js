import React from "react";

import styles from './header.module.scss';

export default function Header () {
    return(
        <div className={styles.header}>
            <h2>PizzaRia</h2>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Team</li>
                    <li>Recipes</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
    )
}
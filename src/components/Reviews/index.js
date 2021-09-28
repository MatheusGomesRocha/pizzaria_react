import React from "react";

import styles from './reviews.module.scss';

export default function Reviews () {
    return(
        <div className={styles.container}>
            <section>
                <span className={styles.title}>Some good reviews</span>
                <h1>What People Say</h1>

                <span className={styles.aspas}>"</span>

                <p>
                    ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

                <span className={styles.name}>Clark Kent</span>
            </section>
        </div>
    )
}
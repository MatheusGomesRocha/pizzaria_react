import React from "react";

import PizzaSlice from '../../assets/images/pizza-slice.png';
import PizzaAd2 from '../../assets/images/pizza-ad-2.jpg';

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
        
            <section className={styles.right}>
                <div className={styles.ad}>
                    <div className={styles.contentAd}>
                        <span>Specialty Pizza</span>
                        <h2>Only R$ 18.50</h2>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${PizzaAd2})`}} id="ad" className={styles.ad}>
                    <div style={{bottom: 0, backgroundColor: '#F9C122'}} className={styles.contentAd}>
                        <span>Recive a free</span>
                        <h2>Gift Card</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}
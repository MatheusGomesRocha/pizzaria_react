import React, { useState } from "react";

import PizzaSlice from '../../assets/images/pizza-slice.png';
import PizzaStory1995 from '../../assets/images/pizza-background-2.jpg';

import styles from './about.module.scss';

export default function About () {
    const [filter, setFilter] = useState('1995');

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <section className={styles.header}>
                    <div />
                    <img src={PizzaSlice} />
                    <div />
                </section>

                <h1>Our Story</h1>

                <section className={styles.buttons}>
                    <div style={{backgroundColor: filter === '1995' ? '#CA0808' : undefined}} onClick={() => setFilter('1995')}>
                        <span style={{color: filter === '1995' ? '#fff' : undefined}}>1995</span>
                    </div>

                    <div style={{backgroundColor: filter === '2002' ? '#CA0808' : undefined}} onClick={() => setFilter('2002')}>
                        <span style={{color: filter === '2002' ? '#fff' : undefined}}>2002</span>
                    </div>

                    <div style={{backgroundColor: filter === '2008' ? '#CA0808' : undefined}} onClick={() => setFilter('2008')}>
                        <span style={{color: filter === '2008' ? '#fff' : undefined}}>2008</span>
                    </div>

                    <div style={{backgroundColor: filter === '2017' ? '#CA0808' : undefined}} onClick={() => setFilter('2017')}>
                        <span style={{color: filter === '2017' ? '#fff' : undefined}}>2017</span>
                    </div>

                    <div style={{backgroundColor: filter === '2019' ? '#CA0808' : undefined}} onClick={() => setFilter('2019')}>
                        <span style={{color: filter === '2019' ? '#fff' : undefined}}>2019</span>
                    </div>
                </section>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>

                <span className={styles.readMore}>Read More</span>
            </div>

            <img className={styles.pizzaImg} src={PizzaStory1995} />
        </div>
    )
}
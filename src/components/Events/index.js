import React from "react";

import PizzaAd1 from '../../assets/images/pizza-ad-1.jpg';
import PizzaAd2 from '../../assets/images/pizza-ad-2.jpg';

import styles from './events.module.scss';

let array = [
    {id: 1, img: PizzaAd1, date: 'Jul 12, 2022', title: 'Winter breakfeast 2021 at Pizza Home'},
    {id: 2, img: PizzaAd2, date: 'Aug 25, 2022', title: 'Chinese food workshop w/ Mr. Takada and Mrs. Tanaka'},
    {id: 3, img: PizzaAd1, date: 'Sep 07, 2022', title: 'Black Friday'},
];

export default function Events () {
    return(
        <div className={styles.container}>
            <h2>some good events</h2>

            <h1>Upcoming Events</h1>

            <section>
                {array.map((item, k) => (
                    <div key={k} className={styles.item}>
                        <img src={item.img} />

                        <div className={styles.date}>
                            <span>{item.date}</span>    
                        </div>

                        <h1>{item.title}</h1>

                        <span className={styles.readMore}>Read More</span>
                    </div>
                ))}
            </section>
        </div>
    )
}
import React from "react";

import PizzaDemo2 from '../../assets/images/pizza-demo-2.png';
import PizzaDemo3 from '../../assets/images/pizza-demo-3.png';

import styles from './menu.module.scss';

export default function Menu () {
    return(
        <div className={styles.container}>
            <section className={styles.header}>
                <span>Order online Now</span>
                <h1>Our Delicious Pizzas</h1>
            </section>

            <section className={styles.menuArea}>
                <div className={styles.item}>
                    <div className={styles.newIndicator}>
                        <span>New</span>
                    </div>
                    
                    <img src={PizzaDemo3} />
                    <span className={styles.name}>Pepperoni</span>
                    <p>Tomato, salami, cheese, pepper, chilli, sauce, mozzarella cheese and onion</p>
                    <h2 className={styles.price}>R$ 18.50</h2>
                    <div className={styles.button}>
                        <span>Order now</span>
                    </div>
                </div>

                <div className={styles.item}>
                    <img src={PizzaDemo2} />
                    <span className={styles.name}>Pepperoni</span>
                    <p>Tomato, salami, cheese, pepper, chilli, sauce, mozzarella cheese and onion</p>
                    <h2 className={styles.price}>R$ 18.50</h2>
                    <div className={styles.button}>
                        <span>Order now</span>
                    </div>
                </div>

                <div className={styles.item}>
                    <img src={PizzaDemo3} />
                    <span className={styles.name}>Pepperoni</span>
                    <p>Tomato, salami, cheese, pepper, chilli, sauce, mozzarella cheese and onion</p>
                    <h2 className={styles.price}>R$ 18.50</h2>
                    <div className={styles.button}>
                        <span>Order now</span>
                    </div>
                </div>
            </section>
        </div>
    )
}
import React, { useState } from 'react';

import PizzaDemo2 from '../../assets/images/pizza-demo-2.png';

import styles from './cart.module.scss';

export default function Cart () {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(35.50);

    function decrease () {
        if(quantity > 1) {
            setQuantity(quantity - 1);
        }  else {
            setQuantity(quantity);
        }
    }

    function increase () {
        if(quantity >= 1) {
            setQuantity(quantity + 1);
        }  else {
            setQuantity(quantity);
        }
    }

    return(
        <section className={styles.cart}>
            <div className={styles.cartHeader}>
                <h1>Cart</h1>
                <span>{quantity} items</span>
            </div>

            <div className={styles.cartItem}>
                <img src={PizzaDemo2} />

                <div className={styles.content}>
                    <div className={styles.contentHeader}>
                        <h2>Pepperonni</h2>
                        <span>R$ {parseFloat(quantity * price)}</span>
                    </div>

                    <div className={styles.contentFooter}>
                        <span onClick={decrease}>-</span>
                        <span className={styles.quantity}>{quantity}</span>
                        <span onClick={increase}>+</span>
                    </div>
                </div>
            </div>

            <div className={styles.cartItem}>
                <img src={PizzaDemo2} />

                <div className={styles.content}>
                    <div className={styles.contentHeader}>
                        <h2>Pepperonni</h2>
                        <span>R$ {parseFloat(quantity * price)}</span>
                    </div>

                    <div className={styles.contentFooter}>
                        <span onClick={decrease}>-</span>
                        <span className={styles.quantity}>{quantity}</span>
                        <span onClick={increase}>+</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
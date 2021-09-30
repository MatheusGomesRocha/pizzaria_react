import React, { useEffect, useState } from "react";

import PizzaLogo from '../../assets/images/pizza-logo.png';
import Cart from '../../assets/images/shopping-cart.png';
import PizzaDemo2 from '../../assets/images/pizza-demo-2.png';

import styles from './header.module.scss';

export default function Header () {
    const [cartOpen, setCartOpen] = useState(false);
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

                    <li onClick={() => setCartOpen(!cartOpen)} className={styles.cart}>
                        <img src={Cart} />
                    </li>
                </ul>
            </nav>

            <section className={cartOpen ? styles.cartAreaOpen : styles.cartAreaClose}>
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
        </div>
    )
}
import React, { useContext, useEffect, useState } from 'react';

import PizzaDemo2 from '../../assets/images/pizza-demo-2.png';
import Trash from '../../assets/images/trash.png';

import { api } from '../../services/api';
import { ModalContext } from '../../contexts/ModalContext';

import styles from './cart.module.scss';

export default function Cart () {
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [cartArray, setCartArray] = useState([]);

    const { setRequest, newRequest, email, openOrderModal } = useContext(ModalContext);

    useEffect(() => {
        api.get(`cart-quantity/${email}`)
        .then((res) => setQuantity(res.data.result));

        api.get(`cart-price/${email}`)
        .then((res) => {
            setPrice(res.data.subtotal)
        });

        api.get(`cart/${email}`)
        .then((res) => {
            // console.log(res.data.cart);
            setCartArray(res.data.cart);
        });
    }, [newRequest]);

    function decrease (productQuantity, name) {
        if(productQuantity <= 1) {
            return;
        } else {
            api.post('/decrement-product', {
                productName: name,
                userEmail: email
            }).then((res) => {
                console.log(res.data);
            });
    
            setRequest(true);
        }
    }

    function increase (name) {
        api.post('/increment-product', {
            productName: name,
            userEmail: email
        }).then((res) => {
            console.log(res.data);
        });

        setRequest(true);
    }

    function deleteFromCart (id) {
        setRequest(true);

        api.post('delete-product', {
            id
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }

    return(
        <section className={styles.cart}>
            <div className={styles.cartHeader}>
                <h1>Cart</h1>
                <span>{quantity} items (total)</span>
            </div>

            {cartArray.map((item, k) => (
                <div key={k} className={styles.cartItem}>
                    <img src={PizzaDemo2} />

                    <div className={styles.content}>
                        <div className={styles.contentHeader}>
                            <h2>{item.productName}</h2>
                            <div onClick={() => deleteFromCart(item.id)} className={styles.deleteButton}>
                                <img src={Trash} />
                            </div>
                        </div>

                        <div className={styles.footer}>
                            <div className={styles.contentFooter}>
                                <span onClick={() => decrease(item.productQuantity, item.productName)}>-</span>
                                <span className={styles.quantity}>{item.productQuantity}</span>
                                <span onClick={() => increase(item.productName)}>+</span>
                            </div>

                            <span className={styles.price}>R$ {parseFloat(item.productQuantity * item.productPrice).toFixed(2)}</span>
                        </div>

                        
                    </div>
                </div>
            ))}

            <div className={styles.cartFooter}>
                <h2>R$ {price.toFixed(2)}</h2>

                <div onClick={openOrderModal} className={styles.button}>
                    <span>Finish order</span>
                </div>
            </div>
        </section>
    )
}
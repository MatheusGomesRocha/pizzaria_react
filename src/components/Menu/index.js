import React, { useContext } from "react";

import PizzaDemo2 from '../../assets/images/pizza-demo-2.png';
import PizzaDemo3 from '../../assets/images/pizza-demo-3.png';

import { ModalContext } from '../../contexts/ModalContext';

import styles from './menu.module.scss';

let array = [
    {id: 1, img: PizzaDemo3, name: 'Pepperoni', description: 'Tomato, salami, cheese, pepper, chilli, sauce, mozzarella cheese and onion', price: '18.50', new: true},
    {id: 2, img: PizzaDemo2, name: 'Pepperoni', description: 'Tomato, salami, cheese, pepper, chilli, sauce, mozzarella cheese and onion', price: '18.50'},
    {id: 3, img: PizzaDemo3, name: 'Pepperoni', description: 'Tomato, salami, cheese, pepper, chilli, sauce, mozzarella cheese and onion', price: '18.50'},
];

export default function Menu () {
    const { email, openModal } = useContext(ModalContext);

    return(
        <div className={styles.container}>
            <section className={styles.header}>
                <span>Order online Now</span>
                <h1>Our Delicious Pizzas</h1>
            </section>

            <section className={styles.menuArea}>
                {array.map((item, k) => (
                    <div key={k} className={styles.item}>
                        {item.new ? 
                            <div className={styles.newIndicator}>
                                <span>New</span>
                            </div>
                        : undefined
                        }
                        
                        <img src={item.img} />
                        <span className={styles.name}>{item.name}</span>
                        <p>{item.description}</p>
                        <h2 className={styles.price}>R$ {item.price}</h2>
                        <div onClick={email ? undefined : openModal} className={styles.button}>
                            <span>Add to cart</span>
                        </div>
                    </div>
                ))}

                
            </section>
        </div>
    )
}
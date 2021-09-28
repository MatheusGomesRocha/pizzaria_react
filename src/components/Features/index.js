import React, { useState } from "react";

import PizzaSlice from '../../assets/images/pizza-slice.png';
import Lasanha from '../../assets/images/lasanha.jpg';
import Ravioli from '../../assets/images/ravioli.jpg';

import styles from './features.module.scss';

let array = [
    {id: 1, img: Lasanha, name: 'Chicken', price: 42.50, ingredients: ['Cheese - ', 'Olives - ', 'Meat - ', 'Egg - ', 'Ham']},
    {id: 2, img: Ravioli, name: 'Vegetarian', price: 42.50, ingredients: ['Egg - ', 'Meat - ', 'Cheese - ', 'Ricotta - ', 'Bacon - ', 'Onio']},
    {id: 3, img: Lasanha, name: 'Chicken', price: 42.50, ingredients: ['Cheese - ', 'Olives - ', 'Meat - ', 'Egg - ', 'Ham']},
    {id: 4, img: Ravioli, name: 'Vegetarian', price: 42.50, ingredients: ['Egg - ', 'Meat - ', 'Cheese - ', 'Ricotta - ', 'Bacon - ', 'Onio']},
    {id: 5, img: Lasanha, name: 'Chicken', price: 42.50, ingredients: ['Cheese - ', 'Olives - ', 'Meat - ', 'Egg - ', 'Ham']},
    {id: 6, img: Ravioli, name: 'Vegetarian', price: 42.50, ingredients: ['Egg - ', 'Meat - ', 'Cheese - ', 'Ricotta - ', 'Bacon - ', 'Onio']},
    {id: 7, img: Lasanha, name: 'Chicken', price: 42.50, ingredients: ['Cheese - ', 'Olives - ', 'Meat - ', 'Egg - ', 'Ham']},
];

export default function Features () {
    const [filter, setFilter] = useState('pasta');

    return(
        <div className={styles.container}>
            <section className={styles.header}>
                <div />
                <img src={PizzaSlice} />
                <div />
            </section>

            <h1>Featured Dishes</h1>

            <section className={styles.buttons}>
                <div style={{backgroundColor: filter === 'pasta' ? '#548C1D' : undefined}} onClick={() => setFilter('pasta')}>
                    <span style={{color: filter === 'pasta' ? '#fff' : undefined}}>Pasta</span>
                </div>

                <div style={{backgroundColor: filter === 'pizza' ? '#548C1D' : undefined}} onClick={() => setFilter('pizza')}>
                    <span style={{color: filter === 'pizza' ? '#fff' : undefined}}>Pizzas</span>
                </div>

                <div style={{backgroundColor: filter === 'salad' ? '#548C1D' : undefined}} onClick={() => setFilter('salad')}>
                    <span style={{color: filter === 'salad' ? '#fff' : undefined}}>Salads</span>
                </div>

                <div style={{backgroundColor: filter === 'drink' ? '#548C1D' : undefined}} onClick={() => setFilter('drink')}>
                    <span style={{color: filter === 'drink' ? '#fff' : undefined}}>Drinks</span>
                </div>
            </section>

            <section className={styles.content}>
                {array.map((item, k) => (
                    <div key={k} className={styles.item}>
                        <img src={item.img} />

                        <div className={styles.rightContent}>
                            <div className={styles.rightContentHeader}>
                                <span className={styles.name}>{item.name}</span>
                                <span>R$ {item.price}</span>
                            </div>

                            <p>{item.ingredients} </p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}
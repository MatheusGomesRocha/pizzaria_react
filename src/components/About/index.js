import React from "react";

import ChefBigImg from '../../assets/images/chef.png';
import DrinkBigImg from '../../assets/images/drink.png';
import FoodBigImg from '../../assets/images/food-tray.png';
import RestaurantBigImg from '../../assets/images/restaurant.png';

import styles from './about.module.scss';

export default function About () {
    return(
        <div className={styles.container}>
            <section className={styles.header}>
                <h1>Vestibulum lorem sed risus ultricies</h1>
            </section>

            <section className={styles.content}>
                <div className={styles.row}>
                    <div className={styles.rowItem}>
                        <section>
                            <img src={FoodBigImg} />
                        </section>
                        <div>
                            <h2>Vitae elementum curabitur</h2>
                            <p>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                               Proin sed libero enim sed faucibus turpis in eu. Quis risus sed.
                            </p>
                        </div>
                    </div>
                    
                    <div className={styles.rowItem}>
                        <section>
                            <img src={RestaurantBigImg} />
                        </section>
                        <div>
                            <h2>Vitae elementum curabitur</h2>
                            <p>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                               Proin sed libero enim sed faucibus turpis in eu. Quis risus sed vulputate odio ut enim blandit. Duis convallis convallis tellus. 
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.rowItem}>
                        <section>
                            <img src={ChefBigImg} />
                        </section>
                        <div>
                            <h2>Vitae elementum curabitur</h2>
                            <p>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                               Proin sed libero enim sed faucibus turpis in eu. Quis risus sed vulputate odio ut enim blandit. Duis convallis convallis tellus 
                               id interdum velit laoreet id. Diam vulputate ut pharetra sit.
                            </p>
                        </div>
                    </div>
                    
                    <div className={styles.rowItem}>
                        <section>
                            <img src={DrinkBigImg} />
                        </section>
                        <div>
                            <h2>Vitae elementum curabitur</h2>
                            <p>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
import React from "react";

import PizzaImg1 from '../../assets/images/pizza-background.jpg';
import PinIcon from '../../assets/images/pin-icon.png';
import ClockIcon from '../../assets/images/clock-icon.png';
import PhoneIcon from '../../assets/images/phone-icon.png';

import styles from './contact.module.scss';

export default function Contact () {
    return(
        <div className={styles.container}>
            <img src={PizzaImg1} />
            <img style={{marginLeft: '3rem'}} src={PizzaImg1} />

            <section>
                <h2>get in touch</h2>
                <h1>Contact Info</h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div>
                    <img src={PinIcon} />
                    <span>Av. Bezzerra de Menezes 515, Fortaleza, CE</span>
                </div>

                <div>
                    <img src={ClockIcon} />
                    <span>Monday - Friday: 12am - 12pm</span>
                    <span>Saturday: 18pm - 12pm</span>
                </div>

                <div>
                    <img src={PhoneIcon} />
                    <span>(00) 12345-6789</span>
                </div>
            </section>
        </div>
    )
}
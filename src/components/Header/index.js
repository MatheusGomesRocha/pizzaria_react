import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../contexts/ModalContext";

import PizzaLogo from '../../assets/images/pizza-logo.png';

import styles from './header.module.scss';

export default function Header () {
    const [currentComponent, setCurrentComponent] = useState('home');

    const { email, logout, openModal } = useContext(ModalContext);

    return(
        <div className={styles.header}>
            <nav>
                <ul>
                    <li onClick={() => setCurrentComponent('home')}><a href="#home" style={{color: currentComponent === 'home' ? '#F9C122' : undefined}}>Home</a></li>
                    <li onClick={() => setCurrentComponent('menu')}><a href="#menu" style={{color: currentComponent === 'menu' ? '#F9C122' : undefined}}>Menu</a></li>
                    <li onClick={() => setCurrentComponent('features')}><a href="#features" style={{color: currentComponent === 'features' ? '#F9C122' : undefined}}>Features</a></li>
                    <li onClick={() => setCurrentComponent('contact')}><a href="#contact" style={{color: currentComponent === 'contact' ? '#F9C122' : undefined}}>Contact</a></li>

                    <li>
                        <img src={PizzaLogo} />
                    </li>

                    <li>(00) 12345-6789</li>
                    {/* <li>0 Items - R$ 0,00</li>
                    <li>
                        <div className={styles.button}>
                            <span>Book a Table</span>
                        </div>
                    </li> */}

                    {email ?
                        <li onClick={logout}>{email}</li>
                    : 
                        <li onClick={openModal}>Login / Sign Up</li>
                    }
                </ul>
            </nav>
        </div>
    )
}
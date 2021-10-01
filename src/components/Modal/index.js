import React, { useState } from "react";

import styles from './modal.module.scss';

export default function Modal () {
    const [whatForm, setWhatForm] = useState('login');

    return(
        <div className={styles.container}>
            <div className={styles.modal}>
                <section onClick={whatForm === 'login' ? () => setWhatForm('sign_up') : () => setWhatForm('login')} className={whatForm === 'login' ? styles.dividerShowLogin : styles.dividerShowSignUp} />
            </div>
        </div>
    )
}
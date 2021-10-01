import React, { useState } from "react";

import GoogleIcon from '../../assets/images/google.png';
import AppleIcon from '../../assets/images/apple.png';
import FacebookIcon from '../../assets/images/facebook.png';

import styles from './modal.module.scss';

export default function Modal () {
    const [whatForm, setWhatForm] = useState('login');

    const DefaultForm = (props) => {
        return(
            <form style={{right: props.login ? 0 : '60%'}} className={styles.defaultForm}>
                <h1>Sign {props.signUp ? 'up' : 'in'} to Pizza Home</h1>

                <div className={styles.otherAuth}>
                    <div>
                        <img width={32} height={32} src={GoogleIcon} />
                    </div>

                    <div>
                        <img width={32} height={32} src={AppleIcon} />
                    </div>

                    <div>
                        <img width={32} height={32} src={FacebookIcon} />
                    </div>
                </div>

                <div className={styles.lineText}>
                    <div />
                    <span>Or do it via E-mail</span>
                    <div />
                </div>

                <div className={styles.inputArea}>
                    <label>E-mail</label>
                    <input placeholder="user@mail.com" type="email" />
                </div>

                <div className={styles.inputArea}>
                    <label>Password</label>
                    <input placeholder="Password" type="password" />
                </div>

                {props.signUp ?
                    <div className={styles.inputArea}>
                        <label>Confirm Password</label>
                        <input placeholder="Confirm Password" type="password" />
                    </div>
                    :
                    undefined
                } 

                <input className={styles.submit} type="submit" value="Submit" />

                <span className={styles.changeForm} onClick={props.signUp ? () => setWhatForm('login') : () => setWhatForm('sign_up')}>{props.signUp ? 'Already' : "Don't"} have an account?</span>
            </form>
        )
    }

    return(
        <div className={styles.container}>
            <div className={styles.modal}>
                <section className={whatForm === 'login' ? styles.dividerShowSignUp : styles.dividerShowLogin} />

                <div>
                    <DefaultForm login={true} />
                </div>

                <div className={styles.hideOnSmallDevices}>
                    <DefaultForm signUp={true} />
                </div>
                
            </div>
        </div>
    )
}
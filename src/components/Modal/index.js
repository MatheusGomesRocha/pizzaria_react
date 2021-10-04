import React, { useContext, useState } from "react";

import GoogleIcon from '../../assets/images/google.png';
import AppleIcon from '../../assets/images/apple.png';
import FacebookIcon from '../../assets/images/facebook.png';

import { ModalContext } from '../../contexts/ModalContext';

import { api } from '../../services/api';

import styles from './modal.module.scss';

export default function Modal () {
    const [whatForm, setWhatForm] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    const [errorMsg, setErrorMsg] = useState('');

    const { closeModal } = useContext(ModalContext);

    function signUp (e) {
        if(!email || !password || !confirmPassword) {
            setErrorMsg('All fields are required');
            e.preventDefault();
            return;
        } else if (password !== confirmPassword) {
            setErrorMsg('Password are not equals');
            e.preventDefault();
            return;
        } else {
            e.preventDefault();

            api.post('create-user', {
                email: email,
                password: password,
            }).then((res) => {
                if(res.data.result) {
                    console.log(res.data.result);
                    closeModal();
                } else {
                    setErrorMsg(res.data.error);
                    return;
                }
            }).catch((err) => console.log(err));
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.modal}>
                <div onClick={closeModal} className={styles.closeModal}>
                    <span>X</span>
                </div>
                
                <section className={whatForm === 'login' ? styles.dividerShowSignUp : styles.dividerShowLogin} />

                <div className={styles.hideOnSmallDevices}>
                    <form method='post' onSubmit={(e) => signUp(e)} style={{right:'60%'}} className={styles.defaultForm}>
                        <h1>Sign up to Pizza Home</h1>

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

                        {errorMsg ?
                            <div className={styles.errorMsg}>
                                <span>Error: {errorMsg}</span>
                            </div>
                        : undefined}

                        <div className={styles.inputArea}>
                            <label>E-mail</label>
                            <input value={email} onChange={v => setEmail(v.target.value)} placeholder="user@mail.com" type="email" name="email" />
                        </div>

                        <div className={styles.inputArea}>
                            <label>Password</label>
                            <input onChange={v => setPassword(v.target.value)} placeholder="Password" type="password" name="password" />
                        </div>
                      
                        <div className={styles.inputArea}>
                            <label>Confirm Password</label>
                            <input onChange={v => setConfirmPassword(v.target.value)} placeholder="Confirm Password" type="password" />
                        </div>

                        <input className={styles.submit} type="submit" value="Submit" />

                        <span className={styles.changeForm} onClick={() => setWhatForm('login')}>Already have an account?</span>
                    </form>
                </div>

                {/* ------------------------ */}
                {/* ------------------------ */}

                <div>
                    <form method='post' onSubmit={undefined} style={{right: 0}} className={styles.defaultForm}>
                        <h1>Sign in to Pizza Home</h1>

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
                            <input value={emailLogin} onChange={v => setEmailLogin(v.target.value)} placeholder="user@mail.com" type="email" name="emailLogin" />
                        </div>

                        <div className={styles.inputArea}>
                            <label>Password</label>
                            <input value={passwordLogin} onChange={v => setPasswordLogin(v.target.value)} placeholder="Password" type="password" name="passwordLogin" />
                        </div>

                        <input className={styles.submit} type="submit" value="Submit" />

                        <span className={styles.changeForm} onClick={() => setWhatForm('sign_up')}>Don't have an account?</span>
                    </form>
                </div>
                
                {/* ------------------------ */}
                {/* ------------------------ */}
            </div>
        </div>
    )
}
import React, { useContext, useState, useEffect } from 'react';

import { ModalContext } from '../../contexts/ModalContext';
import { api } from '../../services/api';

import PizzaDemo1 from '../../assets/images/pizza-demo-1.png';

import styles from './orderModal.module.scss';

export default function OrderModal () {
    const [isFilled, setIsFilled] = useState(true); 
    const [isFilled2, setIsFilled2] = useState(false); 
    const [isFilled3, setIsFilled3] = useState(false); 

    const [progress, setProgress] = useState(false); 
    const [progress2, setProgress2] = useState(false); 
    const [progress3, setProgress3] = useState(false); 

    const [cartArray, setCartArray] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

    const { email, closeOrderModal } = useContext(ModalContext);

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
    }, []);


    function continue1() {
        setProgress(true);
        setIsFilled(false);
        setIsFilled2(true);
        setIsFilled3(false);
    }

    function continue2() {
        setProgress2(true);
        setIsFilled(false);
        setIsFilled2(false);
        setIsFilled3(true);
    }

    function back1() {
        setProgress(false);
        setIsFilled(true);
        setIsFilled2(false);
        setIsFilled3(false);
    }

    function back2() {
        setProgress2(false);
        setIsFilled(false);
        setIsFilled2(true);
        setIsFilled3(false);
    }

    return(
        <div className={styles.container}>
            <div className={styles.modal}>
                <div onClick={closeOrderModal} className={styles.closeModal}>
                    <span>X</span>
                </div>

                <div className={styles.header}>
                    {/* //////////////// */}

                    <div className={styles.progress}>
                        <div className={progress ? styles.progressFilled : undefined}></div> 
                    </div>
                    <div className={styles.ball}>
                        <div className={progress ? styles.ballFilled : undefined}></div>
                        <span>1</span>
                    </div>

                    {/* //////////////// */}

                    <div className={styles.progress}>
                        <div className={progress2 ? styles.progressFilled : undefined}></div> 
                    </div>
                    <div className={styles.ball}>
                        <div className={progress2 ? styles.ballFilled : undefined}></div>
                        <span>2</span>
                    </div>

                    {/* //////////////// */}

                    <div className={styles.progress}>
                        <div className={progress3 ? styles.progressFilled : undefined}></div> 
                    </div>
                    <div className={styles.ball}>
                        <div className={progress3 ? styles.ballFilled : undefined}></div>
                        <span>3</span>
                    </div>
                </div>

                <div style={{display: isFilled3 ? 'flex' : undefined, alignItems: isFilled3 ? 'center' : undefined, justifyContent: isFilled3 ? 'center' : undefined}} className={styles.content}>
                    {isFilled &&
                        <>
                            <h1 style={{marginLeft: '5%'}}>Items</h1>

                            <table>
                            <tr>
                                <th style={{width: '10%'}}></th>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                            
                            {cartArray.map((item, k) => (
                                <tr key={k}>
                                    <td style={{width: 80, height: 80}}> <img src={PizzaDemo1} /> </td>
                                    <td>{item.productName}</td>
                                    <td>{item.productQuantity}</td>
                                    <td>R$ {item.productPrice.toFixed(2)}</td>
                                </tr>
                            ))}
                        </table>
                        </>
                    }

                    {isFilled2 &&
                        <form>
                            <h1>Address</h1>

                            <div className={styles.inputArea}>
                                <label>CEP</label>
                                <input placeholder="CEP" />
                            </div>

                            <div className={styles.rowInput}>
                                <div className={styles.inputArea}>
                                    <label>District</label>
                                    <input placeholder="District" />
                                </div>

                                <div className={styles.inputArea}>
                                    <label>City</label>
                                    <input className={styles.disabled} placeholder="Disabled" disabled={true} />
                                </div>
                            </div>

                            <div className={styles.rowInput}>
                                <div className={styles.inputArea}>
                                    <label>Street</label>
                                    <input placeholder="Street" />
                                </div>

                                <div className={styles.inputArea}>
                                    <label>Number</label>
                                    <input placeholder="Number" />
                                </div>
                            </div>
                        </form>
                    }

                    {isFilled3 &&
                        <h1 style={{textAlign: 'center', width: '70%', lineHeight: '3.5rem'}}>It's all god now, click in CONTINUE to finish your order</h1>
                    }
                </div>

                <div className={styles.footer}>
                    <div className={styles.left}>
                        {isFilled ?
                            <>
                                <span>Total items: <span className={styles.text}>{quantity}</span></span>
                                <span>Subtotal: <span className={styles.text}>R$ {price}</span></span>
                            </>
                        :
                            <div onClick={isFilled2 ? back1 : back2} className={styles.backButton}>
                                <span>← Go back</span>
                            </div>
                        }
                    </div>

                    <div onClick={isFilled ? continue1 : continue2} className={styles.continueButton}>
                        <span>Continue →</span>
                    </div>
                </div>
            
                
            </div>
        </div>
    )
}
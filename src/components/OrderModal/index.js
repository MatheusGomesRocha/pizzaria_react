import React, { useContext } from 'react';

import { ModalContext } from '../../contexts/ModalContext';

import styles from './orderModal.module.scss';

export default function OrderModal () {
    const { closeOrderModal } = useContext(ModalContext);

    return(
        <div className={styles.container}>
            <div className={styles.modal}>
                <div onClick={closeOrderModal} className={styles.closeModal}>
                    <span>X</span>
                </div>
            </div>
        </div>
    )
}
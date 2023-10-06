import React from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';

export const Subscribe = () => {
    return (
        <div className={styles.base}>
            <div className={styles.content}>
                <div className={styles.description}>
                    Subscribe to our newsletter for latest updates
                </div>
                <div className={styles.form}>
                    <div className={styles.iconBlock}>
                        <div className={styles.icon} />
                    </div>
                    <input type="text" placeholder="Enter your email address" />
                    <button className={styles.button}>
                        <Image
                            src="/common/button-airplane.png"
                            width={50}
                            height={50}
                            alt="button-airplane"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

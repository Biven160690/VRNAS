import React from 'react';

import styles from './styles.module.scss';

export const Loader = () => {
    return (
        <div className={styles.container}>
            <span className={styles.loader} />
        </div>
    )
};

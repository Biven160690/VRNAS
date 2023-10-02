import React from 'react';
import Image from 'next/image';

export type Props = { partners: string[] };

import styles from './styles.module.scss';

export const Partners = ({ partners }: Props) => {
    return (
        <div className={styles.base}>
            <div className={styles.titleBlock}>
                <h2 className={styles.title}>Our Trusted Partners</h2>
                <p className={styles.subtitle}>
                    Discover the Companies We Work With
                </p>
            </div>
            <div className={styles.circleBlock}>
                {partners.map((_, index) => {
                    return (
                        <div className={styles.hafCircle} key={index}>
                            {index === 1 &&
                                partners.map((partner, index) => {
                                    return (
                                        <div
                                            className={styles.partner}
                                            key={index}
                                        >
                                            <Image
                                                src={`/partners/${partner}.png`}
                                                width={68}
                                                height={19}
                                                alt={`${partner}`}
                                                key={index}
                                            />
                                        </div>
                                    );
                                })}
                        </div>
                    );
                })}
                <div className={styles.block} />
                <div className={styles.hero} />
            </div>
        </div>
    );
};

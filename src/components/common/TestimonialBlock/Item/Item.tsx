import React from 'react';
import cx from 'classnames';
import Image from 'next/image';

import { Testimonial } from '../../../../graphql/__generated__/resolvers-types';

import styles from './styles.module.scss';

export type Props = { testimonial: Testimonial; isStartAnimation: boolean };

export const Item = ({ testimonial, isStartAnimation }: Props) => {
    const { img, comment, role, firstName, lastName } = testimonial;

    const [shotTooltip, setTooltip] = React.useState<boolean>(false);

    return (
        <div
            className={cx(
                styles.base,
                shotTooltip && styles.base__shotTooltip,
                isStartAnimation && styles.base_startAnimation
            )}
        >
            <div
                className={styles.block}
                onMouseEnter={() => setTooltip(true)}
                onMouseLeave={() => setTooltip(false)}
            >
                <Image
                    src={`/clients/${img}.png`}
                    width={50}
                    height={50}
                    alt={`${img}`}
                />
                <div className={styles.illumination} />
                <div className={styles.tooltip}>
                    <div className={styles.tooltipBg}>
                        <div className={styles.content}>
                            <div className={styles.comment}>{comment}</div>
                            <div className={styles.userInfo}>
                                <p className={styles.firstName}>{firstName}</p>
                                <p className={styles.lastName}>{lastName}</p>
                                <p className={styles.dash}>-</p>
                                <p className={styles.role}>{role}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.border} />
                </div>
            </div>
        </div>
    );
};

import React from 'react';

import { Item } from './Item/Item';

import { Testimonial } from '../../../graphql/__generated__/resolvers-types';
import styles from './styles.module.scss';

export type Props = { testimonials: Testimonial[] };

export const Testimonials = ({ testimonials }: Props) => {
    return (
        <div className={styles.circleBlock}>
            {testimonials.map((testimonial, index) => {
                return <Item testimonial={testimonial} key={index} />;
            })}
            <div className={styles.content}>
                <div className={styles.titleBlock}>
                    <h2 className={styles.title}>TESTIMONIAL</h2>
                    <p className={styles.description}>
                        What Our Clients Are Saying
                    </p>
                </div>
                <div className={styles.heroBlock}>
                    <div className={styles.ellipse} />
                    <div className={styles.hero} />
                    <div className={styles.illumination} />
                </div>
            </div>
        </div>
    );
};

import React from 'react';
import { Pricing as PricingProps } from '../../../graphql/__generated__/resolvers-types';
import styles from './styles.module.scss';
import Image from 'next/image';
import { useWindowScroll } from '@/utils/hooks/useWindowScroll';
import cx from 'classnames'

const currenciesType: { [key: string]: string } = {
    usd: '$',
};

const getCurrencyType = (key: string) => {
    const currentType = currenciesType[key];

    if (currentType) {
        return currentType;
    }

    throw Error(`CurrencyType is not valid  ${key}`);
};

const getDays = (seconds: number) => Math.floor(seconds / (3600 * 24));

export type Props = { pricing: PricingProps };

export const Pricing = ({ pricing }: Props) => {
    const { description, priceContent } = pricing;
    const { total, currentType, periodGuarantee } = priceContent;

    const { isStartAnimation, ref } = useWindowScroll(-50);

    return (
        <div ref={ref} className={cx(styles.base, isStartAnimation && styles.base_startAnimation)}>
            <div className={styles.titleBlock}>
                <h3 className={styles.title}>our pricing</h3>
                <h2 className={styles.subtitle}>
                    Affordable VR Services for Everyone
                </h2>
                <p className={styles.text}>
                    At VRNas, we believe that everyone should have access to the
                    benefits of VR. Thats why we offer a range of pricing
                    options to meet the needs of any budget.
                </p>
            </div>
            <div className={styles.content}>
                <div className={styles.description}>
                    {description.map(({ title, description }, index) => {
                        return (
                            <div
                                className={styles.descriptionBlock}
                                key={index}
                            >
                                <Image
                                    src={`/pricing/pricing.png`}
                                    width={42}
                                    height={42}
                                    alt="pricing"
                                />

                                <div className={styles.descriptionContent}>
                                    <p className={styles.descriptionTitle}>
                                        {title}
                                    </p>
                                    <p className={styles.descriptionText}>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={styles.hero} />
                <div className={styles.priceContent}>
                    <p className={styles.header}>Start from</p>
                    <div className={styles.priceBlock}>
                        <div className={styles.currentType}>
                            {getCurrencyType(currentType)}
                        </div>
                        <div className={styles.total}>{total}</div>
                    </div>
                    <button className={styles.button}>get started</button>
                    <p className={styles.periodGuarantee}>
                        {getDays(periodGuarantee)} Days Money back Guarantee
                    </p>
                </div>
            </div>
            <div className={styles.illumination} />
        </div>
    );
};

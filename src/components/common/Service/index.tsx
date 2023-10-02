'use client';

import React from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';
import { Service as ServiceData } from '../../../graphql/__generated__/resolvers-types';

export type Props = { services: ServiceData[] };

const FIRST_ROW = [0, 50, 100];
const NEXT_ROWS = [-100, -50, 0];
const TABLET_INDENT = [0, 0, 0];
const AMOUNT_CARDS_IN_ROW = 3;

const getTopIndent = (
    amountCards: number,
    isTabletBrekpoint: boolean = false
) => {
    const arrayIndents = [];
    const amountRows = amountCards / AMOUNT_CARDS_IN_ROW;
    let i = 1;

    while (i < amountRows) {
        if (i < 2) {
            arrayIndents.push(
                ...(isTabletBrekpoint ? TABLET_INDENT : FIRST_ROW)
            );
        }
        arrayIndents.push(...(isTabletBrekpoint ? TABLET_INDENT : NEXT_ROWS));
        ++i;
    }
    return arrayIndents;
};

export const Service = ({ services }: Props) => {
    const [arrayIndents, setArrayIndents] = React.useState(() =>
        getTopIndent(services.length)
    );

    React.useEffect(() => {
        const handleResize = () => {
            const isIndentZero = arrayIndents.every((indent) => indent === 0);
            const { clientWidth } = document.documentElement;

            if (clientWidth <= 950 && !isIndentZero) {
                setArrayIndents(getTopIndent(services.length, true));
            }

            if (clientWidth > 950 && isIndentZero) {
                setArrayIndents(getTopIndent(services.length));
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [services, arrayIndents]);

    return (
        <section className={styles.service}>
            <div className={styles.service_info}>
                <div className={styles.service_headerBlock}>
                    <div className={styles.service_title}>OUR SERVICE</div>
                    <div className={styles.service_subtitle}>Our Service</div>
                </div>
                <div className={styles.service_mainText}>
                    We use the latest VR hardware and software to create
                    high-quality VR experiences that are accessible and
                    affordable. Our goal is to provide exceptional customer
                    service and support, and our team is always available to
                    answer any questions and address any concerns you may have.
                </div>
            </div>
            <div className={styles.service_illumination} />
            <div className={styles.service_content}>
                {services.map(({ img, description, title }, index) => {
                    return (
                        <div
                            className={styles.service_card}
                            style={{
                                marginTop: `${arrayIndents[index]}px`,
                            }}
                            key={index}
                        >
                            <Image
                                src={`/services/${img}.png`}
                                width={48}
                                height={48}
                                alt={`${img}`}
                                className={styles.service_img}
                            />

                            <h3 className={styles.service_header}>{title}</h3>
                            <p className={styles.service_text}>{description}</p>
                            <div className={styles.service_hoverBlock}>
                                <button className={styles.service_button}>
                                    LEARN MORE
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

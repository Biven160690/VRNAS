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
    const [arrayIndents, setArrayIndents] = React.useState<number[]>([]);
    const firstStep = React.useRef<boolean>(true);

    React.useLayoutEffect(() => {
        const handleResize = () => {
            const { clientWidth } = document.documentElement;

            setArrayIndents(
                getTopIndent(services.length, clientWidth <= 950 ? true : false)
            );
        };

        if (firstStep.current) {
            handleResize();

            firstStep.current = false;
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [services, arrayIndents]);

    return (
        <section className={styles.service}>
            <div className={styles.info}>
                <div className={styles.headerBlock}>
                    <div className={styles.title}>OUR SERVICE</div>
                    <div className={styles.subtitle}>Our Service</div>
                </div>
                <div className={styles.mainText}>
                    We use the latest VR hardware and software to create
                    high-quality VR experiences that are accessible and
                    affordable. Our goal is to provide exceptional customer
                    service and support, and our team is always available to
                    answer any questions and address any concerns you may have.
                </div>
            </div>
            <div className={styles.illumination} />
            <div className={styles.content}>
                {services.map(({ img, description, title }, index) => {
                    return (
                        <div
                            className={styles.card}
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
                                className={styles.img}
                            />

                            <h3 className={styles.header}>{title}</h3>
                            <p className={styles.text}>{description}</p>
                            <div className={styles.hoverBlock}>
                                <button className={styles.button}>
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

// const [arrayIndents, setArrayIndents] = React.useState(() =>
// getTopIndent(services.length)
// );

// React.useLayoutEffect(() => {
// const handleResize = () => {
//     const isIndentZero = arrayIndents.every((indent) => indent === 0);
//     const { clientWidth } = document.documentElement;

//     if (clientWidth <= 950 && !isIndentZero) {
//         setArrayIndents(getTopIndent(services.length, true));
//     }

//     if (clientWidth > 950 && isIndentZero) {
//         setArrayIndents(getTopIndent(services.length));
//     }
// };

// window.addEventListener('resize', handleResize);

// return () => window.removeEventListener('resize', handleResize);
// }, [services, arrayIndents]);

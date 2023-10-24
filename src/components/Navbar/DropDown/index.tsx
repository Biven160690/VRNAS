'use client';

import React from 'react';
import styles from './styles.module.scss';
import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

const getLink = (string: string) => {
    return string.split(' ').reduce((acc, item, index, array) => {
        if (/[A-Za-z]/.test(item)) {
            acc += item.toLowerCase() + (array.length - 1 === index ? '' : '-');
        }

        return acc;
    }, '');
};

export type Props = {
    links: string[];
    menuLink: string;
};

export const DropDownBlock = ({ links, menuLink }: Props) => {
    const [isShow, setIsShow] = React.useState<boolean>(false);
    const ref = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        const listener = (event: Event) => {
            const target = event.target as HTMLDivElement & EventTarget;
            if (!ref.current || ref.current.contains(target)) {
                return;
            }

            setIsShow(false);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, []);

    return (
        <div className={cx(styles.base, isShow && styles.base__show)} ref={ref}>
            <div className={styles.block} onClick={() => setIsShow((prev) => !prev)}>
                <a className={styles.link}>
                    {menuLink}
                </a>
                <button
                    className={styles.button}
                >
                    <Image
                        src="/common/vector.png"
                        width={7}
                        height={5}
                        alt="vector"
                        className={styles.arrow}
                    />
                </button>
            </div>
            <div className={styles.dropDown}>
                <ul className={styles.links}>
                    {links.map((link, index) => {
                        return (
                            <li className={styles.link} key={index}>
                                <Link href={`/${getLink(link)}`}>{link}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

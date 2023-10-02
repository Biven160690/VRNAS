'use client';

import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';
import styles from './styles.module.scss';
import React from 'react';
import { DropDownBlock } from './DropDown';

const links = {
    page: ['Pricing Plan', 'FAQ', 'Teams & Conditions', 'Privacy Policy'],
    blog: ['Recent article', 'Our Team', 'Detail Service'],
};

export const Navbar = () => {
    const [isActive, setIsActive] = React.useState<boolean>(false);

    return (
        <header className={cx(styles.base, isActive && styles.base_show)}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <Image
                        src="/common/main_logo.png"
                        width={101}
                        height={30}
                        alt="mainLogo"
                    />
                </div>
                <div className={styles.column}>
                    <nav className={styles.nav}>
                        <ul className={styles.links}>
                            <li className={styles.item}>
                                <Link href="/" className={styles.link}>
                                    Home
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link href="/about" className={styles.link}>
                                    About us
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link href="/service" className={styles.link}>
                                    Service
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <DropDownBlock
                                    links={links.page}
                                    menuLink="Page"
                                />
                            </li>
                            <li className={styles.item}>
                                <DropDownBlock
                                    links={links.blog}
                                    menuLink="Blog"
                                />
                            </li>
                        </ul>
                    </nav>
                    <div
                        className={styles.iconBlock}
                        onClick={() => setIsActive((prev) => !prev)}
                    >
                        <div className={styles.icon}>
                            <div className={styles.bar1} />
                            <div className={styles.bar2} />
                            <div className={styles.bar3} />
                        </div>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.buttonBlock}>
                        <div className={styles.button}>
                            <button>Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

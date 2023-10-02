import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.scss';
import { useQuery } from '@apollo/client';
import { getContactInfo } from '../../graphql/queries/queries';
import {
    SocialPlatform,
    ContactInfo,
} from '../../graphql/__generated__/resolvers-types';

export interface ContactInfoFooter {
    socialPlatforms: Array<SocialPlatform>;
    contactInfo: Array<ContactInfo>;
}

export const Footer = () => {
    const { data, loading, error } =
        useQuery<ContactInfoFooter>(getContactInfo);

    if (loading || error) {
        return null;
    }

    const { socialPlatforms, contactInfo } = data;

    return (
        <footer className={styles.base}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.contactInfo}>
                        <div className={styles.logo}>
                            <Image
                                src="/common/main_logo.png"
                                width={101}
                                height={30}
                                alt="mainLogo"
                            />
                        </div>
                        <div className={styles.socialBlock}>
                            {socialPlatforms.map(({ name }, index) => {
                                return (
                                    <div className={styles.block} key={index}>
                                        <div className={styles.socialLink}>
                                            <Image
                                                src={`/social/${name}.png`}
                                                width={18.5}
                                                height={15}
                                                alt={`${name}`}
                                                />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={styles.nav}>
                        <div className={styles.navContent}>
                            <div className={styles.column}>
                                <ul className={styles.links}>
                                    <h4>Quicklinks</h4>
                                    <li className={styles.item}>
                                        <Link href="/" className={styles.link}>
                                            Home
                                        </Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link
                                            href="/pricing-plan"
                                            className={styles.link}
                                        >
                                            Pricing Plan
                                        </Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link
                                            href="/service"
                                            className={styles.link}
                                        >
                                            Service
                                        </Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link
                                            href="/blog"
                                            className={styles.link}
                                        >
                                            Blog
                                        </Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link
                                            href="/our-team"
                                            className={styles.link}
                                        >
                                            Our Team
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.column}>
                                <ul className={styles.links}>
                                    <h4>Support</h4>
                                    <li className={styles.item}>
                                        <Link
                                            href="/about"
                                            className={styles.link}
                                        >
                                            About us
                                        </Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link
                                            href="/contact"
                                            className={styles.link}
                                        >
                                            Contact us
                                        </Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link
                                            href="/faq"
                                            className={styles.link}
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link
                                            href="/teams-conditions"
                                            className={styles.link}
                                        >
                                            Teams & Conditions
                                        </Link>
                                    </li>
                                    <li className={styles.item}>
                                        <Link
                                            href="/privacy-policy"
                                            className={styles.link}
                                        >
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.column}>
                                <div className={styles.contactBlock}>
                                    <h4>Need Help?</h4>
                                    {contactInfo.map(
                                        ({ option, description }, index) => {
                                            return (
                                                <div
                                                    className={styles.contact}
                                                    key={index}
                                                >
                                                    <Image
                                                        src={`/contact/${option}.png`}
                                                        width={17.5}
                                                        height={17}
                                                        alt={`${option}`}
                                                    />
                                                    <p className={styles.info}>
                                                        {description}
                                                    </p>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    © Copyright 2023, All Rights Reserved
                </div>
            </div>
        </footer>
    );
};

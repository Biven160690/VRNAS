import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

import styles from './styles.module.scss';
import { Video } from '@/components/common/Video';
import { useWindowScroll } from '@/utils/hooks/useWindowScroll';

const LINK_VIDEO =
    'https://res.cloudinary.com/codelife/video/upload/v1637805738/intro_l5ul1k.mp4';

export const About = () => {
    const { isStartAnimation, ref } = useWindowScroll(550);

    return (
        <section
            ref={ref}
            className={cx(styles.about, isStartAnimation && styles.about_startAnimation)}
        >
            <div className={styles.bg}>
                <div className={styles.hero} />
                <div className={styles.illumination} />
                <div className={styles.video}>
                    <Video src={LINK_VIDEO} width={198} height={128} />
                </div>
            </div>
            <div className={styles.description}>
                <h3 className={styles.title}>ABOUT US</h3>
                <h2 className={styles.subtitle}>
                    Bring your events to life like never before with our VR
                    services.
                </h2>
                <p className={styles.text}>
                    VRNas is a leading provider of VR services for education,
                    entertainment, architecture, and events. Our mission is to
                    bring the power of virtual reality to everyone, allowing
                    them to explore new worlds, learn in new ways, and
                    experience events in a whole new light.
                </p>
                <div className={styles.services}>
                    <div className={styles.service}>
                        <Image
                            src="/common/check-box-outline.png"
                            width={16}
                            height={16}
                            alt="check-box-outline"
                        />
                        <p className={styles.serviceText}>
                            Cutting-Edge Technology
                        </p>
                    </div>
                    <div className={styles.service}>
                        <Image
                            src="/common/check-box-outline.png"
                            width={16}
                            height={16}
                            alt="check-box-outline"
                        />
                        <p className={styles.serviceText}>
                            Versatile Applications
                        </p>
                    </div>
                    <div className={styles.service}>
                        <Image
                            src="/common/check-box-outline.png"
                            width={16}
                            height={16}
                            alt="check-box-outline"
                        />
                        <p className={styles.serviceText}>
                            Affordable and Accessible
                        </p>
                    </div>
                </div>
                <button className={styles.button}>read more</button>
            </div>
        </section>
    );
};

import { Member } from '../../../graphql/__generated__/resolvers-types';
import Image from 'next/image';
import { Video } from '@/components/common/Video';
import { Advantages } from '@/components/common/Advantages';
import { animated, useSpring } from '@react-spring/web';

import styles from './styles.module.scss';

export type Props = {
    clients: Member[];
};

const LINK_VIDEO =
    'https://res.cloudinary.com/codelife/video/upload/v1637805738/intro_l5ul1k.mp4';

export const Discover = ({ clients }: Props) => {
    const { number } = useSpring({
        from: { number: 0 },
        to: { number: 32 },
        config: { duration: 1500 },
    });

    return (
        <section className={styles.discover}>
            <div className={styles.hero}>
                <div className={styles.light} />
            </div>
            <div className={styles.content}>
                <div className={styles.description}>
                    <div className={styles.title}>
                        Immerse Yourself in Virtual Reality
                    </div>
                    <div className={styles.text}>
                        Experience Unforgettable Events in VR. Bring your events
                        to life like never before with our VR services
                    </div>
                </div>
                <div className={styles.buttonBlock}>
                    <button className={styles.button}>discover more</button>
                    <div className={styles.blinkContainer}>
                        <div className={styles.blink} />
                    </div>
                </div>
                <div className={styles.clients}>
                    <div className={styles.block}>
                        {clients.map(({ img }, index) => {
                            return (
                                <Image
                                    src={`/clients/${img}.png`}
                                    width={50}
                                    height={50}
                                    alt={`${img}`}
                                    key={index}
                                />
                            );
                        })}
                        <div className={styles.amountBlock}>
                            <animated.div className={styles.amount}>
                                {number.to((val) => Math.floor(val))}
                            </animated.div>
                            <div className={styles.measurement}>K+</div>
                            <div className={styles.underline} />
                        </div>
                        <p>Happy Client</p>
                    </div>
                    <div className={styles.video}>
                        <Video src={LINK_VIDEO} width={198} height={128} />
                    </div>
                </div>
            </div>
            <Advantages />
        </section>
    );
};

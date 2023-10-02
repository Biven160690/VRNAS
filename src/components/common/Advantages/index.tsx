import styles from './styles.module.scss';

import Image from 'next/image';

export const Advantages = () => {
    return (
        <div className={styles.base}>
            <div className={styles.block}>
                <div className={styles.column}>
                    <Image
                        src="/advantage/expertise.png"
                        width={70}
                        height={70}
                        alt="expertise"
                    />
                    <div className={styles.title}>Expertise</div>
                    <div className={styles.text}>
                        Our team consists of experienced VR developers,
                        designers, and technicians who have a passion for VR and
                        a commitment to delivering quality work and give the
                        best service
                    </div>
                </div>
                <div className={styles.column}>
                    <Image
                        src="/advantage/customization.png"
                        width={70}
                        height={70}
                        alt="customization"
                    />
                    <div className={styles.title}>Customization</div>
                    <div className={styles.text}>
                        Every client is unique, and we believe every VR
                        experience should be too. We`&apos;`ll work with you to
                        create a customized solution that meets your specific
                        needs and goals
                    </div>
                </div>
                <div className={styles.column}>
                    <Image
                        src="/advantage/service.png"
                        width={70}
                        height={70}
                        alt="service"
                    />
                    <div className={styles.title}>Service</div>
                    <div className={styles.text}>
                        We believe in providing exceptional customer service,
                        from initial consultation to final delivery. Our goal is
                        to ensure you`&apos;`re satisfied with every aspect of
                        your VR experience.
                    </div>
                </div>
            </div>
        </div>
    );
};

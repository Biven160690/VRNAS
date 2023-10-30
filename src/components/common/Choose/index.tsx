import { Accordion } from '@/components/common/Accordion';
import styles from './styles.module.scss';
import { Video } from '@/components/common/Video';
import { Advantage } from '../../../graphql/__generated__/resolvers-types';
import cx from 'classnames';
import bg from '../../../../public/bg/about-bg.png';
import { StaticImageData } from 'next/image';

const LINK_VIDEO =
    'https://res.cloudinary.com/codelife/video/upload/v1637805738/intro_l5ul1k.mp4';

export type Props = {
    advantages: Advantage[];
    classNames?: {
        base?: string;
        video?: string;
    };
    heroImg: StaticImageData;
};

export const Choose = ({ advantages, classNames, heroImg }: Props) => {
    return (
        <section className={cx(styles.base, classNames?.base)}>
            <div className={styles.description}>
                <h3 className={styles.title}>WHY CHOOSE US</h3>
                <h2 className={styles.subtitle}>
                    Why Choose Us for Your VR Needs
                </h2>
                <Accordion advantages={advantages} />
            </div>
            <div className={styles.bg}>
                <div
                    className={styles.img}
                    style={{
                        backgroundImage: `url(${heroImg.src}), url(${bg.src})`,
                    }}
                />
                <div className={styles.illumination} />
                <div className={cx(styles.video, classNames?.video)}>
                    <Video src={LINK_VIDEO} width={198} height={128} />
                </div>
            </div>
        </section>
    );
};

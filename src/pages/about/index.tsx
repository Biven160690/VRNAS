import { Title } from '@/components/common/Title';
import { AboutSection } from './aboutSection';
import { Advantages } from '@/components/common/Advantages';
import { useQuery } from '@apollo/client/react/hooks/useQuery';
import { aboutPage } from '../../graphql/queries/queries';
import { Loader } from '@/components/Loader';
import { useRouter } from 'next/router';
import { Choose } from '@/components/common/Choose';
import styles from './styles.module.scss';

import heroImg from '../../../public/pages/about/hero-choose-section.png';

const chooseStyles = {
    base: styles.chooseBase,
    video: styles.chooseVideo,
};

export default function About() {
    const router = useRouter();

    const { data, loading, error } = useQuery(aboutPage);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        router.push('/404');
    }

    const { advantages } = data;

    return (
        <div className={styles.main}>
            <Title title="About us" />
            <AboutSection />
            <div className={styles.advantegesContainer}>
                <div className={styles.advantegesContent}>
                    <div className={styles.advantegesTitle}>WHY CHOOSE US</div>
                    <div className={styles.advantegesText}>
                        Empowering Your Virtual Reality Experience
                    </div>
                </div>
                <Advantages />
            </div>
            <Choose advantages={advantages} heroImg={heroImg} classNames={chooseStyles} />
        </div>
    );
}

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
import { TemsBlock } from './team';
import { Advantage, TeamMember } from '@/graphql/__generated__/resolvers-types';

const chooseStyles = {
    base: styles.chooseBase,
    video: styles.chooseVideo,
};

export type Team = Omit<TeamMember, 'contactInfo'>;

export type AboutPage = {
    advantages: Advantage[];
    team: Team[];
};

const getTopUser= (team: Team[]) => [...team.slice(0, 4)];

export default function About() {
    const router = useRouter();

    const { data, loading, error } = useQuery<AboutPage>(aboutPage);

    if (loading) {
        return <Loader />;
    }

    if (error || !data) {
        router.push('/404');
        return;
    }

    const { advantages, team } = data;

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
            <Choose
                advantages={advantages}
                heroImg={heroImg}
                classNames={chooseStyles}
            />
            <TemsBlock team={getTopUser(team)} />
        </div>
    );
}

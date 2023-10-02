'use client';

import Image from 'next/image';

import { homePage } from '../graphql/queries/queries';
import {
    Member,
    Service as ServiceData,
    Advantage,
    Testimonial,
    Pricing as PricingProps,
    Articles as ArticleProps,
} from '../graphql/__generated__/resolvers-types';

import { Advantages } from '../components/common/Advantages';
import { Video } from '../components/common/Video';

import styles from './styles.module.scss';
import React from 'react';
import { requestData } from '../utils/hoc/requestData';
import { Service } from '../components/common/Service';
import { Accordion } from '../components/common/Accordion';
import { Testimonials } from '../components/common/TestimonialBlock';
import { Pricing } from '../components/common/Pricing';
import { Partners } from '../components/common/Partners';
import { Articles } from '@/components/Articles';
import { Discover } from './home/discover';
import { About } from './home/abount';

export interface ClientsData {
    data: {
        clients: Member[];
        services: ServiceData[];
        advantages: Advantage[];
        testimonials: Testimonial[];
        pricing: PricingProps;
        partners: string[];
        articles: ArticleProps;
    };
}

const LINK_VIDEO =
    'https://res.cloudinary.com/codelife/video/upload/v1637805738/intro_l5ul1k.mp4';

function Index({ data }: ClientsData) {
    const {
        clients,
        services,
        advantages,
        testimonials,
        pricing,
        partners,
        articles,
    } = data;

    return (
        <div className={styles.home}>
            <Discover clients={clients} />
            <About />
            <section className={styles.services}>
                <Service services={services} />
            </section>
            <section className={styles.choose}>
                <div className={styles.choose_description}>
                    <h3 className={styles.choose_title}>WHY CHOOSE US</h3>
                    <h2 className={styles.choose_subtitle}>
                        Why Choose Us for Your VR Needs
                    </h2>
                    <Accordion advantages={advantages} />
                </div>
                <div className={styles.choose_bg}>
                    <div className={styles.choose_img} />
                    <div className={styles.choose_illumination} />
                    <div className={styles.choose_video}>
                        <Video src={LINK_VIDEO} width={198} height={128} />
                    </div>
                </div>
            </section>
            <section className={styles.video}>
                <div className={styles.video_container}>
                    <div className={styles.video_titleBlock}>
                        <h2 className={styles.video_title}>
                            HOW TO GET STARTED
                        </h2>
                        <p className={styles.video_description}>
                            Bringing Your Virtual Reality Dreams to Life
                        </p>
                        <div className={styles.video_illumination} />
                    </div>
                    <Video
                        src={LINK_VIDEO}
                        width={1100}
                        height={650}
                        classNames={{
                            base: styles.video_clip,
                            play: styles.video_play,
                            pause: styles.video_pause,
                            replay: styles.video_replay,
                        }}
                        isNeedControls
                    >
                        <div className={styles.video_headerBlock}>
                            <h4 className={styles.video_header}>VR Service</h4>
                            <p className={styles.video_text}>
                                How to get started
                            </p>
                        </div>
                    </Video>
                    <button className={styles.video_button}>GET STARTED</button>
                </div>
            </section>
            <section className={styles.testimonials}>
                <Testimonials testimonials={testimonials} />
            </section>
            <section className={styles.pricing}>
                <Pricing pricing={pricing} />
            </section>
            <section className={styles.partners}>
                <Partners partners={partners} />
            </section>
            <section className={styles.articles}>
                <Articles articles={articles} />
            </section>
        </div>
    );
}

const Home = requestData(Index, homePage);

export default Home;

import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.scss';
import Slider from 'react-slick';
import { ArticleCard } from '../../../graphql/__generated__/resolvers-types';
import Image from 'next/image';
import cx from 'classnames';

export type Props = { popular: ArticleCard[] };

export type PaginationProps = {
    index: number;
    onChange: (index: number) => void;
    isActive: boolean;
};

export const PopularArticle = ({ popular }: Props) => {
    const [currentIndexSlide, setCurrentIndexSlide] = React.useState<number>(0);

    const settingsSlider = {
        dots: true,
        speed: 300,
        infinite: false,
        arrows: false,
        customPaging: (index: number) => (
            <div className={styles.block}>
                <div
                    className={cx(
                        styles.dote,
                        index === currentIndexSlide && styles.dote__active
                    )}
                />
            </div>
        ),
        afterChange: (currentSlide: number) =>
            setCurrentIndexSlide(currentSlide),
        dotsClass: styles.customPaging,
    };

    return (
        <div className={styles.popularContainer}>
            <div className={styles.carouselContainer}>
                <h3 className={styles.containerTitle}>Popular Article</h3>
                <Slider {...settingsSlider}>
                    {popular.map(({ img, title, description }, index) => {
                        return (
                            <div key={index}>
                                <div className={styles.cardContainer}>
                                    <Image
                                        src={`/articles/popular/${img}.png`}
                                        alt={`${img}`}
                                        layout="fill"
                                    />
                                    <div className={styles.cardContent}>
                                        <h3 className={styles.cardTitle}>
                                            {title}
                                        </h3>

                                        <p className={styles.cardDescription}>
                                            {description}
                                        </p>
                                    </div>

                                    <button className={styles.cardButton}>
                                        <Image
                                            src={`/common/arrow.png`}
                                            width={16}
                                            height={16}
                                            alt="arrow"
                                        />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

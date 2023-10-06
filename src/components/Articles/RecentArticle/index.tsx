import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { ArticleCard } from '@/graphql/__generated__/resolvers-types';
import Image from 'next/image';

import styles from './styles.module.scss';

export type Props = { articles: ArticleCard[] };

export type ElementDivProps = React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>;

const trackVerticalStyles = {
    top: '2px',
    right: '2px',
    width: '2px',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    borderRadius: '32px'
};

const thumbVerticalStyles = {
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: '32px',
};

export const RecentArticle = ({ articles }: Props) => {
    return (
        <div className={styles.base}>
            <div className={styles.container}>
                <h3 className={styles.header}>Recent Article</h3>
                <Scrollbars
                    style={{ height: 430, width: '100%'}}
                    thumbSize={20}
                    renderTrackVertical={(props: ElementDivProps) => (
                        <div
                        {...props}
                        style={{
                            ...props.style,
                            ...trackVerticalStyles,
                        }}
                        />
                    )}
                    renderThumbVertical={(props: ElementDivProps) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                ...thumbVerticalStyles,
                            }}
                        />
                    )}
                >
                    {articles.map((article, index) => {
                        return (
                            <div className={styles.card} key={index}>
                                <Image
                                    src={`/articles/recent/${article.img}.png`}
                                    width={142}
                                    height={91}
                                    alt="recentArticleImg"
                                />
                                <div className={styles.content}>
                                    <div className={styles.description}>
                                        <div className={styles.title}>
                                            {article.title}
                                        </div>
                                        <div className={styles.text}>
                                            {article.description}
                                        </div>
                                    </div>
                                    <button className={styles.button}>
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
                </Scrollbars>
            </div>
        </div>
    );
};

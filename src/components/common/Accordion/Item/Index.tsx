import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

import styles from './styles.module.scss';
import { Advantage } from '../../../../graphql/__generated__/resolvers-types';

export type Props = {
    advantage: Advantage;
    handleClick: () => void;
    isShowDescription: boolean;
    classNames?: {
        baseItem?: string;
        description?: string;
        titleBlock?: string;
    };
};

export const Item = ({
    advantage,
    handleClick,
    isShowDescription,
    classNames,
}: Props) => {
    const { title, description } = advantage;

    return (
        <div
            className={cx(
                styles.base,
                isShowDescription && styles.base_showDescription,
                classNames?.baseItem
            )}
        >
            <div className={cx(styles.titleBlock, classNames?.titleBlock)}>
                <h3 className={styles.title}>{title}</h3>
                <button className={styles.button} onClick={() => handleClick()}>
                    <Image
                        src="/common/vector.png"
                        width={7}
                        height={5}
                        alt="vector"
                        className={styles.arrow}
                    />
                </button>
            </div>
            <p className={cx(styles.description, classNames?.description)}>
                {description}
            </p>
        </div>
    );
};

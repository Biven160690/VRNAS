import React from 'react';
import cx from 'classnames';

import { Item } from './Item/Index';
import { Advantage } from '../../../graphql/__generated__/resolvers-types';

import styles from './styles.module.scss';

export type Props = {
    advantages: Advantage[];
    classNames?: {
        base?: string;
        baseItem?: string;
        description?: string;
        titleBlock?: string;
    };
};

export const Accordion = ({ advantages, classNames }: Props) => {
    const [activeItem, setActiveItem] = React.useState<number>(-1);

    const onClick = (activeIndex: number) => () => {
        setActiveItem((prevIndex) =>
            prevIndex === activeIndex ? -1 : activeIndex
        );
    };

    return (
        <div className={cx(styles.base, classNames?.base)}>
            <div className={styles.block}>
                {advantages.map((advantage, index) => {
                    return (
                        <Item
                            advantage={advantage}
                            key={index}
                            handleClick={onClick(index)}
                            isShowDescription={activeItem === index}
                            classNames={{
                                baseItem: classNames?.baseItem,
                                description: classNames?.description,
                                titleBlock: classNames?.titleBlock,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

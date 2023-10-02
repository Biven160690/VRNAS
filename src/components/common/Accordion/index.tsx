import React from 'react';

import { Item } from './Item/Index';
import { Advantage } from '../../../graphql/__generated__/resolvers-types';

import styles from './styles.module.scss';

export type Props = { advantages: Advantage[] };

export const Accordion = ({ advantages }: Props) => {
    const [activeItem, setActiveItem] = React.useState<number>(-1);

    const onClick = (activeIndex: number) => () => {
        setActiveItem((prevIndex) =>
            prevIndex === activeIndex ? -1 : activeIndex
        );
    };

    return (
        <div className={styles.base}>
            <div className={styles.block}>
                {advantages.map((advantage, index) => {
                    return (
                        <Item
                            advantage={advantage}
                            key={index}
                            handleClick={onClick(index)}
                            isShowDescription={activeItem === index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

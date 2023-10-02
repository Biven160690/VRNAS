import { ReactNode } from 'react';

import { Footer } from '../Footer';
import { Navbar } from '../Navbar';

import styles from './styles.module.scss';

export type Props = { children: ReactNode };

export const Layout = ({ children }: Props) => {
    return (
        <div className={styles.wrapper}>
            <Navbar />
            <main className={styles.content}> {children} </main>
            <Footer />
        </div>
    );
};

import Head from 'next/head';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, [router]);

    return (
        <div className={styles.error}>
            <Head>
                <title>Error</title>
            </Head>
            <div className={styles.error_container}>
                <h2 className={styles.error_title}>404</h2>
                <h3 className={styles.error_subtitle}>
                    Something is going wrong...
                </h3>
            </div>
        </div>
    );
};

export default Error;

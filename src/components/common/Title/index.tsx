import styles from './styles.module.scss';

export type Props = {
    title: string;
};

export const Title = ({ title }: Props) => {
    return (
        <div className={styles.base}>
            <div className={styles.body}>
                <div className={styles.ilumination} />
                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <div className={styles.navigationText}>
                        <p className={styles.text}>Home</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                        >
                            <path
                                d="M11.5313 9.5L7.03135 14L6.2251 13.1938L9.9376 9.5L6.24385 5.80625L7.0501 5L11.5313 9.5Z"
                                fill="white"
                            />
                        </svg>
                        <p className={styles.currentPage}>{title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

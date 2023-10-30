import React from 'react';

export const useWindowScroll = (startAnimationPosition: number) => {
    const ref = React.useRef<HTMLElement & HTMLDivElement | null>(null);
    const [isStartAnimation, setIsStartAnimation] = React.useState<boolean>(false);
    
    React.useEffect(() => {
        const currentElement = ref.current;

        if (!currentElement) {
            return;
        }

        const handleChange = () => {
            const elementPosition = currentElement.getBoundingClientRect().top;

            if (elementPosition <= startAnimationPosition) {
                setIsStartAnimation(true);
            }
        };

        document.addEventListener('scroll', handleChange);

        return () => {
            document.removeEventListener('scroll', handleChange);
        };
    }, [ref, startAnimationPosition]);

    return { isStartAnimation, ref };
};

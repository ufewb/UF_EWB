import React, { useEffect, useRef } from 'react';

function Khanalthok_2014_18() {
    const fadeInSectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const section = fadeInSectionRef.current;
            if (section) {
                const rect = section.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                if (isVisible) {
                    section.classList.add('is-visible');
                } else {
                    section.classList.remove('is-visible');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger the event once on mount

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fade-in-section" ref={fadeInSectionRef}>
            <h1>Khanalthok (2014-2018)</h1>
        </div>
    );
}

export default Khanalthok_2014_18;

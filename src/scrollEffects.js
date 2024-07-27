import { useEffect } from 'react';

const useScrollFadeIn = () => {
    useEffect(() => {
        const handleScroll = () => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
            el.classList.add('show');
            }
        });
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
};      
export default useScrollFadeIn;


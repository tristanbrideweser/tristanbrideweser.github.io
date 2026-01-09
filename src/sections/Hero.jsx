import { useRef, useState, useEffect } from 'react';

const descriptions = [
    'Robotics Engineer',
    'Software Developer',
    'Innovation Enthusiast',
    'Problem Solver'
];

const Hero = () => {
    const contextRef = useRef(null);
    const headerRef = useRef(null);
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = descriptions[currentIndex];
        let timeout;

        if (!isDeleting && displayedText.length < currentText.length) {
            // Typing
            timeout = setTimeout(() => {
                setDisplayedText(currentText.slice(0, displayedText.length + 1));
            }, 100);
        } else if (!isDeleting && displayedText.length === currentText.length) {
            // Pause after typing complete
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 2000);
        } else if (isDeleting && displayedText.length > 0) {
            // Deleting
            timeout = setTimeout(() => {
                setDisplayedText(currentText.slice(0, displayedText.length - 1));
            }, 50);
        } else if (isDeleting && displayedText.length === 0) {
            // Move to next description
            setIsDeleting(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentIndex]);

    return (
        <section id="home" className="flex flex-col justify-end min-h-screen bg-primary">
            <div ref={contextRef}>
                <div style={ { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}>
                    <div ref={headerRef} 
                    className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
                    >
                        <p className='text-sm font-light tracking-[0.5rem] uppercase px-10 text-black'>
                            {displayedText}
                            <span className='inline-block w-0.5 h-[1em] ml-1 bg-black animate-pulse'>|</span>
                        </p>
                        <div className='px-10'>
                            <h1 className='flex flex-col flex-wrap gap-12 text-black uppercase banner-text-responsive sm:gap-16 md:block'>
                                Tristan Brideweser
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='relative px-10 text-black'>
                    <div className='absolute inset-x-0 border-t-2'></div>
                    <div className='py-12 sm:py-16 text-end'>
                        <p className='font-light uppercase value-text-responsive'>
                            Interdisciplinary Engineering, Robotics + Business & Technology @ Purdue University - West Lafayette
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
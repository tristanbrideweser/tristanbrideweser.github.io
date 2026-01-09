import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const About = () => {
    const aboutRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        gsap.set([titleRef.current, contentRef.current], {
            autoAlpha: 0,
            y: 30
        });

        tl.to(titleRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        })
        .to(contentRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.5");
    }, { scope: aboutRef });

    const aboutText = `I'm a passionate interdisciplinary engineer focused on robotics, software development, and innovation. Currently pursuing advanced degrees in Engineering/Robotics (MSE) and Business & Technology (MBT) at Purdue University, I combine technical expertise with business acumen to solve complex problems and drive meaningful impact.`;

    const additionalInfo = `Add more information about yourself here. This could include your interests, hobbies, values, or anything else you'd like visitors to know about you.`;

    return (
        <section 
            id="about" 
            ref={aboutRef}
            className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-10 lg:px-20 py-20 md:py-28"
            style={{ backgroundColor: 'var(--color-primary)' }}
        >
            <div className="w-full max-w-6xl mx-auto">
                <h2 
                    ref={titleRef}
                    className="banner-text-responsive font-bold mb-8 md:mb-12 lg:mb-16 tracking-tight uppercase"
                    style={{ color: 'var(--color-DarkLava)' }}
                >
                    About
                </h2>
                <div 
                    ref={contentRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16"
                >
                    {/* Left side - Text */}
                    <div className="flex flex-col justify-center">
                        <p 
                            className="value-text-responsive font-light leading-relaxed"
                            style={{ color: 'var(--color-SageGray)' }}
                        >
                            {aboutText}
                        </p>
                    </div>

                    {/* Right side - Headshot and Info Box */}
                    <div className="flex flex-col gap-6">
                        {/* Headshot placeholder */}
                        <div 
                            className="w-full aspect-square border-2 rounded-lg overflow-hidden flex items-center justify-center"
                            style={{ borderColor: 'var(--color-DarkLava)' }}
                        >
                            <div 
                                className="w-full h-full bg-gray-200 flex items-center justify-center"
                                style={{ backgroundColor: 'var(--color-SageGray)' }}
                            >
                                <span 
                                    className="text-sm uppercase tracking-wider"
                                    style={{ color: 'var(--color-primary)' }}
                                >
                                    Headshot Placeholder
                                </span>
                            </div>
                        </div>

                        {/* Info box below headshot */}
                        <div 
                            className="p-6 border-2 rounded-lg"
                            style={{ borderColor: 'var(--color-DarkLava)' }}
                        >
                            <p 
                                className="value-text-responsive font-light leading-relaxed"
                                style={{ color: 'var(--color-SageGray)' }}
                            >
                                {additionalInfo}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
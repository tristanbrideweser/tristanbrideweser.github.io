import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Resume = () => {
    const resumeRef = useRef(null);
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
    }, { scope: resumeRef });

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Tristan_Brideweser_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section 
            id="resume" 
            ref={resumeRef}
            className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-10 lg:px-20 py-20 md:py-28"
            style={{ backgroundColor: 'var(--color-primary)' }}
        >
            <div className="w-full max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12">
                    <h2 
                        ref={titleRef}
                        className="banner-text-responsive font-bold tracking-tight uppercase mb-6 md:mb-0"
                        style={{ color: 'var(--color-DarkLava)' }}
                    >
                        Resume
                    </h2>
                    <button
                        onClick={handleDownload}
                        className="px-8 py-4 uppercase tracking-wider text-sm font-light border-2 rounded-lg hover:bg-black hover:text-white transition-all duration-300 self-start md:self-auto"
                        style={{ 
                            borderColor: 'var(--color-DarkLava)',
                            color: 'var(--color-DarkLava)'
                        }}
                    >
                        Download PDF
                    </button>
                </div>
                <div 
                    ref={contentRef}
                    className="w-full h-[80vh] border-2 rounded-lg overflow-hidden shadow-lg"
                    style={{ borderColor: 'var(--color-DarkLava)' }}
                >
                    <iframe
                        src="/resume.pdf"
                        className="w-full h-full"
                        title="Resume PDF"
                    />
                </div>
            </div>
        </section>
    );
};

export default Resume;

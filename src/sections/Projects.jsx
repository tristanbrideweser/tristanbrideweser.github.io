import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Projects = () => {
    const projectsRef = useRef(null);
    const titleRef = useRef(null);
    const contentRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(0);

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
    }, { scope: projectsRef });

    const projects = [
        {
            title: "LazyROS",
            description: "A simple ROS2 terminal interface, inspired by the lazygit project.",
            link: "https://github.com/tristanbrideweser/lazyros",
            technologies: ["Rust", "ROS2"],
            demoUrl: "https://github.com/tristanbrideweser/lazyros"
        }, 
        {
            title: "Bionic Reader AR",
            description: "Creating an augmented reality (AR) pipeline to automatically detect and bionify text to increase reading speed and comprehension.",
            link: "https://github.com/tristanbrideweser/bionic-reader-ar",
            technologies: ["Python", "OpenCV", "PyTorch"],
            demoUrl: "https://github.com/tristanbridbioniceweser/lazyros"
        },
        {
            title: "Spritz",
            description: "Generating a sprite and animations from an input image",
            link: "https://github.com/tristanbrideweser/spritz",
            technologies: ["Python",, "PyTorch"],
            demoUrl: "https://github.com/tristanbridbioniceweser/spritz"
        }
    ];

    return (
        <section 
            id="projects" 
            ref={projectsRef}
            className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-10 lg:px-20 py-20 md:py-28"
            style={{ backgroundColor: 'var(--color-primary)' }}
        >
            <div className="w-full max-w-7xl mx-auto">
                <h2 
                    ref={titleRef}
                    className="banner-text-responsive font-bold mb-8 md:mb-12 lg:mb-16 tracking-tight uppercase"
                    style={{ color: 'var(--color-DarkLava)' }}
                >
                    Projects
                </h2>
                <div 
                    ref={contentRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                >
                    {/* Left side - Demo window */}
                    <div className="order-2 md:order-1">
                        <div 
                            className="w-full h-[60vh] md:h-[70vh] border-2 rounded-lg overflow-hidden shadow-lg"
                            style={{ borderColor: 'var(--color-DarkLava)' }}
                        >
                            <iframe
                                src={projects[selectedProject].demoUrl}
                                className="w-full h-full"
                                title={`${projects[selectedProject].title} Demo`}
                            />
                        </div>
                    </div>

                    {/* Right side - Scrollable project list */}
                    <div className="order-1 md:order-2 h-[60vh] md:h-[70vh] overflow-y-auto pr-2">
                        <div className="space-y-4">
                            {projects.map((project, index) => (
                                <div 
                                    key={index}
                                    onClick={() => setSelectedProject(index)}
                                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                                        selectedProject === index ? 'shadow-lg' : 'hover:shadow-md'
                                    }`}
                                    style={{ 
                                        borderColor: selectedProject === index 
                                            ? 'var(--color-DarkLava)' 
                                            : 'var(--color-SageGray)',
                                        backgroundColor: selectedProject === index 
                                            ? 'rgba(139, 139, 115, 0.1)' 
                                            : 'transparent'
                                    }}
                                >
                                    <h3 
                                        className="text-2xl md:text-3xl font-bold mb-2 uppercase"
                                        style={{ color: 'var(--color-DarkLava)' }}
                                    >
                                        {project.title}
                                    </h3>
                                    <p 
                                        className="value-text-responsive font-light mb-3 leading-relaxed"
                                        style={{ color: 'var(--color-SageGray)' }}
                                    >
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span 
                                                key={techIndex}
                                                className="px-3 py-1 text-xs uppercase tracking-wide rounded"
                                                style={{ 
                                                    backgroundColor: 'var(--color-SageGray)',
                                                    color: 'var(--color-primary)'
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { socials } from '../constants';

const Contact = () => {
    const contactRef = useRef(null);
    const contentRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useGSAP(() => {
        const tl = gsap.timeline();

        gsap.set(contentRef.current, {
            autoAlpha: 0,
            y: 30
        });

        tl.to(contentRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
        });
    }, { scope: contactRef });

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:tristan.brideweser@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}\n\nFrom: ${formData.email}`;
        window.location.href = mailtoLink;
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const getSocialIcon = (name) => {
        const lowerName = name.toLowerCase();
        if (lowerName.includes('linkedin')) return '💼';
        if (lowerName.includes('github')) return '🐙';
        if (lowerName.includes('twitter')) return '🐦';
        if (lowerName.includes('instagram')) return '📷';
        return '🔗';
    };

    return (
        <section 
            id="contact" 
            ref={contactRef}
            className="relative w-full px-6 md:px-10 lg:px-20 py-12 md:py-16"
            style={{ backgroundColor: 'var(--color-DarkLava)' }}
        >
            <div 
                ref={contentRef}
                className="w-full max-w-6xl mx-auto"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                    {/* Left side - Email form */}
                    <div>
                        <h2 
                            className="text-3xl md:text-4xl font-bold uppercase mb-6 tracking-tight"
                            style={{ color: 'var(--color-primary)' }}
                        >
                            Send a Message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-4 py-3 border-2 rounded-lg bg-transparent placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
                                    style={{ 
                                        borderColor: 'var(--color-primary)',
                                        color: 'var(--color-primary)'
                                    }}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    className="w-full px-4 py-3 border-2 rounded-lg bg-transparent placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all"
                                    style={{ 
                                        borderColor: 'var(--color-primary)',
                                        color: 'var(--color-primary)'
                                    }}
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border-2 rounded-lg bg-transparent placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all resize-none"
                                    style={{ 
                                        borderColor: 'var(--color-primary)',
                                        color: 'var(--color-primary)'
                                    }}
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-8 py-4 uppercase tracking-wider text-sm font-light border-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                                style={{ 
                                    borderColor: 'var(--color-primary)',
                                    color: 'var(--color-primary)'
                                }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right side - Social media icons */}
                    <div className="flex flex-col justify-center">
                        <h2 
                            className="text-3xl md:text-4xl font-bold uppercase mb-6 tracking-tight"
                            style={{ color: 'var(--color-primary)' }}
                        >
                            Connect
                        </h2>
                        <div className="flex flex-col gap-6">
                            <a
                                href="mailto:tristan.brideweser@gmail.com"
                                className="flex items-center gap-4 group"
                            >
                                <span className="text-4xl">✉️</span>
                                <span 
                                    className="value-text-responsive font-light uppercase tracking-wider group-hover:underline"
                                    style={{ color: 'var(--color-primary)' }}
                                >
                                    tristan.brideweser@gmail.com
                                </span>
                            </a>
                            {socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 group"
                                >
                                    <span className="text-4xl">{getSocialIcon(social.name)}</span>
                                    <span 
                                        className="value-text-responsive font-light uppercase tracking-wider group-hover:underline"
                                        style={{ color: 'var(--color-primary)' }}
                                    >
                                        {social.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

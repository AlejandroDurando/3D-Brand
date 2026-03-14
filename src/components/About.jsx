import React from 'react';
import { Compass, Shield, Anchor } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section container">
            <div className="grid grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="heading-l" style={{ marginBottom: '1.5rem' }}>
                        Into The <span className="text-primary">Unknown</span>
                    </h2>
                    <p className="text-lg text-muted" style={{ marginBottom: '2rem' }}>
                        Founded by veteran deep-sea explorers, DEEPBLUE brings you closer to the marine world in unparalleled comfort and safety. We believe that the ocean is the last great frontier, and our mission is to guide you through it.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="flex gap-4 items-center">
                            <div style={{ padding: '1rem', borderRadius: '1rem', background: 'rgba(0, 255, 213, 0.1)', color: 'var(--color-primary)' }}>
                                <Shield size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>5-Star Safety</h4>
                                <p className="text-muted">Impeccable safety record with master instructors.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center">
                            <div style={{ padding: '1rem', borderRadius: '1rem', background: 'rgba(0, 255, 213, 0.1)', color: 'var(--color-primary)' }}>
                                <Compass size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Pristine Locations</h4>
                                <p className="text-muted">Exclusive access to untouched coral reefs.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center">
                            <div style={{ padding: '1rem', borderRadius: '1rem', background: 'rgba(0, 255, 213, 0.1)', color: 'var(--color-primary)' }}>
                                <Anchor size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Premium Gear</h4>
                                <p className="text-muted">State-of-the-art diving equipment included.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ position: 'relative' }}>
                    {/* Decorative glass elements */}
                    <div className="glass-panel" style={{ position: 'relative', zIndex: 10, aspectRatio: '4/5', background: 'linear-gradient(145deg, rgba(10,25,47,0.8), rgba(10,25,47,0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '80%', height: '80%', borderRadius: '16px', background: 'url(https://images.unsplash.com/photo-1544551763-46a013bb70fb?q=80&w=2000&auto=format&fit=crop) center/cover' }}></div>
                    </div>
                    <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '200px', height: '200px', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.2, zIndex: 1, borderRadius: '50%' }}></div>
                </div>
            </div>
        </section>
    );
};

export default About;

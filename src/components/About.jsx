import React from 'react';
import { Cpu, Database, Network } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section container">
            <div className="grid grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="heading-l" style={{ marginBottom: '1.5rem' }}>
                        Empower Your <span className="text-primary">Data</span>
                    </h2>
                    <p className="text-lg text-muted" style={{ marginBottom: '2rem' }}>
                        Founded by industry-leading data scientists and engineers, NexusAI brings the power of enterprise machine learning to businesses of all sizes. We transform raw data into predictive insights, automating workflows and unlocking new revenue streams.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="flex gap-4 items-center">
                            <div style={{ padding: '1rem', borderRadius: '1rem', background: 'rgba(0, 255, 213, 0.1)', color: 'var(--color-primary)' }}>
                                <Cpu size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Custom AI Models</h4>
                                <p className="text-muted">Proprietary neural networks tailored directly to your business logic.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center">
                            <div style={{ padding: '1rem', borderRadius: '1rem', background: 'rgba(0, 255, 213, 0.1)', color: 'var(--color-primary)' }}>
                                <Database size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Data Engineering</h4>
                                <p className="text-muted">Robust automated pipelines to clean, structure, and store big data.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 items-center">
                            <div style={{ padding: '1rem', borderRadius: '1rem', background: 'rgba(0, 255, 213, 0.1)', color: 'var(--color-primary)' }}>
                                <Network size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Cloud Infrastructure</h4>
                                <p className="text-muted">Scalable, secure, and low-latency deployments across all major clouds.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ position: 'relative' }}>
                    {/* Decorative glass elements */}
                    <div className="glass-panel" style={{ position: 'relative', zIndex: 10, aspectRatio: '4/5', background: 'linear-gradient(145deg, rgba(10,25,47,0.8), rgba(10,25,47,0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '80%', height: '80%', borderRadius: '16px', background: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop) center/cover' }}></div>
                    </div>
                    <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '200px', height: '200px', background: 'var(--color-primary)', filter: 'blur(100px)', opacity: 0.2, zIndex: 1, borderRadius: '50%' }}></div>
                </div>
            </div>
        </section>
    );
};

export default About;

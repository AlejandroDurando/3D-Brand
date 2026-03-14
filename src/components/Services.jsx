import React from 'react';

const serviceData = [
    {
        title: 'Predictive Analytics',
        category: 'Analysis',
        timeline: '4-6 Weeks',
        roi: 'Avg 35% Boost',
        desc: 'Forecast market trends, customer behavior, and inventory needs before they happen using our advanced statistical modeling.'
    },
    {
        title: 'Process Automation',
        category: 'Operations',
        timeline: '2-4 Weeks',
        roi: 'Save 40hrs/wk',
        desc: 'Replace repetitive manual tasks with intelligent agents capable of processing documents, emails, and data entry autonomously.'
    },
    {
        title: 'Computer Vision',
        category: 'Quality Control',
        timeline: '8-12 Weeks',
        roi: '99.9% Accuracy',
        desc: 'Implement real-time visual inspection systems for manufacturing, security, or retail environments.'
    }
];

const Services = () => {
    return (
        <section id="services" className="section container" style={{ paddingTop: '8rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative' }}>
                <h2 className="heading-l" style={{ marginBottom: '1rem' }}>Enterprise <span className="text-primary">Solutions</span></h2>
                <p className="text-lg text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>End-to-end artificial intelligence services designed to give your business a quantifiable competitive edge.</p>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'var(--color-primary)', filter: 'blur(150px)', opacity: 0.1, zIndex: -1, borderRadius: '50%' }}></div>
            </div>

            <div className="grid grid-cols-3 gap-8">
                {serviceData.map((service, idx) => (
                    <div key={idx} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{service.category}</span>
                            <h3 style={{ fontSize: '1.75rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                            <p className="text-muted" style={{ lineHeight: 1.6 }}>{service.desc}</p>
                        </div>

                        <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--color-surface-glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <div className="text-muted" style={{ fontSize: '0.875rem' }}>Implementation</div>
                                <div style={{ fontWeight: 600 }}>{service.timeline}</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div className="text-muted" style={{ fontSize: '0.875rem' }}>Impact</div>
                                <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '1.25rem' }}>{service.roi}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;

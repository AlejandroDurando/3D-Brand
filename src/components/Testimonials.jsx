import React from 'react';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "CTO, FinTech Global",
        text: "NexusAI completely revolutionized our fraud detection systems. Their custom predictive models reduced false positives by 40% in the first month alone.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    },
    {
        name: "Michael Chen",
        role: "Director of Operations",
        text: "We were drowning in manual data entry. NexusAI built an automated pipeline that saved us thousands of hours and dramatically reduced human error.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    },
    {
        name: "Elena Rodriguez",
        role: "VP of Product",
        text: "The speed at which the Nexus team deployed our machine learning microservices was unprecedented. A truly elite group of engineers.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section container" style={{ paddingTop: '8rem', paddingBottom: '8rem', position: 'relative' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="heading-l" style={{ marginBottom: '1rem' }}>Client <span className="text-primary">Success Stories</span></h2>
                <p className="text-lg text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>Hear from industry leaders who have transformed their operations with NexusAI.</p>
            </div>

            <div className="grid grid-cols-3 gap-8">
                {testimonials.map((t, idx) => (
                    <div key={idx} className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <img src={t.image} alt={t.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-primary)' }} />
                            <div>
                                <h4 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{t.name}</h4>
                                <p className="text-muted" style={{ fontSize: '0.875rem' }}>{t.role}</p>
                            </div>
                        </div>
                        <p className="text-muted" style={{ lineHeight: 1.6, fontStyle: 'italic' }}>"{t.text}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;

import React from 'react';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Advanced Diver",
        text: "An absolutely breathtaking experience. The Spline scene doesn't even do justice to how beautiful the actual reefs are. The instructors made me feel completely safe.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    },
    {
        name: "Michael Chen",
        role: "First Time Diver",
        text: "I was terrified of the ocean before coming here. The team at DEEPBLUE was incredibly patient and professional. I'm now hooked for life!",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    },
    {
        name: "Elena Rodriguez",
        role: "Underwater Photographer",
        text: "The locations they took us to were pristine. Some of the most vibrant coral and marine life I've ever captured on camera. Highly recommend.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section container" style={{ paddingTop: '8rem', paddingBottom: '8rem', position: 'relative' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="heading-l" style={{ marginBottom: '1rem' }}>Diver <span className="text-primary">Stories</span></h2>
                <p className="text-lg text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>Don't just take our word for it. Hear from those who have explored the depths with us.</p>
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

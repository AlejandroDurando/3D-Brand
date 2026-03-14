import React from 'react';

const courseData = [
    {
        title: 'Open Water Diver',
        level: 'Beginner',
        duration: '3-4 Days',
        price: '$450',
        desc: 'Your first step into the underwater world. Get certified to dive anywhere up to 18m.'
    },
    {
        title: 'Advanced Open Water',
        level: 'Intermediate',
        duration: '2 Days',
        price: '$350',
        desc: 'Expand your skills with deep diving and underwater navigation specialties.'
    },
    {
        title: 'Rescue Diver',
        level: 'Advanced',
        duration: '3 Days',
        price: '$500',
        desc: 'Learn to prevent and manage problems in the water. The most challenging and rewarding course.'
    }
];

const Courses = () => {
    return (
        <section id="courses" className="section container" style={{ paddingTop: '8rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem', position: 'relative' }}>
                <h2 className="heading-l" style={{ marginBottom: '1rem' }}>Our <span className="text-primary">Courses</span></h2>
                <p className="text-lg text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>From your very first breath underwater to advanced rescue training, we have a course for you.</p>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'var(--color-primary)', filter: 'blur(150px)', opacity: 0.1, zIndex: -1, borderRadius: '50%' }}></div>
            </div>

            <div className="grid grid-cols-3 gap-8">
                {courseData.map((course, idx) => (
                    <div key={idx} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{course.level}</span>
                            <h3 style={{ fontSize: '1.75rem', marginTop: '0.5rem', marginBottom: '1rem' }}>{course.title}</h3>
                            <p className="text-muted" style={{ lineHeight: 1.6 }}>{course.desc}</p>
                        </div>

                        <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--color-surface-glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <div className="text-muted" style={{ fontSize: '0.875rem' }}>Duration</div>
                                <div style={{ fontWeight: 600 }}>{course.duration}</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div className="text-muted" style={{ fontSize: '0.875rem' }}>Price</div>
                                <div style={{ fontWeight: 600, color: 'var(--color-primary)', fontSize: '1.25rem' }}>{course.price}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Courses;

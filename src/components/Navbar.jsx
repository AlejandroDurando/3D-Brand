import React from 'react';

const Navbar = ({ scrolled }) => {
    return (
        <nav style={{
            position: 'fixed',
            top: scrolled ? 0 : '-100px', // Hide when at the very top so it doesn't overlap Spline's native header
            left: 0,
            right: 0,
            padding: '1.5rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 100,
            background: 'rgba(3, 10, 22, 0.9)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            transition: 'top 0.4s ease, background 0.4s ease'
        }}>
            <div style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>
                NEXUS<span className="text-primary">AI</span>
            </div>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <a href="#about" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 500 }}>About Us</a>
                <a href="#services" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 500 }}>Services</a>
                <a href="#testimonials" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 500 }}>Success Stories</a>
                <a href="#contact" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>Get Started</a>
            </div>
        </nav>
    );
};

export default Navbar;

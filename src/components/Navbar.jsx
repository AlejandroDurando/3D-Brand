import React from 'react';

const Navbar = ({ scrolled }) => {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            padding: '1.5rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 100,
            background: scrolled ? 'rgba(3, 10, 22, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
            transition: 'all 0.4s ease'
        }}>
            <div style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>
                DEEP<span className="text-primary">BLUE</span>
            </div>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <a href="#about" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 500 }}>About</a>
                <a href="#courses" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 500 }}>Courses</a>
                <a href="#testimonials" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 500 }}>Testimonials</a>
                <a href="#contact" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>Book Dive</a>
            </div>
        </nav>
    );
};

export default Navbar;

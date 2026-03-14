import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
            {/* 3D Target Background */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                <Spline scene="https://prod.spline.design/RlKmy39JTZy3LpCl/scene.splinecode" />
            </div>

            {/* Overlay Content */}
            <div className="container" style={{
                position: 'relative',
                zIndex: 10,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingTop: '4rem',
                pointerEvents: 'none' // Let interactions pass through to Spline
            }}>
                <div style={{ maxWidth: '800px', pointerEvents: 'auto' }}>
                    <h1 className="heading-xl" style={{ marginBottom: '1.5rem', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                        Discover the <br />
                        <span className="text-gradient">Ocean's Depths</span>
                    </h1>
                    <p className="text-lg text-muted" style={{ marginBottom: '2.5rem', maxWidth: '600px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                        Experience the ultimate underwater adventure. Premium PADI certified courses and guided dives in the world's most pristine reefs.
                    </p>
                    <div className="flex gap-4">
                        <a href="#courses" className="btn-primary">Explore Courses</a>
                        <a href="#about" className="btn-secondary">Our Story</a>
                    </div>
                </div>

                <div style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    pointerEvents: 'auto'
                }}>
                    <span className="text-muted" style={{ fontSize: '0.875rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll down</span>
                    <div className="animate-float" style={{
                        width: '40px', height: '40px',
                        borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <ArrowDown size={20} color="var(--color-primary)" />
                    </div>
                </div>
            </div>

            {/* Gradient Overlay to blend transition */}
            <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0, height: '20vh',
                background: 'linear-gradient(to top, var(--color-bg), transparent)',
                zIndex: 5, pointerEvents: 'none'
            }} />
        </section>
    );
};

export default Hero;

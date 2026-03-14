import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
            {/* 3D Target Background - The Spline scene contains the main hero text and navigation visually */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                <Spline scene="https://prod.spline.design/RlKmy39JTZy3LpCl/scene.splinecode" />
            </div>

            {/* Overlay Content - Removed text to avoid overlapping with Spline native text */}
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

            {/* Gradient Overlay to blend transition to next section */}
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

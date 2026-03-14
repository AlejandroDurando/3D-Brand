import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ background: 'rgba(3, 10, 22, 0.95)', borderTop: '1px solid var(--color-surface-glass-border)' }}>
            <div className="container">
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h2 className="heading-m" style={{ marginBottom: '1.5rem' }}>Ready to <span className="text-primary">Transform?</span></h2>
                        <p className="text-muted" style={{ marginBottom: '3rem', maxWidth: '400px' }}>
                            Schedule a free consultation with our AI architects to discover how NexusAI can drive growth for your business.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ padding: '0.75rem', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', color: 'var(--color-primary)' }}>
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="text-muted" style={{ fontSize: '0.875rem' }}>Email Us</div>
                                    <div style={{ fontWeight: 500 }}>enterprise@nexusai.dev</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ padding: '0.75rem', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', color: 'var(--color-primary)' }}>
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <div className="text-muted" style={{ fontSize: '0.875rem' }}>Call Us</div>
                                    <div style={{ fontWeight: 500 }}>+1 (800) 555-DATA</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ padding: '0.75rem', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', color: 'var(--color-primary)' }}>
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div className="text-muted" style={{ fontSize: '0.875rem' }}>Headquarters</div>
                                    <div style={{ fontWeight: 500 }}>100 Innovation Blvd, Tech Hub City</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-panel">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Request an API Key or Demo</h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <input type="text" placeholder="First Name" style={{ flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', outline: 'none' }} />
                                <input type="text" placeholder="Last Name" style={{ flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', outline: 'none' }} />
                            </div>
                            <input type="email" placeholder="Work Email" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', outline: 'none' }} />
                            <textarea placeholder="Tell us about your data challenges..." rows="4" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', outline: 'none', resize: 'vertical' }}></textarea>
                            <button className="btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }}>Submit Request</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

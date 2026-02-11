import { useState, useEffect, useCallback } from 'react';

const fallbackTestimonials = [
    { id: 1, quote: 'NovaTech transformed how our team collaborates. We cut project delivery time by 40% in the first quarter alone.', author: 'Sarah Chen', role: 'VP of Engineering', company: 'TechFlow Inc.' },
    { id: 2, quote: 'The analytics dashboard gives us insights we never had before. It\'s like having a data scientist on the team 24/7.', author: 'Marcus Johnson', role: 'Head of Operations', company: 'ScaleUp Labs' },
    { id: 3, quote: 'Switching to NovaTech was the best decision we made this year. The ROI was visible within the first month.', author: 'Emily Rodriguez', role: 'CEO', company: 'BrightPath Solutions' },
    { id: 4, quote: 'The automation features saved our team 20 hours per week. We can now focus on what actually matters.', author: 'David Park', role: 'Product Manager', company: 'InnoVerse' },
];

export default function Testimonials({ testimonials = [] }) {
    const [current, setCurrent] = useState(0);
    const items = testimonials.length > 0 ? testimonials : fallbackTestimonials;

    const next = useCallback(() => {
        setCurrent((p) => (p + 1) % items.length);
    }, [items.length]);

    const prev = () => {
        setCurrent((p) => (p - 1 + items.length) % items.length);
    };

    // Auto-rotate
    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section className="section testimonials" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Testimonials</div>
                    <h2 className="section-title">Loved by 10,000+ Teams</h2>
                    <p className="section-subtitle">
                        See what our customers have to say about their experience with NovaTech.
                    </p>
                </div>

                <div className="testimonial-slider">
                    <div
                        className="testimonial-track"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {items.map((t) => (
                            <div key={t.id} className="testimonial-slide">
                                <div className="testimonial-card">
                                    <div className="testimonial-logo">{t.company}</div>
                                    <p className="testimonial-quote">{t.quote}</p>
                                    <div className="testimonial-author-name">{t.author}</div>
                                    <div className="testimonial-author-role">{t.role}, {t.company}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="testimonial-dots">
                        {items.map((_, i) => (
                            <button
                                key={i}
                                className={`testimonial-dot${i === current ? ' active' : ''}`}
                                onClick={() => setCurrent(i)}
                            />
                        ))}
                    </div>

                    <div className="testimonial-arrows">
                        <button className="testimonial-arrow" onClick={prev}>←</button>
                        <button className="testimonial-arrow" onClick={next}>→</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

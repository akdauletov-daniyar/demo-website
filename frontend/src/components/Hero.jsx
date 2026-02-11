export default function Hero({ onBookDemo }) {
    const barHeights = [35, 55, 40, 70, 50, 85, 60, 75, 45, 90, 65, 80];

    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="hero-badge-dot" />
                        Now in public beta — Try it free
                    </div>

                    <h1 className="hero-title">
                        Build Smarter.<br />
                        <span className="gradient-text">Scale Faster.</span>
                    </h1>

                    <p className="hero-description">
                        NovaTech empowers teams with AI-driven analytics, seamless automation,
                        and real-time collaboration tools — all in one powerful platform.
                    </p>

                    <div className="hero-ctas">
                        <a href="#trial" className="btn btn-primary btn-lg">Start Free Trial</a>
                        <button className="btn btn-secondary btn-lg" onClick={onBookDemo}>
                            Book a Demo →
                        </button>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <div className="hero-stat-value">10K+</div>
                            <div className="hero-stat-label">Active Teams</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-value">99.9%</div>
                            <div className="hero-stat-label">Uptime SLA</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-value">4.9★</div>
                            <div className="hero-stat-label">User Rating</div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-screenshot">
                        <div className="hero-screenshot-inner">
                            <div className="screenshot-topbar">
                                <div className="screenshot-dot" />
                                <div className="screenshot-dot" />
                                <div className="screenshot-dot" />
                            </div>
                            <div className="screenshot-content">
                                <div className="screenshot-sidebar">
                                    {[1, 2, 3, 4, 5, 6].map(i => (
                                        <div key={i} className={`screenshot-sidebar-item${i === 2 ? ' active' : ''}`} />
                                    ))}
                                </div>
                                <div className="screenshot-main">
                                    <div className="screenshot-chart">
                                        {barHeights.map((h, i) => (
                                            <div
                                                key={i}
                                                className="chart-bar"
                                                style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
                                            />
                                        ))}
                                    </div>
                                    <div className="screenshot-row">
                                        <div className="screenshot-block" />
                                        <div className="screenshot-block" />
                                        <div className="screenshot-block" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-float hero-float-1">
                        <div className="float-value">↑ 42%</div>
                        <div className="float-label">Productivity</div>
                    </div>
                    <div className="hero-float hero-float-2">
                        <div className="float-value">$1.2M</div>
                        <div className="float-label">Cost Saved</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

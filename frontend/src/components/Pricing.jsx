const plans = [
    {
        name: 'Starter',
        price: '29',
        desc: 'Perfect for small teams getting started.',
        features: [
            'Up to 5 team members',
            '10 GB storage',
            'Basic analytics dashboard',
            'Email support',
            'API access',
        ],
        cta: 'Get Started',
        featured: false,
    },
    {
        name: 'Pro',
        price: '79',
        desc: 'For growing teams that need more power.',
        features: [
            'Up to 25 team members',
            '100 GB storage',
            'Advanced analytics & AI insights',
            'Priority support + live chat',
            'Custom integrations',
            'Workflow automation',
        ],
        cta: 'Start Free Trial',
        featured: true,
        badge: 'Most Popular',
    },
    {
        name: 'Enterprise',
        price: '199',
        desc: 'For organizations that need it all.',
        features: [
            'Unlimited team members',
            'Unlimited storage',
            'Custom AI model training',
            '24/7 dedicated account manager',
            'SSO & advanced security',
            'On-premise deployment option',
            'SLA guarantee',
        ],
        cta: 'Contact Sales',
        featured: false,
    },
];

export default function Pricing() {
    return (
        <section className="section pricing" id="pricing">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Pricing</div>
                    <h2 className="section-title">Simple, Transparent Pricing</h2>
                    <p className="section-subtitle">
                        Start free. Scale as you grow. No hidden fees, cancel anytime.
                    </p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, i) => (
                        <div key={i} className={`glass-card pricing-card${plan.featured ? ' featured' : ''}`}>
                            {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
                            <div className="pricing-name">{plan.name}</div>
                            <div className="pricing-price">
                                <span className="currency">$</span>
                                {plan.price}
                                <span className="period">/mo</span>
                            </div>
                            <div className="pricing-desc">{plan.desc}</div>
                            <div className="pricing-features">
                                {plan.features.map((feat, j) => (
                                    <div key={j} className="pricing-feature">
                                        <span className="pricing-check">✓</span>
                                        {feat}
                                    </div>
                                ))}
                            </div>
                            <button className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const features = [
    {
        icon: '⚡',
        title: 'Lightning-Fast Analytics',
        desc: 'Process millions of data points in real time with our GPU-accelerated analytics engine.',
    },
    {
        icon: '🤖',
        title: 'AI-Powered Insights',
        desc: 'Our ML models surface trends and anomalies before they impact your business.',
    },
    {
        icon: '🔗',
        title: 'Seamless Integrations',
        desc: 'Connect with 200+ tools including Slack, Salesforce, Jira, and more out of the box.',
    },
    {
        icon: '🛡️',
        title: 'Enterprise Security',
        desc: 'SOC 2 Type II certified with end-to-end encryption and SSO support.',
    },
    {
        icon: '📊',
        title: 'Custom Dashboards',
        desc: 'Build pixel-perfect dashboards with our drag-and-drop builder. No code required.',
    },
    {
        icon: '🚀',
        title: 'Workflow Automation',
        desc: 'Automate repetitive tasks with a visual workflow builder that saves hours each week.',
    },
];

export default function Features() {
    return (
        <section className="section features" id="features">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">Features</div>
                    <h2 className="section-title">Everything You Need to Scale</h2>
                    <p className="section-subtitle">
                        Powerful tools designed for modern teams that move fast and think big.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((f, i) => (
                        <div key={i} className="glass-card feature-card">
                            <div className="feature-icon">{f.icon}</div>
                            <h3 className="feature-title">{f.title}</h3>
                            <p className="feature-desc">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

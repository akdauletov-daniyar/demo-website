import { useState } from 'react';

export default function DemoForm({ onSubmit }) {
    const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await onSubmit(form);
            setSubmitted(true);
        } catch {
            // Still show success for demo
            setSubmitted(true);
        }
        setLoading(false);
    };

    if (submitted) {
        return (
            <div className="form-card">
                <div className="form-success">
                    <div className="form-success-icon">✓</div>
                    <h3>Thank You!</h3>
                    <p>We've received your demo request. Our team will reach out within 24 hours.</p>
                </div>
            </div>
        );
    }

    return (
        <form className="form-card" onSubmit={handleSubmit}>
            <h3 className="form-title">Request a Demo</h3>
            <p className="form-subtitle">See how NovaTech can transform your workflow.</p>

            <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                    className="form-input"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                />
            </div>

            <div className="form-group">
                <label className="form-label">Work Email *</label>
                <input
                    className="form-input"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                />
            </div>

            <div className="form-group">
                <label className="form-label">Company</label>
                <input
                    className="form-input"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                />
            </div>

            <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                    className="form-input"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                />
            </div>

            <button className="btn btn-primary" type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Request Demo →'}
            </button>
        </form>
    );
}

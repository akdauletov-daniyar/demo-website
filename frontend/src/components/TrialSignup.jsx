import { useState } from 'react';

export default function TrialSignup({ onSubmit }) {
    const [form, setForm] = useState({ name: '', email: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await onSubmit(form);
            setSubmitted(true);
        } catch {
            setSubmitted(true);
        }
        setLoading(false);
    };

    if (submitted) {
        return (
            <div style={{ textAlign: 'center', padding: '8px 0' }}>
                <span style={{ color: '#00E5A0', fontWeight: 700 }}>✓ You're in!</span> Check your email to get started.
            </div>
        );
    }

    return (
        <form className="cta-form" onSubmit={handleSubmit}>
            <input
                className="form-input"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
            />
            <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Your work email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
            />
            <button className="btn btn-accent" type="submit" disabled={loading}>
                {loading ? 'Signing up...' : 'Start Free Trial'}
            </button>
        </form>
    );
}

import { useState, useEffect } from 'react';

const API_BASE = 'http://127.0.0.1:8000/api';

export function useApi() {
    const [faqs, setFaqs] = useState([]);
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            fetch(`${API_BASE}/faqs/`).then(r => r.json()).catch(() => []),
            fetch(`${API_BASE}/testimonials/`).then(r => r.json()).catch(() => []),
        ]).then(([faqData, testimonialData]) => {
            setFaqs(faqData);
            setTestimonials(testimonialData);
            setLoading(false);
        });
    }, []);

    const submitDemoRequest = async (data) => {
        const res = await fetch(`${API_BASE}/demo-request/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return res.json();
    };

    const submitTrialSignup = async (data) => {
        const res = await fetch(`${API_BASE}/trial-signup/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        return res.json();
    };

    return { faqs, testimonials, loading, submitDemoRequest, submitTrialSignup };
}

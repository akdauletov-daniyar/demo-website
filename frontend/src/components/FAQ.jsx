import { useState } from 'react';

// Fallback FAQs in case API is unreachable
const fallbackFaqs = [
    { id: 1, question: 'What is NovaTech Platform?', answer: 'NovaTech is an all-in-one SaaS platform that helps businesses streamline operations, automate workflows, and gain real-time insights through powerful analytics and AI-driven tools.' },
    { id: 2, question: 'How long does onboarding take?', answer: 'Most teams are up and running within 48 hours. Our dedicated onboarding specialists guide you through setup, data migration, and team training at no extra cost.' },
    { id: 3, question: 'Can I integrate with my existing tools?', answer: 'Absolutely! NovaTech integrates with 200+ popular tools including Slack, Salesforce, HubSpot, Jira, Google Workspace, and more.' },
    { id: 4, question: 'Is there a free trial available?', answer: 'Yes! We offer a 14-day free trial with full access to all Pro features. No credit card required.' },
    { id: 5, question: 'How does pricing work?', answer: 'We offer three tiers — Starter, Pro, and Enterprise — billed monthly or annually (save 20%).' },
    { id: 6, question: 'What kind of support do you offer?', answer: 'All plans include email support. Pro includes live chat. Enterprise customers get a dedicated account manager and 24/7 phone support.' },
];

export default function FAQ({ faqs = [] }) {
    const [openId, setOpenId] = useState(null);
    const items = faqs.length > 0 ? faqs : fallbackFaqs;

    const toggle = (id) => setOpenId(openId === id ? null : id);

    return (
        <section className="section faq" id="faq">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">FAQ</div>
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <p className="section-subtitle">
                        Got questions? We've got answers. Can't find what you need? Reach out to our support team.
                    </p>
                </div>

                <div className="faq-list">
                    {items.map((faq) => (
                        <div key={faq.id} className={`faq-item${openId === faq.id ? ' open' : ''}`}>
                            <button className="faq-question" onClick={() => toggle(faq.id)}>
                                {faq.question}
                                <span className="faq-toggle">+</span>
                            </button>
                            <div className="faq-answer">
                                <div className="faq-answer-inner">{faq.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

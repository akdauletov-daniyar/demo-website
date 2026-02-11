import { useState } from 'react';
import './index.css';
import { useApi } from './useApi';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import DemoForm from './components/DemoForm';
import TrialSignup from './components/TrialSignup';
import DemoModal from './components/DemoModal';
import Footer from './components/Footer';

function App() {
  const { faqs, testimonials, submitDemoRequest, submitTrialSignup } = useApi();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Header onBookDemo={openModal} />
      <Hero onBookDemo={openModal} />
      <Features />

      {/* Demo Section */}
      <section className="section demo-section" id="demo">
        <div className="container">
          <div className="demo-grid">
            <div className="demo-info">
              <div className="section-label">Get Started</div>
              <h2>See NovaTech in Action</h2>
              <p>
                Schedule a personalized demo with our product experts.
                We'll show you exactly how NovaTech can streamline your
                team's workflow and boost productivity.
              </p>
              <div className="demo-benefits">
                <div className="demo-benefit">
                  <div className="demo-benefit-icon">✓</div>
                  <span>Personalized walkthrough of features</span>
                </div>
                <div className="demo-benefit">
                  <div className="demo-benefit-icon">✓</div>
                  <span>Custom integration planning</span>
                </div>
                <div className="demo-benefit">
                  <div className="demo-benefit-icon">✓</div>
                  <span>ROI analysis for your team</span>
                </div>
                <div className="demo-benefit">
                  <div className="demo-benefit-icon">✓</div>
                  <span>No commitment required</span>
                </div>
              </div>
            </div>
            <DemoForm onSubmit={submitDemoRequest} />
          </div>
        </div>
      </section>

      <Pricing />
      <Testimonials testimonials={testimonials} />
      <FAQ faqs={faqs} />

      {/* CTA Banner — Trial Signup */}
      <section className="cta-banner" id="trial">
        <div className="container">
          <h2>Ready to Transform Your Workflow?</h2>
          <p>Start your 14-day free trial today. No credit card required.</p>
          <TrialSignup onSubmit={submitTrialSignup} />
          <div className="cta-badge">🔒 Enterprise-grade security · Free forever for small teams</div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      <DemoModal open={modalOpen} onClose={closeModal}>
        <DemoForm onSubmit={submitDemoRequest} />
      </DemoModal>
    </>
  );
}

export default App;

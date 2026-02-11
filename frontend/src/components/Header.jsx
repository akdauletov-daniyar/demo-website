import { useState, useEffect } from 'react';

export default function Header({ onBookDemo }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header${scrolled ? ' scrolled' : ''}`}>
            <div className="container">
                <a href="#" className="logo">
                    <div className="logo-icon">◆</div>
                    <div className="logo-text">Nova<span>Tech</span></div>
                </a>

                <nav className="nav">
                    <ul className={`nav-links${mobileOpen ? ' mobile-open' : ''}`}>
                        <li className="nav-dropdown">
                            <a href="#features" className="nav-link">
                                Product <span className="dropdown-arrow">▾</span>
                            </a>
                            <div className="dropdown-menu">
                                <a href="#features" className="dropdown-item">Features</a>
                                <a href="#pricing" className="dropdown-item">Solutions</a>
                            </div>
                        </li>
                        <li><a href="#pricing" className="nav-link">Pricing</a></li>
                        <li><a href="#faq" className="nav-link">Resources</a></li>
                        <li><a href="#testimonials" className="nav-link">About</a></li>
                        <li><a href="#demo" className="nav-link">Contact</a></li>
                    </ul>

                    <div className="header-cta">
                        <a href="#demo" className="btn btn-secondary btn-sm">Sign In</a>
                        <button className="btn btn-primary btn-sm" onClick={onBookDemo}>
                            Book a Demo
                        </button>
                    </div>

                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span /><span /><span />
                    </button>
                </nav>
            </div>
        </header>
    );
}

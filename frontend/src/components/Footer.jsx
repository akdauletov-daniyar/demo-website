export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="logo">
                            <div className="logo-icon">◆</div>
                            <div className="logo-text">Nova<span>Tech</span></div>
                        </div>
                        <p className="footer-brand-desc">
                            Empowering teams with AI-driven analytics and automation tools.
                            Built for modern businesses that move fast.
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="footer-social">𝕏</a>
                            <a href="#" className="footer-social">in</a>
                            <a href="#" className="footer-social">◉</a>
                            <a href="#" className="footer-social">▶</a>
                        </div>
                    </div>

                    <div>
                        <div className="footer-col-title">Product</div>
                        <div className="footer-links">
                            <a href="#features" className="footer-link">Features</a>
                            <a href="#pricing" className="footer-link">Pricing</a>
                            <a href="#" className="footer-link">Integrations</a>
                            <a href="#" className="footer-link">Changelog</a>
                        </div>
                    </div>

                    <div>
                        <div className="footer-col-title">Company</div>
                        <div className="footer-links">
                            <a href="#" className="footer-link">About</a>
                            <a href="#" className="footer-link">Careers</a>
                            <a href="#" className="footer-link">Blog</a>
                            <a href="#demo" className="footer-link">Contact</a>
                        </div>
                    </div>

                    <div>
                        <div className="footer-col-title">Legal</div>
                        <div className="footer-links">
                            <a href="#" className="footer-link">Privacy Policy</a>
                            <a href="#" className="footer-link">Terms of Service</a>
                            <a href="#" className="footer-link">Cookie Policy</a>
                            <a href="#" className="footer-link">GDPR</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© 2026 NovaTech. All rights reserved.</span>
                    <span>Built with ❤️ for modern teams</span>
                </div>
            </div>
        </footer>
    );
}

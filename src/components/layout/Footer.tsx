import Link from "next/link";
import Image from "next/image";

const SERVICES_QUICK = ["HVAC Design", "Chiller Supply", "VRF/VRV Systems", "Retrofit & Energy", "Cooling Towers", "PLC Automation"];
const INDUSTRIES_QUICK = ["Manufacturing", "Hotels & Hospitality", "Commercial Buildings"];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Image src="/images/logo.png" alt="Rock Temp" width={150} height={46} />
            <p className="footer-tagline">End-to-end HVAC solutions — from design to commissioning. Trusted by industries across Bengaluru & Hyderabad.</p>
            <div className="footer-socials">
              <a href="mailto:rocktemp.services@gmail.com" className="social-link" aria-label="Email">✉️</a>
              <a href="https://wa.me/919148325253" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">💬</a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              {SERVICES_QUICK.map((s) => (
                <li key={s}><Link href="/services" className="footer-link">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Industries</h4>
            <ul className="footer-links">
              {INDUSTRIES_QUICK.map((i) => (
                <li key={i}><Link href="/industries" className="footer-link">{i}</Link></li>
              ))}
            </ul>
            <h4 className="footer-heading" style={{marginTop:"1.5rem"}}>Company</h4>
            <ul className="footer-links">
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="/projects" className="footer-link">Projects</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="fc-icon">📍</span>
                <span>#45 3rd Cross 5th Main S G Palya, C V Raman Nagara, Bengaluru – 560093</span>
              </li>
              <li>
                <span className="fc-icon">📞</span>
                <a href="tel:+919148325253" className="footer-link">+91 9148325253</a>
              </li>
              <li>
                <span className="fc-icon">📞</span>
                <a href="tel:+919731205057" className="footer-link">+91 9731205057</a>
              </li>
              <li>
                <span className="fc-icon">✉️</span>
                <a href="mailto:rocktemp.services@gmail.com" className="footer-link">rocktemp.services@gmail.com</a>
              </li>
              <li>
                <span className="fc-icon">🏙️</span>
                <span>Bangalore &amp; Hyderabad</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="muted body-sm">© {year} Rock Temp. All rights reserved. | GST: 29AVMPR6841B1Z8</p>
          <p className="muted body-sm">Designed &amp; built with ❤️ in Bengaluru</p>
        </div>
      </div>

      <style>{`
        .footer { background: var(--navy-2); border-top: 1px solid var(--border); }
        .footer-top { padding: 4rem 0 3rem; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 3rem; }
        .footer-brand { display: flex; flex-direction: column; gap: 1rem; }
        .footer-tagline { color: var(--muted); font-size: 0.9rem; line-height: 1.7; max-width: 280px; }
        .footer-socials { display: flex; gap: 0.75rem; margin-top: 0.5rem; }
        .social-link { width: 2.25rem; height: 2.25rem; border-radius: 50%; background: var(--glass); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; font-size: 1rem; transition: var(--transition); }
        .social-link:hover { background: var(--teal-glow); border-color: var(--teal); transform: translateY(-2px); }
        .footer-col {}
        .footer-heading { font-family: var(--font-display); font-size: 0.85rem; font-weight: 700; color: var(--teal); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem; }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
        .footer-link { color: var(--muted); font-size: 0.9rem; transition: var(--transition); }
        .footer-link:hover { color: var(--white); padding-left: 4px; }
        .footer-contact-list { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; }
        .footer-contact-list li { display: flex; gap: 0.75rem; align-items: flex-start; font-size: 0.875rem; color: var(--muted); }
        .fc-icon { flex-shrink: 0; margin-top: 1px; }
        .footer-bottom { border-top: 1px solid var(--border); padding: 1.25rem 0; }
        .footer-bottom-inner { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr; } .footer-brand { grid-column: 1/-1; } }
        @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr; } .footer-bottom-inner { flex-direction: column; text-align: center; } }
      `}</style>
    </footer>
  );
}

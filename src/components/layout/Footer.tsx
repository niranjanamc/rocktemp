import Link from "next/link";
import Image from "next/image";

const SERVICES_QUICK = ["HVAC Design", "Chiller Supply", "VRF/VRV Systems", "Retrofit & Energy", "Cooling Towers", "PLC Automation"];
const INDUSTRIES_QUICK = ["Manufacturing", "Hotels & Hospitality", "Commercial Buildings"];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com/rocktemphvac",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/rocktemphvac",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/rocktemphvac",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/rocktemphvac",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919148325253",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:rocktemp.services@gmail.com",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Image src="/images/logo.png" alt="Rock Temp" width={190} height={60} />
            <p className="footer-tagline">End-to-end HVAC solutions — from design to commissioning. Trusted by industries across Bengaluru & Hyderabad.</p>
            <div className="footer-socials">
              {SOCIAL_LINKS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="social-link" aria-label={s.label} title={s.label}>
                  {s.icon}
                </a>
              ))}
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
        .footer-socials { display: flex; gap: 0.625rem; margin-top: 0.5rem; flex-wrap: wrap; }
        .social-link { width: 2.25rem; height: 2.25rem; border-radius: 50%; background: var(--glass); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--muted); transition: var(--transition); flex-shrink: 0; }
        .social-link:hover { background: var(--teal-glow); border-color: var(--teal); color: var(--teal); transform: translateY(-3px); box-shadow: 0 4px 12px rgba(0,194,203,0.2); }
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

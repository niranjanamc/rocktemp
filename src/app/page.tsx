"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { STATS, PROCESS_STEPS } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";

export default function HomePage() {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    );
    // Small delay to let DOM settle
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }, 100);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <Image src="/images/hero/hero-bg.png" alt="HVAC Chiller Plant" fill style={{ objectFit: "cover" }} priority />
          <div className="hero-overlay" />
        </div>
        <div className="hero-particles">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="particle" style={{ left: `${(i * 8.3) % 100}%`, animationDelay: `${i * 0.5}s`, animationDuration: `${6 + (i % 4)}s` }} />
          ))}
        </div>
        <div className="container hero-content">
          <div className="hero-badge reveal">
            <span className="section-badge">🌟 Bengaluru &amp; Hyderabad</span>
          </div>
          <h1 className="display-xl hero-headline reveal reveal-delay-1">
            Engineering <span className="gradient-text">Perfect Climate</span><br />
            for Every Space
          </h1>
          <p className="body-lg hero-sub reveal reveal-delay-2">
            End-to-end HVAC solutions — from system design and engineering to supply, installation, and commissioning. Rock Temp delivers reliable, energy-efficient climate control for manufacturing, hotels, and commercial buildings.
          </p>
          <div className="hero-cta reveal reveal-delay-3">
            <Link href="/contact" className="btn btn-primary btn-lg">Get a Free Quote ↗</Link>
            <button className="btn btn-outline btn-lg" onClick={() => (window as any).__openChat?.()}>
              💬 Chat with Aria
            </button>
          </div>
          <div className="hero-trust reveal reveal-delay-4">
            <span className="trust-badge">✅ GST Registered</span>
            <span className="trust-badge">⚡ Turnkey Projects</span>
            <span className="trust-badge">🔧 After-Sales Support</span>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span className="scroll-line" />
          <span className="scroll-text">Scroll</span>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="stats-strip">
        <div className="container stats-grid">
          {STATS.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-value gradient-text">{s.value}</div>
              <div className="stat-label muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section bg-section-alt" id="services">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-badge">🔧 What We Do</span>
            <h2 className="heading-xl" style={{ margin: "1rem 0 0.5rem" }}>Comprehensive HVAC Services</h2>
            <div className="divider-teal" />
            <p className="body-lg muted" style={{ maxWidth: 560, margin: "0 auto" }}>
              From system design to after-sales support — we cover every aspect of your HVAC lifecycle.
            </p>
          </div>
          <ServicesGrid />
          <div className="text-center" style={{ marginTop: "2.5rem" }}>
            <Link href="/services" className="btn btn-outline">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section" id="industries">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-badge">🏭 Industries We Serve</span>
            <h2 className="heading-xl" style={{ margin: "1rem 0 0.5rem" }}>Tailored Solutions by Sector</h2>
            <div className="divider-teal" />
          </div>
          <div className="industries-grid">
            {INDUSTRIES.map((ind, i) => (
              <div key={ind.id} className={`industry-card reveal reveal-delay-${i + 1}`}>
                <div className="industry-image-wrap">
                  <Image src={ind.image} alt={ind.title} fill style={{ objectFit: "cover" }} />
                  <div className="industry-overlay" />
                  <div className="industry-icon">{ind.icon}</div>
                </div>
                <div className="industry-content">
                  <h3 className="heading-md">{ind.title}</h3>
                  <p className="body-sm muted">{ind.subtitle}</p>
                  <p className="industry-desc">{ind.description}</p>
                  <div className="industry-highlight">💡 {ind.highlight}</div>
                  <Link href="/industries" className="btn btn-outline btn-sm" style={{ marginTop: "1rem" }}>
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ROCK TEMP */}
      <section className="section bg-section-alt" id="why">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-badge">⭐ Why Rock Temp</span>
            <h2 className="heading-xl" style={{ margin: "1rem 0 0.5rem" }}>Our Core Values</h2>
            <div className="divider-teal" />
          </div>
          <WhySection />
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="process">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-badge">📋 Our Process</span>
            <h2 className="heading-xl" style={{ margin: "1rem 0 0.5rem" }}>How We Deliver</h2>
            <div className="divider-teal" />
          </div>
          <div className="process-steps">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className={`process-step reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="step-number mono">{step.step}</div>
                <div className="step-connector" />
                <div className="step-content">
                  <h4 className="heading-md">{step.title}</h4>
                  <p className="body-sm muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div className="cta-text reveal">
            <h2 className="heading-xl">Ready to Upgrade Your HVAC System?</h2>
            <p className="body-lg muted">Let our engineers assess your requirements and provide a custom solution with ROI projection.</p>
          </div>
          <div className="cta-actions reveal reveal-delay-2">
            <Link href="/contact" className="btn btn-primary btn-lg">Get a Free Consultation</Link>
            <a href="tel:+919148325253" className="btn btn-outline btn-lg">📞 Call Us Now</a>
          </div>
        </div>
      </section>

      <style>{`
        /* HERO */
        .hero { position: relative; min-height: 100vh; display: flex; align-items: center; overflow: hidden; padding-top: 5rem; }
        .hero-bg { position: absolute; inset: 0; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(10,15,30,0.92) 0%, rgba(10,15,30,0.75) 50%, rgba(10,15,30,0.85) 100%); }
        .hero-particles { position: absolute; inset: 0; pointer-events: none; }
        .particle { position: absolute; bottom: -20px; width: 2px; height: 2px; background: var(--teal); border-radius: 50%; animation: particle-drift linear infinite; opacity: 0; }
        .hero-content { position: relative; z-index: 2; max-width: 760px; padding: 3rem 0; }
        .hero-badge { margin-bottom: 1.5rem; }
        .hero-headline { margin: 0.5rem 0 1.5rem; }
        .hero-sub { color: rgba(238,242,247,0.8); max-width: 600px; margin-bottom: 2.5rem; }
        .hero-cta { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2.5rem; }
        .hero-trust { display: flex; gap: 1rem; flex-wrap: wrap; }
        .trust-badge { display: inline-flex; align-items: center; gap: 0.375rem; font-size: 0.85rem; color: var(--muted); background: rgba(255,255,255,0.04); border: 1px solid var(--border); border-radius: 100px; padding: 0.35rem 0.875rem; }
        .hero-scroll-hint { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
        .scroll-line { width: 1px; height: 48px; background: linear-gradient(to bottom, var(--teal), transparent); animation: float 2s ease-in-out infinite; }
        .scroll-text { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--muted); }

        /* STATS */
        .stats-strip { background: var(--navy-3); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 2.5rem 0; }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .stat-item { text-align: center; padding: 1rem; }
        .stat-value { font-family: var(--font-display); font-size: 2.5rem; font-weight: 900; }
        .stat-label { font-size: 0.875rem; margin-top: 0.25rem; text-transform: uppercase; letter-spacing: 0.08em; }

        /* INDUSTRIES */
        .industries-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .industry-card { border-radius: var(--radius-lg); overflow: hidden; background: var(--glass); border: 1px solid var(--border); transition: var(--transition); }
        .industry-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-teal); border-color: rgba(0,194,203,0.3); }
        .industry-image-wrap { position: relative; height: 220px; }
        .industry-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,15,30,0.9) 0%, transparent 60%); }
        .industry-icon { position: absolute; bottom: 1rem; left: 1.25rem; font-size: 2rem; }
        .industry-content { padding: 1.5rem; }
        .industry-desc { font-size: 0.875rem; color: var(--muted); margin: 0.75rem 0; line-height: 1.6; }
        .industry-highlight { font-size: 0.8rem; color: var(--amber); background: rgba(245,166,35,0.1); border: 1px solid rgba(245,166,35,0.2); border-radius: var(--radius-sm); padding: 0.5rem 0.75rem; }

        /* PROCESS */
        .process-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .process-step { background: var(--glass); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 2rem; position: relative; }
        .step-number { font-size: 2.5rem; font-weight: 700; color: var(--teal); opacity: 0.6; margin-bottom: 1rem; }
        .step-content h4 { margin-bottom: 0.5rem; }

        /* CTA BANNER */
        .cta-banner { background: linear-gradient(135deg, var(--navy-2) 0%, rgba(30,111,217,0.15) 50%, var(--navy-2) 100%); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 5rem 0; }
        .cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 3rem; flex-wrap: wrap; }
        .cta-text { flex: 1; min-width: 280px; }
        .cta-text h2 { margin-bottom: 0.75rem; }
        .cta-actions { display: flex; gap: 1rem; flex-wrap: wrap; flex-shrink: 0; }

        .text-center { text-align: center; }

        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .industries-grid { grid-template-columns: 1fr; }
          .process-steps { grid-template-columns: repeat(2, 1fr); }
          .cta-inner { flex-direction: column; text-align: center; }
        }
        @media (max-width: 600px) {
          .process-steps { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .hero-cta { flex-direction: column; }
        }
      `}</style>
    </>
  );
}

/* ── Inline sub-components ── */
import { SERVICES, CORE_VALUES } from "@/data/services";

function ServicesGrid() {
  return (
    <div className="grid-auto">
      {SERVICES.map((svc, i) => (
        <div key={svc.id} className={`card reveal reveal-delay-${(i % 4) + 1}`}>
          <div className="icon-box icon-box-lg" style={{ marginBottom: "1.25rem" }}>{svc.icon}</div>
          <h3 className="heading-md" style={{ marginBottom: "0.75rem" }}>{svc.title}</h3>
          <p className="body-sm muted">{svc.description}</p>
          <ul style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.375rem", listStyle: "none" }}>
            {svc.details.map((d) => (
              <li key={d} style={{ fontSize: "0.8rem", color: "var(--muted)", display: "flex", gap: "0.5rem" }}>
                <span style={{ color: "var(--teal)" }}>→</span> {d}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function WhySection() {
  return (
    <div className="grid-4">
      {CORE_VALUES.map((v, i) => (
        <div key={i} className={`card-flat reveal reveal-delay-${i + 1}`} style={{ textAlign: "center" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{v.icon}</div>
          <h3 className="heading-md" style={{ marginBottom: "0.75rem" }}>{v.title}</h3>
          <p className="body-sm muted">{v.description}</p>
        </div>
      ))}
    </div>
  );
}

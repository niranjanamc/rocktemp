import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CORE_VALUES } from "@/data/services";

export const metadata: Metadata = {
  title: "About Rock Temp | HVAC Experts Bengaluru",
  description: "Learn about Rock Temp — founded by Rajesh Rajan in 2025, delivering professional HVAC solutions across Bengaluru and Hyderabad.",
};

const TIMELINE = [
  { year: "2025", title: "Rock Temp Founded", desc: "Established in Bengaluru by Mr. Rajesh Rajan with a mission to deliver world-class HVAC solutions." },
  { year: "2025", title: "First Turnkey Projects", desc: "Successfully executed multiple HVAC design and installation projects across commercial and industrial sectors." },
  { year: "2025", title: "Hyderabad Expansion", desc: "Extended operations to Hyderabad, serving clients across both major tech and industrial hubs." },
  { year: "2026", title: "Energy Conservation Focus", desc: "Launched specialized retrofit and energy conservation service line with ROI-backed proposals." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-badge">🏢 About Us</span>
          <h1 className="display-lg" style={{ margin: "1rem 0 1.5rem" }}>
            Built on <span className="gradient-text">Trust & Expertise</span>
          </h1>
          <p className="body-lg muted" style={{ maxWidth: 600 }}>
            Rock Temp is a Bengaluru-based HVAC company driven by a passion for engineering excellence and a commitment to long-term client partnerships.
          </p>
        </div>
        <style>{`.page-hero { padding: 9rem 0 4rem; background: linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%); border-bottom: 1px solid var(--border); }`}</style>
      </section>

      {/* Overview */}
      <section className="section">
        <div className="container">
          <div className="about-overview">
            <div className="about-text">
              <span className="section-badge">Our Story</span>
              <h2 className="heading-xl" style={{ margin: "1rem 0 1rem" }}>A New-Generation HVAC Company</h2>
              <div className="divider-teal divider-left" />
              <p className="body-lg muted" style={{ marginTop: "1.25rem" }}>
                Rock Temp was founded in 2025 by <strong style={{ color: "var(--white)" }}>Mr. Rajesh Rajan</strong> in Bengaluru, Karnataka — with a core focus on HVAC sales, energy conservation retrofit works, and end-to-end project execution.
              </p>
              <p className="body-lg muted" style={{ marginTop: "1rem" }}>
                With deep expertise in heating, ventilation, and air conditioning systems, Rock Temp is dedicated to delivering high-performance climate control solutions tailored to diverse commercial and industrial requirements.
              </p>
              <p className="body-lg muted" style={{ marginTop: "1rem" }}>
                We combine industry expertise with reliable products and service excellence to support our clients through every stage of their HVAC lifecycle — from design consultation to supply, installation, and after-sales service.
              </p>
              <div className="about-badges">
                <div className="about-badge"><span>📍</span><span>Bengaluru & Hyderabad</span></div>
                <div className="about-badge"><span>📋</span><span>GST: 29AVMPR6841B1Z8</span></div>
                <div className="about-badge"><span>🏢</span><span>Est. 2025</span></div>
              </div>
            </div>
            <div className="about-mission-vision">
              <div className="mv-card">
                <div className="mv-icon">🌍</div>
                <h3 className="heading-md">Our Vision</h3>
                <p className="muted" style={{ marginTop: "0.75rem", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  To be a trusted and innovative leader in the HVAC industry by delivering sustainable and efficient climate control solutions across India.
                </p>
              </div>
              <div className="mv-card">
                <div className="mv-icon">🎯</div>
                <h3 className="heading-md">Our Mission</h3>
                <p className="muted" style={{ marginTop: "0.75rem", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  To provide top-quality HVAC systems and project services that exceed customer expectations through professionalism, innovation, and integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section bg-section-alt">
        <div className="container">
          <div className="founder-card">
            <div className="founder-quote-icon">"</div>
            <blockquote className="founder-quote">
              At ROCK TEMP, we believe in building long-term partnerships through our commitment to quality, timely delivery, and customer satisfaction. We aim to create a more comfortable and efficient environment for every client we serve.
            </blockquote>
            <div className="founder-info">
              <div className="founder-avatar">RR</div>
              <div>
                <div className="founder-name">Rajesh Rajan</div>
                <div className="founder-title muted">Founder, Rock Temp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">⭐ Core Values</span>
            <h2 className="heading-xl" style={{ margin: "1rem 0 0.5rem" }}>What We Stand For</h2>
            <div className="divider-teal" />
          </div>
          <div className="grid-4">
            {CORE_VALUES.map((v, i) => (
              <div key={i} className="card-flat" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{v.icon}</div>
                <h3 className="heading-md" style={{ marginBottom: "0.75rem" }}>{v.title}</h3>
                <p className="body-sm muted">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">📅 Our Journey</span>
            <h2 className="heading-xl" style={{ margin: "1rem 0 0.5rem" }}>Milestones</h2>
            <div className="divider-teal" />
          </div>
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-year mono">{t.year}</div>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h4 className="heading-md">{t.title}</h4>
                  <p className="body-sm muted" style={{ marginTop: "0.5rem" }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="heading-xl" style={{ marginBottom: "1rem" }}>Ready to Partner with Rock Temp?</h2>
          <p className="body-lg muted" style={{ marginBottom: "2rem" }}>Let us bring our expertise to your next project.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Get in Touch →</Link>
        </div>
      </section>

      <style>{`
        .about-overview { display: grid; grid-template-columns: 3fr 2fr; gap: 4rem; align-items: start; }
        .about-badges { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 2rem; }
        .about-badge { display: flex; gap: 0.5rem; align-items: center; background: var(--glass); border: 1px solid var(--border); border-radius: 100px; padding: 0.5rem 1rem; font-size: 0.85rem; }
        .about-mission-vision { display: flex; flex-direction: column; gap: 1.5rem; }
        .mv-card { background: var(--glass); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.75rem; }
        .mv-icon { font-size: 2rem; margin-bottom: 0.75rem; }
        .founder-card { background: linear-gradient(135deg, rgba(30,111,217,0.08), rgba(0,194,203,0.08)); border: 1px solid rgba(0,194,203,0.2); border-radius: var(--radius-xl); padding: 3.5rem; text-align: center; max-width: 780px; margin: 0 auto; }
        .founder-quote-icon { font-size: 6rem; color: var(--teal); opacity: 0.3; line-height: 0.5; margin-bottom: 1.5rem; font-family: serif; }
        .founder-quote { font-size: 1.2rem; line-height: 1.8; color: var(--white); font-style: italic; margin-bottom: 2rem; }
        .founder-info { display: flex; align-items: center; justify-content: center; gap: 1rem; }
        .founder-avatar { width: 3rem; height: 3rem; border-radius: 50%; background: linear-gradient(135deg, var(--blue), var(--teal)); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1rem; }
        .founder-name { font-weight: 700; font-family: var(--font-display); }
        .founder-title { font-size: 0.875rem; }
        .timeline { display: flex; flex-direction: column; gap: 0; max-width: 700px; margin: 0 auto; position: relative; padding-left: 2rem; border-left: 2px solid var(--border); }
        .timeline-item { display: grid; grid-template-columns: 80px 1fr; gap: 1.5rem; padding: 1.5rem 0; position: relative; }
        .timeline-dot { position: absolute; left: -2.6rem; top: 1.875rem; width: 12px; height: 12px; border-radius: 50%; background: var(--teal); border: 3px solid var(--navy-2); }
        .timeline-year { font-family: var(--font-mono); font-size: 0.875rem; color: var(--teal); font-weight: 600; padding-top: 0.25rem; }
        @media (max-width: 900px) {
          .about-overview { grid-template-columns: 1fr; gap: 2.5rem; }
          .founder-card { padding: 2rem; }
          .founder-quote { font-size: 1rem; }
        }
      `}</style>
    </>
  );
}

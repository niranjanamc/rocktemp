import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "HVAC Services | Rock Temp",
  description: "Complete HVAC services — chiller supply, VRF/VRV systems, AHU installation, retrofit & energy conservation, cooling towers, PLC automation and more.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-badge">🔧 Our Services</span>
          <h1 className="display-lg" style={{ margin: "1rem 0 1.5rem" }}>Comprehensive HVAC Solutions</h1>
          <p className="body-lg muted" style={{ maxWidth: 600 }}>
            From system design and consultation to turnkey project delivery — Rock Temp covers every phase of your HVAC lifecycle with precision and care.
          </p>
        </div>
        <style>{`.page-hero { padding: 9rem 0 4rem; background: linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%); border-bottom: 1px solid var(--border); }`}</style>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {SERVICES.map((svc, i) => (
              <div key={svc.id} className="service-detail-card" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="svc-icon-col">
                  <div className="icon-box icon-box-lg">{svc.icon}</div>
                </div>
                <div className="svc-content">
                  <h2 className="heading-lg" style={{ marginBottom: "0.75rem" }}>{svc.title}</h2>
                  <p className="body-lg muted" style={{ marginBottom: "1.25rem" }}>{svc.description}</p>
                  <div className="svc-details-grid">
                    {svc.details.map((d) => (
                      <div key={d} className="svc-detail-item">
                        <span style={{ color: "var(--teal)" }}>✓</span> {d}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="svc-cta">
                  <Link href="/contact" className="btn btn-outline btn-sm">Get Quote →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Conservation Highlight */}
      <section className="section bg-section-alt">
        <div className="container">
          <div className="energy-highlight-card">
            <div className="eh-icon">⚡</div>
            <div>
              <h2 className="heading-xl" style={{ marginBottom: "0.75rem" }}>
                Energy Conservation — <span className="gradient-text-amber">Save Up to 40%</span>
              </h2>
              <p className="body-lg muted" style={{ marginBottom: "1.5rem" }}>
                Our retrofit and energy conservation projects come with detailed R&D assessments and ROI reports — showing exactly how much you save with minimal investment.
              </p>
              <Link href="/contact" className="btn btn-primary">Request an Energy Audit →</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .service-detail-card { display: flex; gap: 2rem; background: var(--glass); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 2rem; transition: var(--transition); align-items: flex-start; }
        .service-detail-card:hover { border-color: rgba(0,194,203,0.3); box-shadow: var(--shadow-teal); }
        .svc-icon-col { flex-shrink: 0; }
        .svc-content { flex: 1; }
        .svc-cta { flex-shrink: 0; padding-top: 0.5rem; }
        .svc-details-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; }
        .svc-detail-item { font-size: 0.875rem; color: var(--muted); display: flex; gap: 0.5rem; align-items: flex-start; }
        .energy-highlight-card { display: flex; gap: 2.5rem; align-items: flex-start; background: linear-gradient(135deg, rgba(245,166,35,0.08) 0%, rgba(30,111,217,0.08) 100%); border: 1px solid rgba(245,166,35,0.2); border-radius: var(--radius-xl); padding: 3rem; }
        .eh-icon { font-size: 4rem; flex-shrink: 0; }
        @media (max-width: 768px) {
          .service-detail-card { flex-direction: column; }
          .svc-details-grid { grid-template-columns: 1fr; }
          .energy-highlight-card { flex-direction: column; gap: 1.5rem; }
          .svc-cta { width: 100%; }
        }
      `}</style>
    </>
  );
}

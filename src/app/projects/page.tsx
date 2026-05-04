import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Rock Temp HVAC",
  description: "Explore Rock Temp's HVAC project portfolio across manufacturing, hotels, and commercial buildings in Bengaluru and Hyderabad.",
};

// const PROJECT_CATEGORIES = ["All", "Manufacturing", "Hotels", "Commercial"];

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-badge">📁 Our Projects</span>
          <h1 className="display-lg" style={{ margin: "1rem 0 1.5rem" }}>Work We&apos;re Proud Of</h1>
          <p className="body-lg muted" style={{ maxWidth: 600 }}>
            A growing portfolio of HVAC installations, retrofits, and energy conservation projects across Bengaluru and Hyderabad. More case studies coming soon.
          </p>
        </div>
        <style>{`.page-hero { padding: 9rem 0 4rem; background: linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%); border-bottom: 1px solid var(--border); }`}</style>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="coming-soon-card">
            <div style={{ fontSize: "5rem", marginBottom: "1.5rem" }}>🚀</div>
            <h2 className="heading-xl" style={{ marginBottom: "1rem" }}>Case Studies Coming Soon</h2>
            <p className="body-lg muted" style={{ maxWidth: 500, margin: "0 auto 2rem" }}>
              We&apos;re documenting our completed projects with full details — system specs, energy savings achieved, and client outcomes. Check back soon.
            </p>
            <div className="project-placeholder-grid">
              {["Manufacturing Plant — Bengaluru", "Commercial Office Complex — Hyderabad", "5-Star Hotel — Bengaluru", "IT Campus — Bengaluru"].map((p) => (
                <div key={p} className="project-placeholder-card">
                  <div className="pp-shimmer" />
                  <div className="pp-label">{p}</div>
                  <div className="pp-tag">
                    <span className="tag">Coming Soon</span>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="btn btn-primary btn-lg" style={{ marginTop: "3rem" }}>
              Discuss Your Project →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .coming-soon-card { padding: 2rem 0; }
        .project-placeholder-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; max-width: 700px; margin: 2.5rem auto 0; }
        .project-placeholder-card { background: var(--glass); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; text-align: left; }
        .pp-shimmer { height: 180px; background: linear-gradient(90deg, var(--navy-3) 25%, var(--glass-hover) 50%, var(--navy-3) 75%); background-size: 200% 100%; animation: shimmer 2s infinite; }
        .pp-label { padding: 1rem 1.25rem 0.5rem; font-weight: 500; font-size: 0.9rem; }
        .pp-tag { padding: 0.5rem 1.25rem 1rem; }
        @media (max-width: 600px) { .project-placeholder-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}

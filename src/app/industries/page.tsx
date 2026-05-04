import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "@/utils/imagePath";
import { INDUSTRIES } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve | Rock Temp",
  description: "Rock Temp delivers HVAC solutions for manufacturing, hotels & hospitality, and commercial buildings across Bengaluru and Hyderabad.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-badge">🏭 Industries</span>
          <h1 className="display-lg" style={{ margin: "1rem 0 1.5rem" }}>Tailored HVAC for Every Sector</h1>
          <p className="body-lg muted" style={{ maxWidth: 600 }}>
            We understand that each industry has unique climate control requirements. Our solutions are engineered to match your specific operational needs.
          </p>
        </div>
        <style>{`.page-hero { padding: 9rem 0 4rem; background: linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%); border-bottom: 1px solid var(--border); }`}</style>
      </section>

      <div>
        {INDUSTRIES.map((ind, i) => (
          <section key={ind.id} className={`section ${i % 2 === 1 ? "bg-section-alt" : ""}`} id={ind.id}>
            <div className="container">
              <div className={`ind-layout ${i % 2 === 1 ? "reverse" : ""}`}>
                <div className="ind-image-wrap">
                  <Image src={getImagePath(ind.image)} alt={ind.title} fill style={{ objectFit: "cover", borderRadius: "var(--radius-xl)" }} />
                  <div className="ind-image-badge">{ind.icon} {ind.title}</div>
                </div>
                <div className="ind-content">
                  <span className="section-badge">{ind.icon} {ind.title}</span>
                  <h2 className="heading-xl" style={{ margin: "1rem 0 0.75rem" }}>{ind.subtitle}</h2>
                  <div className="divider-teal divider-left" />
                  <p className="body-lg muted" style={{ margin: "1.25rem 0" }}>{ind.description}</p>
                  <div className="ind-highlight">{ind.highlight}</div>
                  <h4 className="heading-md" style={{ margin: "1.5rem 0 1rem" }}>Our Solutions</h4>
                  <ul className="ind-solutions">
                    {ind.solutions.map((sol) => (
                      <li key={sol}>
                        <span className="sol-check">✓</span>
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn btn-primary" style={{ marginTop: "2rem" }}>
                    Get a Custom Solution →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <style>{`
        .ind-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .ind-layout.reverse { direction: rtl; }
        .ind-layout.reverse > * { direction: ltr; }
        .ind-image-wrap { position: relative; height: 450px; border-radius: var(--radius-xl); overflow: hidden; }
        .ind-image-badge { position: absolute; bottom: 1.5rem; left: 1.5rem; background: rgba(10,15,30,0.85); border: 1px solid var(--border); border-radius: 100px; padding: 0.5rem 1.25rem; font-weight: 600; font-size: 0.9rem; backdrop-filter: blur(8px); }
        .ind-highlight { background: rgba(245,166,35,0.1); border-left: 3px solid var(--amber); border-radius: 0 var(--radius-sm) var(--radius-sm) 0; padding: 0.875rem 1.25rem; color: var(--amber); font-size: 0.9rem; font-weight: 500; }
        .ind-solutions { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; }
        .ind-solutions li { display: flex; gap: 0.75rem; align-items: flex-start; font-size: 0.95rem; }
        .sol-check { color: var(--teal); font-weight: 700; flex-shrink: 0; margin-top: 1px; }
        @media (max-width: 900px) {
          .ind-layout, .ind-layout.reverse { grid-template-columns: 1fr; direction: ltr; gap: 2rem; }
          .ind-image-wrap { height: 280px; }
        }
      `}</style>
    </>
  );
}

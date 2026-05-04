"use client";
import { useState } from "react";
import { sendContactForm, getWhatsAppUrl } from "@/services/emailService";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", industry: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const ok = await sendContactForm(form);
    setStatus(ok ? "sent" : "error");
  };

  const whatsappUrl = getWhatsAppUrl({ name: form.name, requirement: form.message });

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-badge">📞 Contact Us</span>
          <h1 className="display-lg" style={{ margin: "1rem 0 1.5rem" }}>Let's Talk HVAC</h1>
          <p className="body-lg muted" style={{ maxWidth: 550 }}>
            Tell us about your project and we'll get back within 24 hours with a custom solution and quote.
          </p>
        </div>
        <style>{`.page-hero { padding: 9rem 0 4rem; background: linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%); border-bottom: 1px solid var(--border); }`}</style>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Form */}
            <div className="contact-form-wrap">
              <h2 className="heading-lg" style={{ marginBottom: "0.5rem" }}>Send Us a Message</h2>
              <p className="muted body-sm" style={{ marginBottom: "2rem" }}>We respond within 24 business hours.</p>

              {status === "sent" ? (
                <div className="success-msg">
                  <div style={{ fontSize: "3rem" }}>✅</div>
                  <h3 className="heading-md">Message Sent!</h3>
                  <p className="muted">Our team will reach out at {form.email} within 24 hours.</p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ marginTop: "1.5rem" }}>
                    💬 Also connect on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input id="contact-name" className="form-input" required placeholder="Rajesh Kumar" value={form.name} onChange={update("name")} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Company</label>
                      <input id="contact-company" className="form-input" placeholder="Your Company Pvt Ltd" value={form.company} onChange={update("company")} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input id="contact-email" className="form-input" type="email" required placeholder="you@company.com" value={form.email} onChange={update("email")} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input id="contact-phone" className="form-input" type="tel" required placeholder="+91 9XXXXXXXXX" value={form.phone} onChange={update("phone")} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Industry</label>
                    <select id="contact-industry" className="form-input" value={form.industry} onChange={update("industry")}>
                      <option value="">Select your industry</option>
                      <option>Manufacturing</option>
                      <option>Hotels & Hospitality</option>
                      <option>Commercial Buildings</option>
                      <option>IT / Data Centers</option>
                      <option>Healthcare</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your Requirement *</label>
                    <textarea id="contact-message" className="form-input" required placeholder="Describe your HVAC requirement — system type, capacity, location, timeline..." value={form.message} onChange={update("message")} />
                  </div>
                  {status === "error" && (
                    <p style={{ color: "#f87171", fontSize: "0.875rem" }}>⚠️ Something went wrong. Please call us directly at +91 9148325253.</p>
                  )}
                  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                    <button id="contact-submit" type="submit" className="btn btn-primary btn-lg" disabled={status === "sending"} style={{ flex: 1 }}>
                      {status === "sending" ? "Sending..." : "Send Message →"}
                    </button>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-lg">
                      💬 WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="contact-info-col">
              <div className="card" style={{ marginBottom: "1.5rem" }}>
                <h3 className="heading-md" style={{ marginBottom: "1.25rem" }}>Get in Touch</h3>
                <div className="contact-info-list">
                  <div className="ci-item">
                    <span className="ci-icon">📍</span>
                    <div>
                      <div className="ci-label">Office</div>
                      <div className="ci-value">#45 3rd Cross 5th Main S G Palya, C V Raman Nagara, Bengaluru – 560093</div>
                    </div>
                  </div>
                  <div className="ci-item">
                    <span className="ci-icon">📞</span>
                    <div>
                      <div className="ci-label">Phone</div>
                      <a href="tel:+919148325253" className="ci-value">+91 9148325253</a><br />
                      <a href="tel:+919731205057" className="ci-value">+91 9731205057</a>
                    </div>
                  </div>
                  <div className="ci-item">
                    <span className="ci-icon">✉️</span>
                    <div>
                      <div className="ci-label">Email</div>
                      <a href="mailto:rocktemp.services@gmail.com" className="ci-value">rocktemp.services@gmail.com</a>
                    </div>
                  </div>
                  <div className="ci-item">
                    <span className="ci-icon">🏙️</span>
                    <div>
                      <div className="ci-label">Cities</div>
                      <div className="ci-value">Bengaluru & Hyderabad</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="heading-md" style={{ marginBottom: "1rem" }}>Quick Connect</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <a href="tel:+919148325253" className="btn btn-outline" style={{ textAlign: "center", justifyContent: "center" }}>📞 Call +91 9148325253</a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ justifyContent: "center" }}>
                    💬 WhatsApp Us Now
                  </a>
                  <a href="mailto:rocktemp.services@gmail.com" className="btn btn-outline" style={{ textAlign: "center", justifyContent: "center" }}>✉️ Email Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-layout { display: grid; grid-template-columns: 3fr 2fr; gap: 3rem; align-items: start; }
        .contact-form-wrap { background: var(--glass); border: 1px solid var(--border); border-radius: var(--radius-xl); padding: 2.5rem; }
        .contact-form { display: flex; flex-direction: column; gap: 1.25rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
        .contact-info-list { display: flex; flex-direction: column; gap: 1.25rem; }
        .ci-item { display: flex; gap: 1rem; align-items: flex-start; }
        .ci-icon { font-size: 1.25rem; flex-shrink: 0; margin-top: 2px; }
        .ci-label { font-size: 0.75rem; color: var(--teal); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600; margin-bottom: 0.25rem; }
        .ci-value { font-size: 0.9rem; color: var(--muted); line-height: 1.6; transition: var(--transition); }
        a.ci-value:hover { color: var(--white); }
        .success-msg { text-align: center; padding: 3rem 1rem; display: flex; flex-direction: column; align-items: center; gap: 1rem; }
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

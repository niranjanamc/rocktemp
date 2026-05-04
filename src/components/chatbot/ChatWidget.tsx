"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getImagePath } from "../../utils/imagePath";
import { useChatbot } from "@/hooks/useChatbot";
import { QUICK_REPLIES } from "@/data/chatbot-knowledge";
import { LeadData } from "@/services/emailService";

export default function ChatWidget() {
  const { isOpen, toggle, open, messages, input, setInput, isLoading, send, phase, submitLead, skipLead, getWhatsApp } = useChatbot();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Expose open to Hero button
  useEffect(() => { (window as any).__openChat = open; }, [open]);
  // Auto-scroll
  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  return (
    <>
      {/* Floating Button */}
      <button id="chat-widget-btn" className={`chat-fab ${isOpen ? "open" : ""}`} onClick={toggle} aria-label="Open chat">
        {isOpen ? "✕" : "💬"}
        {!isOpen && <span className="chat-fab-ring" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window" id="chat-window">
          <div className="chat-header">
            <div className="chat-avatar-wrap">
              <Image src={getImagePath("/images/aria-avatar.png")} alt="Aria" width={44} height={44} className="chat-avatar" />
              <span className="chat-online-dot" />
            </div>
            <div className="chat-header-info">
              <div className="chat-name">Aria</div>
              <div className="chat-status">Rock Temp HVAC Advisor · Online</div>
            </div>
            <button className="chat-close" onClick={toggle} aria-label="Close">✕</button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.role === "user" ? "user" : "aria"}`}>
                {msg.role === "aria" && (
                  <Image src={getImagePath("/images/aria-avatar.png")} alt="Aria" width={28} height={28} className="msg-avatar" />
                )}
                <div className="msg-bubble">{msg.text}</div>
              </div>
            ))}
            {isLoading && (
              <div className="chat-msg aria">
                <Image src={getImagePath("/images/aria-avatar.png")} alt="Aria" width={28} height={28} className="msg-avatar" />
                <div className="msg-bubble typing"><span /><span /><span /></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies (only at start) */}
          {messages.length <= 1 && (
            <div className="quick-replies">
              {QUICK_REPLIES.map((r) => (
                <button key={r} className="quick-reply-btn" onClick={() => send(r)}>{r}</button>
              ))}
            </div>
          )}

          {/* Lead Capture Form */}
          {phase === "collecting_lead" && <LeadForm onSubmit={submitLead} onSkip={skipLead} />}

          {/* WhatsApp after lead */}
          {phase === "lead_sent" && (
            <div className="chat-wa-bar">
              <a href={getWhatsApp()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ width: "100%", justifyContent: "center" }}>
                <span>📱</span> Continue on WhatsApp
              </a>
            </div>
          )}

          {/* Input Bar */}
          {phase === "chatting" && (
            <div className="chat-input-bar">
              <input
                id="chat-input"
                type="text"
                className="chat-input"
                placeholder="Ask me anything about HVAC..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") send(); }}
                disabled={isLoading}
              />
              <button className="chat-send" onClick={() => send()} disabled={isLoading || !input.trim()} aria-label="Send">
                ➤
              </button>
            </div>
          )}
        </div>
      )}

      <style>{`
        .chat-fab { position: fixed; bottom: 2rem; right: 2rem; z-index: 999; width: 3.75rem; height: 3.75rem; border-radius: 50%; background: linear-gradient(135deg, var(--blue), var(--teal)); border: none; color: white; font-size: 1.5rem; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-blue); transition: var(--transition); }
        .chat-fab:hover { transform: scale(1.1); }
        .chat-fab.open { background: var(--navy-3); border: 1px solid var(--border); font-size: 1.25rem; }
        .chat-fab-ring { position: absolute; inset: -4px; border-radius: 50%; border: 2px solid var(--teal); animation: pulse-ring 2s infinite; }

        .chat-window { position: fixed; bottom: 6.5rem; right: 2rem; z-index: 998; width: 380px; max-height: 600px; background: var(--navy-2); border: 1px solid var(--border); border-radius: var(--radius-xl); box-shadow: var(--shadow-lg); display: flex; flex-direction: column; overflow: hidden; animation: fadeUp 0.3s ease; }

        .chat-header { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 1.25rem; background: linear-gradient(135deg, var(--blue) 0%, var(--teal) 100%); flex-shrink: 0; }
        .chat-avatar-wrap { position: relative; flex-shrink: 0; }
        .chat-avatar { border-radius: 50%; width: 44px; height: 44px; object-fit: cover; }
        .chat-online-dot { position: absolute; bottom: 1px; right: 1px; width: 10px; height: 10px; background: #4ade80; border-radius: 50%; border: 2px solid white; }
        .chat-header-info { flex: 1; }
        .chat-name { font-family: var(--font-display); font-weight: 700; font-size: 1rem; color: white; }
        .chat-status { font-size: 0.75rem; color: rgba(255,255,255,0.8); }
        .chat-close { background: rgba(255,255,255,0.2); border: none; color: white; width: 2rem; height: 2rem; border-radius: 50%; cursor: pointer; font-size: 0.875rem; display: flex; align-items: center; justify-content: center; transition: var(--transition); }
        .chat-close:hover { background: rgba(255,255,255,0.3); }

        .chat-messages { flex: 1; overflow-y: auto; padding: 1rem; display: flex; flex-direction: column; gap: 0.75rem; }
        .chat-msg { display: flex; gap: 0.5rem; align-items: flex-end; }
        .chat-msg.user { flex-direction: row-reverse; }
        .msg-avatar { border-radius: 50%; flex-shrink: 0; width: 28px; height: 28px; object-fit: cover; }
        .msg-bubble { max-width: 80%; padding: 0.75rem 1rem; border-radius: var(--radius); font-size: 0.875rem; line-height: 1.5; }
        .chat-msg.aria .msg-bubble { background: var(--glass); border: 1px solid var(--border); color: var(--white); border-bottom-left-radius: 4px; }
        .chat-msg.user .msg-bubble { background: linear-gradient(135deg, var(--blue), var(--teal)); color: white; border-bottom-right-radius: 4px; }

        .typing { display: flex; gap: 4px; align-items: center; padding: 0.875rem 1.25rem; }
        .typing span { width: 6px; height: 6px; background: var(--teal); border-radius: 50%; animation: float 1s ease-in-out infinite; }
        .typing span:nth-child(2) { animation-delay: 0.2s; }
        .typing span:nth-child(3) { animation-delay: 0.4s; }

        .quick-replies { padding: 0.75rem 1rem; display: flex; flex-wrap: wrap; gap: 0.5rem; border-top: 1px solid var(--border); flex-shrink: 0; }
        .quick-reply-btn { background: var(--glass); border: 1px solid var(--border); color: var(--muted); font-size: 0.78rem; padding: 0.375rem 0.75rem; border-radius: 100px; cursor: pointer; transition: var(--transition); font-family: var(--font-body); }
        .quick-reply-btn:hover { border-color: var(--teal); color: var(--teal); background: var(--teal-glow); }

        .chat-input-bar { display: flex; gap: 0.5rem; padding: 1rem; border-top: 1px solid var(--border); flex-shrink: 0; }
        .chat-input { flex: 1; background: var(--glass); border: 1px solid var(--border); border-radius: var(--radius); padding: 0.75rem 1rem; color: var(--white); font-family: var(--font-body); font-size: 0.875rem; outline: none; transition: var(--transition); }
        .chat-input:focus { border-color: var(--teal); }
        .chat-input::placeholder { color: rgba(148,163,184,0.5); }
        .chat-send { background: linear-gradient(135deg, var(--blue), var(--teal)); border: none; color: white; width: 2.75rem; height: 2.75rem; border-radius: 50%; cursor: pointer; font-size: 1rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: var(--transition); }
        .chat-send:disabled { opacity: 0.5; cursor: not-allowed; }
        .chat-send:not(:disabled):hover { transform: scale(1.1); }

        .chat-wa-bar { padding: 1rem; border-top: 1px solid var(--border); flex-shrink: 0; }

        @media (max-width: 480px) {
          .chat-window { right: 0.75rem; left: 0.75rem; width: auto; bottom: 5.5rem; }
          .chat-fab { bottom: 1.25rem; right: 1.25rem; }
        }
      `}</style>
    </>
  );
}

/* ── Lead Capture Form ── */
function LeadForm({ onSubmit, onSkip }: { onSubmit: (d: LeadData) => void; onSkip: () => void }) {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", industry: "", requirement: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await onSubmit(form as LeadData);
    setSubmitting(false);
  };

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <form onSubmit={handleSubmit} className="lead-form">
      <p style={{ fontSize: "0.8rem", color: "var(--teal)", marginBottom: "0.75rem", fontWeight: 600 }}>
        📋 Let us reach out to you with a custom solution:
      </p>
      <div className="lead-form-grid">
        <input className="form-input" placeholder="Full Name *" required value={form.name} onChange={update("name")} />
        <input className="form-input" placeholder="Company Name" value={form.company} onChange={update("company")} />
        <input className="form-input" type="email" placeholder="Email Address *" required value={form.email} onChange={update("email")} />
        <input className="form-input" type="tel" placeholder="Phone Number *" required value={form.phone} onChange={update("phone")} />
        <select className="form-input" value={form.industry} onChange={update("industry")} style={{ gridColumn: "1/-1" }}>
          <option value="">Select Industry</option>
          <option>Manufacturing</option>
          <option>Hotels & Hospitality</option>
          <option>Commercial Buildings</option>
          <option>Other</option>
        </select>
        <textarea className="form-input" placeholder="Brief requirement..." value={form.requirement} onChange={update("requirement")} style={{ gridColumn: "1/-1", minHeight: "70px" }} />
      </div>
      <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
        <button type="submit" className="btn btn-primary btn-sm" disabled={submitting} style={{ flex: 1 }}>
          {submitting ? "Sending..." : "Submit"}
        </button>
        <button type="button" className="btn btn-outline btn-sm" onClick={onSkip}>Skip</button>
      </div>
      <style>{`
        .lead-form { padding: 1rem; border-top: 1px solid var(--border); flex-shrink: 0; }
        .lead-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; }
        .lead-form .form-input { font-size: 0.8rem; padding: 0.6rem 0.75rem; }
      `}</style>
    </form>
  );
}

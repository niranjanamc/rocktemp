"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <Link href="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <Image src="/images/logo.png" alt="Rock Temp Logo" width={160} height={50} priority />
        </Link>

        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="navbar-link" onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="btn btn-primary btn-sm" onClick={() => setMenuOpen(false)}>
              Get a Quote
            </Link>
          </li>
        </ul>

        <button
          className={`navbar-burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

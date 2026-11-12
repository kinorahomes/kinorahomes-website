
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

// NAVIGATION LINKS
const links = [
  { name: "Main", href: "/" },
  { name: "Our Home", href: "/our-home" },
  { name: "Our Approach", href: "/our-approach" },
  { name: "Life at Kinora", href: "/life-at-kinora" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <header className="site-header">
      <nav
        className="nav-shell"
        aria-label="Main navigation"
      >
        {/* KINORA HOMES LOGO */}
        <Link
          href="/"
          className="brand"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/kinora-logo.png"
            alt="Kinora Homes"
            width={160}
            height={107}
            priority
          />
        </Link>

        {/* MOBILE MENU TOGGLE */}
        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        {/* NAVIGATION MENU */}
        <div
          className={
            "nav-items " + (open ? "shown" : "")
          }
        >
          {links.map((link) => (
            <Link
              key={link.href}
              className={
                path === link.href ? "current" : ""
              }
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* START A CONVERSATION BUTTON */}
          <Link
            href="/contact"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Start a Conversation
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </nav>
    </header>
  );
}

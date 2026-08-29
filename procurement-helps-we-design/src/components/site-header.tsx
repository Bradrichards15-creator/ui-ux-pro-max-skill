"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full p-5">
      <div className="mx-auto flex max-w-6xl items-center gap-1 rounded-[22px] bg-black/[0.06] p-1 pl-5 backdrop-blur-md">
        <a href="#" className="flex items-center py-2 text-lg font-semibold tracking-tight">
          Studio<span className="text-brand-green">.</span>
        </a>

        <nav className="ml-6 hidden items-center gap-6 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="opacity-80 transition hover:opacity-100">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <a
            href="#contact"
            className="hidden rounded-full bg-brand-green px-6 py-3 text-xs font-medium transition hover:bg-black hover:text-white md:inline-flex"
          >
            Contact
          </a>
          <a
            href="#contact"
            className="rounded-full bg-brand-green px-5 py-2.5 text-xs font-medium md:hidden"
          >
            Contact
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-black text-brand-green md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-[22px] bg-white p-4 shadow-lg md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-black/5"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

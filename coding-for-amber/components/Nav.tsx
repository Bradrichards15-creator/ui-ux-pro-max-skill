"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/#meet-them", label: "Is this you?" },
  { href: "/stories", label: "Stories" },
  { href: "/#about", label: "Meet Amber" },
  { href: "/#programmes", label: "Programmes" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream-200/80 bg-cream-100/90 backdrop-blur-sm">
      <nav
        className="mx-auto flex h-16 max-w-content items-center justify-between px-5 md:px-8"
        aria-label="Main"
      >
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          Amber Perry
          <span className="ml-2 hidden text-sm font-normal text-ink-muted sm:inline">
            {site.handle}
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft transition-colors duration-200 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#programmes"
            className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-amber-600"
          >
            Work with me
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-cream-200 bg-cream-100 px-5 pb-5 pt-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 text-ink-soft"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#programmes"
            className="mt-2 block rounded-full bg-amber-500 px-5 py-3 text-center font-medium text-white"
            onClick={() => setOpen(false)}
          >
            Work with me
          </Link>
        </div>
      )}
    </header>
  );
}

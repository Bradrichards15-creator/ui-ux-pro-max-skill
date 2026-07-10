"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#method", label: "The work", anchorId: "method" },
  { href: "/#programmes", label: "Coaching", anchorId: "programmes" },
  { href: "/stories", label: "Stories" },
  { href: "/about", label: "Amber" },
  { href: "/#contact", label: "Say hello", anchorId: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(y / h, 1) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick(e: React.MouseEvent, anchorId?: string) {
    if (onHome && anchorId) {
      e.preventDefault();
      document.getElementById(anchorId)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[100] h-[3px] bg-teal transition-[width] duration-150"
        style={{ width: `${progress * 100}%` }}
      />
      <nav
        className={`fixed inset-x-0 top-0 z-90 flex items-center justify-between border-b transition-all duration-[400ms] ${
          scrolled
            ? "border-line bg-paper/90 px-[6vw] py-3.5 backdrop-blur-md"
            : "border-transparent bg-transparent px-[6vw] py-[22px]"
        }`}
      >
        <Link href="/" className="font-display text-xl text-ink">
          Words of <span className="font-display italic text-teal-deep">Amber</span>
        </Link>
        <div className="hidden gap-7 text-sm text-ink-soft md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={(e) => handleClick(e, l.anchorId)}
              className="nav-link cursor-pointer bg-transparent"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

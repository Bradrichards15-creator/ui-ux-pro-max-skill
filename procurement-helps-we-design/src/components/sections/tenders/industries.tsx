"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const INDUSTRIES = [
  { name: "Catering", desc: "Menu compliance, allergen management, and volume delivery - written to answer exactly what's scored, not padded around it." },
  { name: "Civil Engineering", desc: "Method statements and technical detail structured to survive a hard, sceptical read from an evaluator who knows the subject." },
  { name: "Cleaning", desc: "Staffing, standards, and quality assurance set out in a way that gives the panel something to actually check against." },
  { name: "Construction", desc: "Programme, risk management, and mobilisation answers built around evidence, not assurance language." },
  { name: "Consultancy", desc: "Expertise proven on the page - credentials, methodology, and track record laid out clearly for the scorer." },
  { name: "Facilities Management", desc: "Multi-service contracts scored on coordination as much as delivery - structured to show both." },
  { name: "Gas Servicing", desc: "Compliance and competence spelled out against the specific standards the buyer names, not assumed." },
  { name: "Grounds Maintenance", desc: "Seasonal planning, resourcing, and response times set out the way a panel wants to see them." },
  { name: "Health & Social Care", desc: "Complex requirements, safeguarding and quality frameworks answered with the specificity these tenders demand." },
  { name: "Mechanical & Electrical", desc: "Technical detail written so a non-specialist scorer can still follow and award it fairly." },
  { name: "Repair & Maintenance", desc: "Response times and reactive-works commitments backed with real operational detail." },
  { name: "Security", desc: "Vetting, accreditation, and cover arrangements proven, not just referenced." },
  { name: "Utilities", desc: "Regulatory and technical detail written to satisfy both the panel and whoever audits the contract later." },
  { name: "Waste Management", desc: "Compliance and environmental commitments backed with specifics the buyer can hold you to." },
  { name: "Asbestos Removal", desc: "Safety, licensing and process answers written to leave no room for the panel to doubt them." },
  { name: "Fire Safety", desc: "Technical competence and compliance written to hold up under close scrutiny." },
];

/**
 * Industries — "Where I write" section: a clickable list of 16 sectors,
 * expanding to show the description for the selected one.
 */
export function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section id="industries" className="bg-black px-6 py-14 text-white md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-medium md:text-3xl">Where I write</h2>
        <p className="mt-3 text-sm text-white/70">
          Sixteen sectors. Click one to see how it applies.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.1fr]">
          <ul className="divide-y divide-white/10">
            {INDUSTRIES.map((ind, i) => (
              <li key={ind.name}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-expanded={active === i}
                  className={`flex w-full items-center justify-between gap-3 py-3 text-left text-sm transition ${
                    active === i ? "font-semibold text-brand-green" : "text-white/80 hover:text-white"
                  }`}
                >
                  {ind.name}
                  <ChevronRight
                    size={14}
                    className={`shrink-0 transition-transform ${active === i ? "rotate-90" : ""}`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="rounded-[22px] bg-[#231F20] p-8 md:sticky md:top-32 md:self-start">
            <h3 className="text-xl font-medium">{INDUSTRIES[active].name}</h3>
            <p className="mt-3 text-sm text-white/70">{INDUSTRIES[active].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

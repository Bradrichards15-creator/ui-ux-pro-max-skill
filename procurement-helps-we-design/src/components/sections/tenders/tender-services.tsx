import { FileEdit, ScanSearch, MessageSquareText } from "lucide-react";

const ITEMS = [
  {
    title: "Response writing",
    text: "Answers that give the panel what they're actually looking for - and take the burden off you.",
    Icon: FileEdit,
  },
  {
    title: "Bid review & mock scoring",
    text: "Scored the way a real panel would - quick, low-cost, and it might be the edge you need.",
    Icon: ScanSearch,
  },
  {
    title: "Lost-bid feedback session",
    text: "More to work with than a traditional feedback letter ever gives you.",
    Icon: MessageSquareText,
  },
];

/** TenderServices — 3-up row of the core tender-support services. */
export function TenderServices() {
  return (
    <section className="bg-background px-6 py-14 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 md:grid-cols-3">
          {ITEMS.map(({ title, text, Icon }) => (
            <article
              key={title}
              className="rounded-[22px] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/20 text-foreground">
                <Icon size={18} />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-foreground/75">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

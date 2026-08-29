import Image from "next/image";

/** BioBlock — Brad's bio with a real photo. */
export function BioBlock() {
  return (
    <section className="bg-black px-6 py-14 text-white md:py-20">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-[22px]">
          <Image
            src="/images/team/brad-desk-smiling.png"
            alt="Brad Richards at his desk"
            fill
            sizes="(min-width: 768px) 35vw, 90vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-medium md:text-3xl">Brad Richards</h2>
          <p className="mt-1 text-sm text-brand-green">Owner, Procurement Helps, MCIPS</p>
          <p className="mt-5 max-w-xl text-sm text-white/75">
            I&apos;ve spent years in procurement, reading and scoring tender responses from the
            evaluator&apos;s side of the table - and trained as a bid writer to bring that
            experience to the other side too. I help businesses put together bids that score
            well and stand out.
          </p>
          <p className="mt-4 max-w-xl text-sm text-white/75">
            I also review supplier spend: sourcing, negotiation, benchmarking. Over my career
            I&apos;ve delivered millions of savings through negotiation and tendering and saved
            teams days of time implementing proper procurement processes.
          </p>
        </div>
      </div>
    </section>
  );
}

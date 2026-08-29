import Image from "next/image";

/** SpendPhoto — real photo of Brad presenting a spend review to a client. */
export function SpendPhoto() {
  return (
    <section className="bg-background px-6 pb-14 md:pb-20">
      <div className="mx-auto max-w-5xl">
        <div className="relative aspect-16/7 w-full overflow-hidden rounded-[22px] bg-white">
          <Image
            src="/images/team/brad-spend-review-whiteboard.png"
            alt="Brad presenting a spend review to colleagues"
            fill
            sizes="(min-width: 768px) 80vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

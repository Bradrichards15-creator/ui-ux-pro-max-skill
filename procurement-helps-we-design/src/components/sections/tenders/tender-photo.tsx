import Image from "next/image";

/** TenderPhoto — real photo of Brad presenting "How to Win a Tender". */
export function TenderPhoto() {
  return (
    <section className="bg-background px-6 pb-14 md:pb-20">
      <div className="mx-auto max-w-5xl">
        <div className="relative aspect-16/7 w-full overflow-hidden rounded-[22px] bg-white">
          <Image
            src="/images/team/brad-presenting.png"
            alt="Brad presenting 'How to Win a Tender'"
            fill
            sizes="(min-width: 768px) 80vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

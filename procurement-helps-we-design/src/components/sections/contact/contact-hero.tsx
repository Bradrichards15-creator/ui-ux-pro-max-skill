import Image from "next/image";

/** ContactHero — H1, subhead, a chat-bubble preview, and Brad on a call. */
export function ContactHero() {
  return (
    <section className="bg-background px-6 pt-32 pb-10 md:pt-44">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <h1 className="text-[9vw] leading-[1.08] font-semibold tracking-tight md:text-[3rem]">
            Tell me what you&apos;re working on
          </h1>
          <p className="mt-6 max-w-lg text-base text-foreground/80">
            Whether you&apos;ve got a tender coming up, lost a recent bid or want to look at your
            supplier costs, start by telling me what&apos;s going on.
          </p>

          <div className="mt-8 max-w-sm space-y-2">
            <div className="w-fit rounded-2xl rounded-bl-sm bg-white px-4 py-3 text-sm">
              Hi, I&apos;ve got a tender closing Friday and could use a second pair of eyes
            </div>
            <div className="ml-auto w-fit rounded-2xl rounded-br-sm bg-brand-green px-4 py-3 text-sm text-black">
              Send it over - I&apos;ll have thoughts back to you today
            </div>
          </div>
        </div>

        <div className="relative aspect-4/5 w-full overflow-hidden rounded-[22px] bg-white">
          <Image
            src="/images/team/brad-video-call.png"
            alt="Brad on a video call at his desk"
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

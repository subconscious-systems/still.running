import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-dvh flex-col justify-between overflow-hidden px-[5vw] pt-[5vw] pb-[2vw]">
      <header className="flex items-start justify-between gap-6">
        <div className="flex items-center gap-[1.6vw]">
          <a
            href="https://noriagentic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[1.1vw] font-mono text-[clamp(1.25rem,3vw,3rem)] leading-none font-medium"
          >
            <Image
              src="/nori-mark.svg"
              alt=""
              width={32}
              height={32}
              className="size-[clamp(1.25rem,2.6vw,2.6rem)]"
            />
            nori
          </a>
          <span className="h-[clamp(1.75rem,3.2vw,3.25rem)] w-px bg-ink/30" />
          <a
            href="https://subconscious.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[0.6vw] bg-ink px-[1.2vw] py-[0.7vw]"
          >
            <Image
              src="/subconscious.svg"
              alt="Subconscious"
              width={646}
              height={120}
              priority
              className="h-[clamp(1.75rem,4vw,4rem)] w-auto"
            />
          </a>
        </div>
        <p className="hidden pt-[0.4vw] font-mono text-[clamp(0.75rem,2.1vw,2.1rem)] leading-none tracking-[0.14em] sm:block">
          LONG-HORIZON AGENTS
        </p>
      </header>

      <h1 className="font-sans text-[16.2vw] leading-[0.95] font-black tracking-[-0.042em] whitespace-nowrap">
        still
        <span className="mx-[0.01em] inline-block size-[0.18em] rounded-full bg-orange" />
        running
      </h1>
    </main>
  );
}

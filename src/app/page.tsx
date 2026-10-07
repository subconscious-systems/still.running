import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-dvh flex-col justify-between overflow-hidden px-[5vw] pt-[4.9vw] pb-[3.5vw]">
      <header className="flex items-start justify-between gap-6">
        <div className="flex items-center gap-[1.55vw]">
          <a
            href="https://noriagentic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[0.8vw] font-mono text-[max(1.25rem,3vw)] leading-none font-semibold"
          >
            <Image
              src="/nori-mark.svg"
              alt=""
              width={32}
              height={32}
              className="size-[max(1.25rem,2.85vw)]"
            />
            nori
          </a>
          <span className="h-[max(1.75rem,3.2vw)] w-px bg-ink/30" />
          <a
            href="https://subconscious.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[0.6vw] bg-ink px-[1.2vw] py-[0.8vw]"
          >
            <Image
              src="/subconscious.svg"
              alt="Subconscious"
              width={646}
              height={120}
              priority
              className="h-[max(1.75rem,4vw)] w-auto"
            />
          </a>
        </div>
        <p className="-mr-[0.135em] hidden font-mono text-[2.05vw] leading-none font-medium tracking-[0.135em] sm:block">
          long-horizon agents
        </p>
      </header>

      <h1 className="-ml-[0.9vw] font-sans text-[15.63vw] leading-[0.95] font-black whitespace-nowrap">
        <span className="tracking-[-0.035em]">still</span>
        <span className="mr-[-0.02em] ml-[0.02em] inline-block size-[0.228em] translate-y-[0.012em] rounded-full bg-orange" />
        <span className="tracking-[-0.052em]">running</span>
      </h1>
    </main>
  );
}

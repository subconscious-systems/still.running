const partners = [
  {
    name: "nori",
    href: "https://noriagentic.com",
    line: "Cloud agents. No lock in.",
  },
  {
    name: "subconscious",
    href: "https://subconscious.dev",
    line: "Inference in marathon mode.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col justify-between px-6 py-10 sm:px-12 sm:py-14">
      <header className="text-sm text-muted">
        nori <span className="px-1">×</span> subconscious
      </header>

      <section className="max-w-xl">
        <h1 className="text-3xl leading-tight tracking-tight sm:text-4xl">
          Cloud agents that run
          <br />
          the whole marathon.
        </h1>

        <ul className="mt-12 space-y-4 text-sm">
          {partners.map((p) => (
            <li key={p.name} className="flex gap-6">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-28 shrink-0 underline decoration-muted underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {p.name}
              </a>
              <span className="text-muted">{p.line}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="text-xs text-muted">
        $ exit <span className="px-1">·</span> [process completed]
      </footer>
    </main>
  );
}

import AvatarImage from "@/components/AvatarImage";

const tags = ["SQL", "Python", "PostgreSQL", "Power BI", "Data Analytics"];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-hero-gradient flex items-center justify-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div
          className="fade-up w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-teal/30 mx-auto shadow-[0_0_40px_rgba(95,227,196,0.18)]"
          style={{ animationDelay: "100ms" }}
        >
          <AvatarImage />
        </div>

        <p
          className="fade-up mt-5 text-sm tracking-[0.25em] text-muted2"
          style={{ animationDelay: "250ms" }}
        >
          UNEEB AHMED
        </p>

        <h1
          className="fade-up mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-ink"
          style={{ animationDelay: "400ms" }}
        >
          From Software Development
          <span className="block bg-gradient-to-r from-teal to-gold bg-clip-text text-transparent">
            to Data Analytics.
          </span>
        </h1>

        <p
          className="fade-up mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-7 sm:leading-8 text-muted2"
          style={{ animationDelay: "550ms" }}
        >
          I&apos;m a final-year BS Information Technology student with
          professional software development experience. I&apos;m currently
          learning SQL, Python, PostgreSQL, and Power BI while building
          practical projects to begin my career as a Data Analyst.
        </p>

        <div
          className="fade-up mt-9 flex flex-wrap justify-center gap-4"
          style={{ animationDelay: "700ms" }}
        >
          <a
            href="#projects"
            className="rounded-xl bg-teal px-7 py-3 text-deep3 font-medium transition-all duration-300 hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="/Uneeb-Ahmed-CV.pdf"
            download
            className="rounded-xl border border-line px-7 py-3 text-ink font-medium transition-all duration-300 hover:border-teal hover:text-teal"
          >
            Download Resume
          </a>
        </div>

        <div
          className="fade-up mt-10 flex flex-wrap justify-center gap-3"
          style={{ animationDelay: "850ms" }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-4 py-2 text-sm text-muted2 transition hover:border-teal hover:text-teal"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="#about"
          className="fade-up mt-12 inline-flex flex-col items-center text-muted text-sm hover:text-teal transition"
          style={{ animationDelay: "1000ms" }}
        >
          Scroll to explore
          <span className="mt-2 animate-bounce">↓</span>
        </a>
      </div>
    </section>
  );
}
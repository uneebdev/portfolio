import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";

const contacts = [
  {
    title: "Email",
    value: "uneebdev@gmail.com",
    href: "mailto:uneebdev@gmail.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://pk.linkedin.com/in/uneeb-ahmed-dev",
    icon: Linkedin,
  },
  {
    title: "GitHub",
    value: "View my projects",
    href: "https://github.com/uneebdev",
    icon: Github,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line bg-cta-gradient py-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="animate-fadeUp font-display text-3xl font-semibold text-ink">
            Open to Data Analyst Opportunities
          </h2>

          <p
            className="animate-fadeUp mx-auto mt-4 max-w-2xl text-muted2 leading-7"
            style={{ animationDelay: "120ms" }}
          >
            I&apos;m currently looking for internships and entry-level roles in
            <span className="text-teal font-medium"> Data Analytics</span>.
            Let&apos;s connect if you&apos;re hiring, collaborating, or working
            in the data field.
          </p>
        </div>

        <div
          className="animate-fadeUp mt-14 grid gap-6 md:grid-cols-3"
          style={{ animationDelay: "250ms" }}
        >
          {contacts.map(({ title, value, href, icon: Icon }) => (
            <a
              key={title}
              href={href}
              target={title !== "Email" ? "_blank" : undefined}
              rel={title !== "Email" ? "noopener noreferrer" : undefined}
              className="group rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-2 hover:border-teal/40 hover:shadow-[0_0_35px_rgba(95,227,196,0.08)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal/20 bg-surface2">
                  <Icon className="h-6 w-6 text-teal" strokeWidth={1.6} />
                </div>

                <ArrowUpRight className="h-5 w-5 text-muted transition group-hover:text-teal" />
              </div>

              <p className="mt-6 text-sm text-muted">{title}</p>

              <p className="mt-2 text-sm font-medium text-ink group-hover:text-teal transition">
                {value}
              </p>
            </a>
          ))}
        </div>

        <div
          className="animate-fadeUp mt-14 flex flex-wrap justify-center gap-4"
          style={{ animationDelay: "450ms" }}
        >
          <a
            href="/Uneeb-Ahmed-CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-teal px-6 py-3 font-medium text-deep3 transition hover:scale-105"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </a>

          <a
            href="#hero"
            className="rounded-xl border border-line px-6 py-3 text-ink transition hover:border-teal hover:text-teal"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </section>
  );
}
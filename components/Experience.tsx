import { BriefcaseBusiness, Calendar, Code2, Database, GitBranch } from "lucide-react";
const highlights = [
  "Flutter mobile app development",
  "REST API integration",
  "Debugging and performance improvements",
  "Application data handling",
];
const skills = [
  { label: "Flutter", icon: Code2 },
  { label: "REST APIs", icon: GitBranch },
  { label: "Data Handling", icon: Database },
];
export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-deep3/40 py-20 sm:py-28 border-t border-line overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-12">
          <p className="animate-fadeUp font-display font-medium text-xl sm:text-2xl text-ink">
            Experience
          </p>
          <p
            className="animate-fadeUp text-[13px] text-muted mt-2"
            style={{ animationDelay: "120ms" }}
          >
            Professional software development background
          </p>
        </div>
        <div
          className="animate-fadeUp rounded-2xl border border-line bg-surface p-6 sm:p-8 transition-all duration-300 hover:border-teal/50 hover:shadow-[0_0_35px_rgba(95,227,196,0.08)]"
          style={{ animationDelay: "240ms" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div className="flex gap-5">
              <div className="w-14 h-14 rounded-xl bg-surface2 border border-teal/20 flex items-center justify-center shrink-0">
                <BriefcaseBusiness className="w-7 h-7 text-teal" strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="font-display font-medium text-lg text-ink">
                  Junior Flutter Developer
                </h3>
                <p className="text-muted2 text-sm mt-1">
                  Chakwal IT House
                </p>
                <p className="text-muted2 text-sm mt-4 max-w-xl leading-7">
                  Developed and maintained cross-platform mobile applications
                  using Flutter. Worked with REST API integrations, application
                  data handling, debugging, and feature implementation while
                  building strong software engineering and problem-solving
                  skills.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 text-[12px] text-muted2 border border-line rounded-full px-4 py-2 whitespace-nowrap self-start">
              <Calendar className="w-3.5 h-3.5 text-teal" strokeWidth={1.6} />
              Jun 2025 — Jan 2026
            </span>
          </div>
          <div className="mt-7 grid sm:grid-cols-2 gap-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-line bg-base/40 px-4 py-3 text-sm text-muted2"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {skills.map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-muted2 transition-colors hover:border-teal hover:text-teal"
              >
                <Icon className="w-4 h-4" strokeWidth={1.6} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  Database,
  Sheet,
  Code2,
  BarChart3,
  Table,
  Smartphone,
  Braces,
  Webhook,
  GitBranch,
  Sparkles,
} from "lucide-react";

const dataSkills = [
  { name: "SQL", icon: Database },
  { name: "PostgreSQL", icon: Sheet },
  { name: "Python", icon: Code2 },
  { name: "Power BI", icon: BarChart3 },
  { name: "Excel", icon: Table },
];

const softwareSkills = [
  { name: "Flutter", icon: Smartphone },
  { name: "Dart", icon: Braces },
  { name: "REST APIs", icon: Webhook },
  { name: "Git", icon: GitBranch },
];

function SkillCard({
  name,
  icon: Icon,
  color,
}: {
  name: string;
  icon: any;
  color: "teal" | "gold";
}) {
  return (
    <div className="animate-fadeUp group rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-2 hover:border-teal/40 hover:shadow-[0_0_35px_rgba(95,227,196,0.08)]">
      <div
        className={`w-12 h-12 rounded-xl mx-auto flex items-center justify-center border ${color === "teal"
            ? "bg-surface2 border-teal/20"
            : "bg-gold/10 border-gold/20"
          }`}
      >
        <Icon
          className={`w-6 h-6 ${color === "teal" ? "text-teal" : "text-gold"
            }`}
          strokeWidth={1.6}
        />
      </div>

      <p className="mt-4 text-center text-sm font-medium text-ink">
        {name}
      </p>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-base py-20 sm:py-28 border-t border-line overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        <div className="text-center mb-14">
          <h2 className="animate-fadeUp font-display font-medium text-2xl text-ink">
            Skills & Technologies
          </h2>

          <p
            className="animate-fadeUp text-sm text-muted mt-2"
            style={{ animationDelay: "120ms" }}
          >
            Technologies I'm using to build my career in Data Analytics.
          </p>
        </div>

        {/* Data Skills */}

        <div
          className="animate-fadeUp mb-12"
          style={{ animationDelay: "220ms" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-teal" />
            <h3 className="font-display text-lg text-ink">
              Data Analytics
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {dataSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                color="teal"
              />
            ))}
          </div>
        </div>

        {/* Software Skills */}

        <div
          className="animate-fadeUp"
          style={{ animationDelay: "420ms" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-gold" />
            <h3 className="font-display text-lg text-ink">
              Software Development
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {softwareSkills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                color="gold"
              />
            ))}
          </div>
        </div>

        {/* Bottom Note */}

        <div
          className="animate-fadeUp mt-14 text-center"
          style={{ animationDelay: "600ms" }}
        >
          <p className="text-sm text-muted2 max-w-2xl mx-auto leading-7">
            Currently expanding my expertise in
            <span className="text-teal font-medium">
              {" "}
              SQL, PostgreSQL, Python, Power BI, and Data Analytics
            </span>
            , while preparing for a professional career as a
            <span className="text-ink font-medium"> Data Analyst.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
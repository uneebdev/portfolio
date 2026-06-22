import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Clock,
  Database,
  FileSpreadsheet,
  Workflow,
} from "lucide-react";

const projects = [
  {
    title: "Sales Performance Dashboard",
    role: "Data Analysis",
    tag: "Power BI",
    status: "Completed",
    desc: "Interactive Power BI dashboard analyzing sales, orders, customers, product performance, and category-wise trends using KPI cards, slicers, and visual reports.",
    icon: BarChart3,
  },
  {
    title: "PostgreSQL Practice Portfolio",
    role: "SQL Querying",
    tag: "PostgreSQL",
    status: "Completed",
    desc: "SQL practice project covering joins, aggregations, filtering, grouping, subqueries, and database design concepts using realistic business-style tables.",
    icon: Database,
  },
  {
    title: "Python Data Cleaning Project",
    role: "Data Wrangling",
    tag: "Python",
    status: "Completed",
    desc: "Cleaned messy datasets by handling missing values, duplicates, incorrect data types, and formatting issues to prepare structured data for analysis.",
    icon: FileSpreadsheet,
  },
  {
    title: "ETL Pipeline Project",
    role: "Data Automation",
    tag: "Python · SQL",
    status: "In Progress",
    desc: "End-to-end ETL project focused on extracting raw data, transforming it with Python, and loading clean structured data into a database for reporting.",
    icon: Workflow,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-base py-20 sm:py-28 border-t border-line overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-12">
          <p className="animate-fadeUp font-display font-medium text-xl sm:text-2xl text-ink">
            Projects
          </p>
          <p
            className="animate-fadeUp text-[13px] text-muted mt-2"
            style={{ animationDelay: "120ms" }}
          >
            Practical work in data analytics, SQL, Python, and automation
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, index) => {
            const isProgress = p.status === "In Progress";
            const Icon = p.icon;

            return (
              <div
                key={p.title}
                className={`animate-fadeUp group rounded-2xl border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 ${isProgress
                    ? "border-gold/30 border-dashed hover:border-gold/60"
                    : "border-line hover:border-teal/50 hover:shadow-[0_0_35px_rgba(95,227,196,0.08)]"
                  }`}
                style={{ animationDelay: `${200 + index * 120}ms` }}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border ${isProgress
                        ? "bg-gold/10 border-gold/20"
                        : "bg-surface2 border-teal/20"
                      }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${isProgress ? "text-gold" : "text-teal"
                        }`}
                      strokeWidth={1.6}
                    />
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full border whitespace-nowrap ${isProgress
                        ? "border-gold/40 text-gold bg-gold/5"
                        : "border-teal/40 text-teal bg-teal/5"
                      }`}
                  >
                    {isProgress ? (
                      <Clock className="w-3.5 h-3.5" strokeWidth={1.6} />
                    ) : (
                      <CheckCircle2
                        className="w-3.5 h-3.5"
                        strokeWidth={1.6}
                      />
                    )}
                    {p.status}
                  </span>
                </div>

                <h3 className="font-display font-medium text-lg text-ink">
                  {p.title}
                </h3>

                <p className="text-[12px] text-muted mt-2">
                  {p.tag} · {p.role}
                </p>

                <p className="text-muted2 text-sm leading-7 mt-5">
                  {p.desc}
                </p>

                <div className="mt-6 pt-5 border-t border-line flex items-center justify-between">
                  <span className="text-[12px] text-muted">
                    Portfolio project
                  </span>

                  <span className="inline-flex items-center gap-1 text-[12px] text-muted2 group-hover:text-teal transition-colors">
                    View details
                    <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.7} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
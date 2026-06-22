import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-base py-20 sm:py-28 border-t border-line overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-12">
          <p className="animate-fadeUp font-display font-medium text-xl sm:text-2xl text-ink">
            Education
          </p>

          <p
            className="animate-fadeUp text-[13px] text-muted mt-2"
            style={{ animationDelay: "120ms" }}
          >
            Academic background and foundation
          </p>
        </div>

        <div
          className="animate-fadeUp group rounded-2xl border border-line bg-surface p-6 sm:p-8 transition-all duration-300 hover:border-teal/50 hover:shadow-[0_0_35px_rgba(95,227,196,0.08)]"
          style={{ animationDelay: "240ms" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-surface2 flex items-center justify-center shrink-0 border border-teal/20 group-hover:border-teal/50 transition-colors">
              <GraduationCap
                className="w-7 h-7 text-teal"
                strokeWidth={1.6}
              />
            </div>

            <div className="flex-1">
              <h3 className="font-display font-medium text-lg text-ink">
                Bachelor of Science in Information Technology
              </h3>

              <p className="text-muted2 text-sm mt-1">
                University of Chakwal
              </p>

              <div className="mt-4 flex flex-wrap gap-4 text-[13px] text-muted">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-teal" strokeWidth={1.6} />
                  Final Year
                </span>

                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal" strokeWidth={1.6} />
                  Chakwal, Pakistan
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-line pt-5">
            <p className="text-sm leading-7 text-muted2">
              Focused on software development, databases, programming
              fundamentals, and practical technology skills. Currently applying
              this academic foundation toward Data Analytics using SQL, Python,
              PostgreSQL, and Power BI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
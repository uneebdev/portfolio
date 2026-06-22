"use client";

import { useEffect, useRef, useState } from "react";

const stops = [
  { label: "Junior Developer", sub: "Flutter · Dart · REST APIs", state: "past" },
  { label: "Aspiring Data Analyst", sub: "SQL · Python · Power BI", state: "current" },
  { label: "Advanced Data Skills", sub: "PostgreSQL · ETL · Automation", state: "future" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const reveal = (delayMs: number) =>
    `transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`;

  const delayStyle = (delayMs: number) => ({ transitionDelay: `${delayMs}ms` });

  return (
    <section id="about" ref={sectionRef} className="bg-base py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <p
          className={`text-center font-display font-medium text-xl sm:text-2xl text-ink mb-2 ${reveal(0)}`}
          style={delayStyle(0)}
        >
          From software development to data analytics
        </p>
        <p
          className={`text-center text-[13px] text-muted mb-14 ${reveal(100)}`}
          style={delayStyle(100)}
        >
          My current learning path and career transition
        </p>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div className="space-y-4 text-muted2 text-[14.5px] leading-relaxed">
            <p className={reveal(200)} style={delayStyle(200)}>
              I&apos;m a{" "}
              <span className="text-ink">final-year BS Information Technology</span>{" "}
              student at the University of Chakwal with professional experience
              as a <span className="text-ink">Junior Flutter Developer</span>.
            </p>
            <p className={reveal(320)} style={delayStyle(320)}>
              My software development background helped me build strong
              problem-solving skills, understand APIs, and work with application
              data. Now I&apos;m focusing on{" "}
              <span className="text-ink">SQL, Python, PostgreSQL, and Power BI</span>{" "}
              to start my career as a <span className="text-ink">Data Analyst</span>.
            </p>
            <p className={reveal(440)} style={delayStyle(440)}>
              I&apos;m building practical dashboard and analytics projects to
              improve my ability to clean, analyze, visualize, and explain data
              in a business-focused way.
            </p>
          </div>

          <div
            className={`rounded-xl border border-line bg-surface p-6 sm:p-8 ${reveal(250)}`}
            style={delayStyle(250)}
          >
            {stops.map((s, i) => (
              <div
                key={s.label}
                className={`flex gap-5 relative transition-all duration-700 ease-out ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                style={{ transitionDelay: `${380 + i * 160}ms` }}
              >
                <div className="flex flex-col items-center">
                  <span
                    className={`w-3 h-3 rounded-full border-2 shrink-0 transition-transform duration-500 ${visible ? "scale-100" : "scale-0"
                      } ${s.state === "current"
                        ? "bg-teal border-teal"
                        : s.state === "future"
                          ? "bg-transparent border-gold"
                          : "bg-line border-line"
                      }`}
                    style={{ transitionDelay: `${480 + i * 160}ms` }}
                  />
                  {i < stops.length - 1 && (
                    <span
                      className="w-px flex-1 bg-line my-1 origin-top transition-transform duration-500 ease-out"
                      style={{
                        minHeight: "44px",
                        transform: visible ? "scaleY(1)" : "scaleY(0)",
                        transitionDelay: `${520 + i * 160}ms`,
                      }}
                    />
                  )}
                </div>
                <div className="pb-8">
                  <p
                    className={`font-display font-medium text-[15px] ${s.state === "current"
                        ? "text-teal"
                        : s.state === "future"
                          ? "text-gold"
                          : "text-ink"
                      }`}
                  >
                    {s.label}
                    {s.state === "current" && (
                      <span className="ml-2 text-[11px] text-teal/70 font-body">
                        — current focus
                      </span>
                    )}
                    {s.state === "future" && (
                      <span className="ml-2 text-[11px] text-gold/70 font-body">
                        — next step
                      </span>
                    )}
                  </p>
                  <p className="text-[12px] text-muted mt-1">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

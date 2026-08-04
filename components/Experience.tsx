type ExperienceItem = {
  role: string;
  institution: string;
  period: string;
  responsibilities: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Lecturer",
    institution: "Bule Hora University, Oromia, Ethiopia",
    period: "August 2020 – December 2022",
    responsibilities: [
      "Taught undergraduate and graduate Computer Science courses.",
      "Conducted research in machine learning and data science.",
      "Supervised student projects and theses.",
    ],
  },
  {
    role: "Department Head",
    institution:
      "Computer Science and Engineering Department, Bule Hora University",
    period: "February 2021 – November 2022",
    responsibilities: [
      "Led departmental strategic planning and curriculum development.",
      "Managed academic programs and more than 15 faculty members.",
      "Coordinated research initiatives and industry collaborations.",
    ],
  },
  {
    role: "Emerging Technology Course Coordinator",
    institution: "Bule Hora University, Oromia, Ethiopia",
    period: "December 2020 – February 2021",
    responsibilities: [
      "Designed and implemented an emerging technology curriculum.",
      "Coordinated practical training activities with industry partners.",
    ],
  },
  {
    role: "Assistant Lecturer",
    institution: "Bule Hora University, Oromia, Ethiopia",
    period: "February 2017 – July 2020",
    responsibilities: [
      "Taught undergraduate Computer Science courses.",
      "Assisted with research projects and student supervision.",
    ],
  },
  {
    role: "Graduate Assistant",
    institution: "Bule Hora University, Oromia, Ethiopia",
    period: "February 2016 – February 2017",
    responsibilities: [
      "Supported teaching and research activities.",
      "Assisted with laboratory sessions and student guidance.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-white/10 bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Experience
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
          Teaching, academic leadership, and student supervision
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          My professional experience includes university teaching, academic
          administration, curriculum development, research, and student
          supervision.
        </p>

        <div className="relative mt-12 space-y-8 border-l border-cyan-400/30 pl-8">
          {experiences.map((experience) => (
            <article
              key={`${experience.role}-${experience.period}`}
              className="relative rounded-2xl border border-white/10 bg-slate-900/50 p-7"
            >
              <span className="absolute -left-[42px] top-8 h-5 w-5 rounded-full border-4 border-slate-950 bg-cyan-400" />

              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {experience.role}
                  </h3>

                  <p className="mt-2 font-medium text-cyan-300">
                    {experience.institution}
                  </p>
                </div>

                <span className="shrink-0 text-sm font-medium text-slate-400">
                  {experience.period}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-slate-400">
                {experience.responsibilities.map((responsibility) => (
                  <li
                    key={responsibility}
                    className="flex gap-3 leading-7"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                    />

                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
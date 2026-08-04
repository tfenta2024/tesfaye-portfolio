type EducationItem = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  supervisor?: string;
  researchFocus?: string;
  grade?: string;
};

const educationItems: EducationItem[] = [
  {
  degree: "PhD in Computer Science",
  institution: "Beijing Institute of Technology",
  location: "Beijing, China",
  period: "September 2022 – September 2026 (Expected)",
  supervisor: "Prof. Zhendong Niu",
  researchFocus:
    "Sequential recommendation systems, cross-domain recommendation, and large language models",
},
  {
    degree: "MSc in Computer Science",
    institution: "Ambo University",
    location: "Oromia, Ethiopia",
    period: "Completed August 2020",
    grade: "CGPA: 4.00 / 4.00",
  },
  {
    degree: "BSc in Computer Science",
    institution: "Ambo University",
    location: "Oromia, Ethiopia",
    period: "Completed July 2015",
    grade: "CGPA: 3.37 / 4.00",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 border-t border-white/10 bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Education
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
          Academic background in computer science and intelligent systems
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          My academic training has developed from foundational computer
          science to advanced research in recommendation systems, deep
          learning, and large language models.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {educationItems.map((education) => (
            <article
              key={`${education.degree}-${education.institution}`}
              className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-7 transition hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                {education.period}
              </p>

              <h3 className="mt-5 text-2xl font-semibold leading-8 text-white">
                {education.degree}
              </h3>

              <p className="mt-4 font-medium text-cyan-200">
                {education.institution}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {education.location}
              </p>

              <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
                {education.supervisor && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Supervisor
                    </p>

                    <p className="mt-2 text-slate-300">
                      {education.supervisor}
                    </p>
                  </div>
                )}

                {education.researchFocus && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Research focus
                    </p>

                    <p className="mt-2 leading-7 text-slate-300">
                      {education.researchFocus}
                    </p>
                  </div>
                )}

                {education.grade && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Academic result
                    </p>

                    <p className="mt-2 text-slate-300">
                      {education.grade}
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
const profileFacts = [
  {
    label: "Position",
    value: "Lecturer in Computer Science",
  },
  {
    label: "Institution",
    value: "Bule Hora University",
  },
  {
    label: "Current study",
    value: "PhD in Computer Science and Technology",
  },
  {
    label: "Research focus",
    value: "Cross-domain sequential recommendation",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-white/10 bg-slate-900/40 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          About me
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
          Teaching, researching, and developing practical AI solutions
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              I am a Computer Science lecturer at Bule Hora University and a
              PhD candidate in Computer Science and Technology at Beijing Institute of Technology.
            </p>

            <p>
              My research focuses on cross-domain sequential recommendation,
              deep learning, and intelligent systems that learn from user
              behaviour across different domains.
            </p>

            <p>
              I am also interested in using large language models and modern
              web technologies to address practical challenges in Ethiopian
              universities, support students, and improve academic services.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950 p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-white">
              Professional profile
            </h3>

            <dl className="mt-6 space-y-5">
              {profileFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                >
                  <dt className="text-sm font-medium uppercase tracking-wider text-cyan-400">
                    {fact.label}
                  </dt>

                  <dd className="mt-2 text-slate-200">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
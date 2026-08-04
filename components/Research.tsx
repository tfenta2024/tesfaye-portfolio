const researchAreas = [
  {
    number: "01",
    title: "Cross-Domain Sequential Recommendation",
    description:
      "Developing recommendation models that learn users’ changing preferences across multiple domains and over time.",
  },
  {
    number: "02",
    title: "Deep Learning for Recommender Systems",
    description:
      "Applying neural networks, attention mechanisms, and representation learning to improve personalized recommendations.",
  },
  {
    number: "03",
    title: "Large Language Models",
    description:
      "Exploring how large language models can support education, research, student services, and knowledge access.",
  },
  {
    number: "04",
    title: "AI for Ethiopian Universities",
    description:
      "Designing practical and responsible intelligent systems that address real challenges in Ethiopian higher education.",
  },
];

export default function Research() {
  return (
    <section
      id="research"
      className="scroll-mt-24 border-t border-white/10 bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Research
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
          Research interests and areas of exploration
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          My work focuses on personalized intelligent systems, deep learning,
          and modern artificial intelligence technologies that can solve
          practical problems.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {researchAreas.map((area) => (
            <article
              key={area.number}
              className="rounded-2xl border border-white/10 bg-slate-900/50 p-7 transition hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <span className="text-sm font-bold text-cyan-400">
                {area.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-white">
                {area.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
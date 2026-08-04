type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  status?: string;
};

const publications: Publication[] = [
  {
    title:
      "BiTrans-CDSR: Bidirectional Knowledge Transfer for Cross-Domain Sequential Recommendation via Joint User-Item Overlap Modeling",
    authors: "Tesfaye Fenta Boka and Zhendong Niu",
    journal: "Knowledge-Based Systems",
    year: 2026,
    status: "Accepted",
  },
  {
    title:
      "Domain-aware Self-prompting for Cross-domain Sequential Recommendations with Natural Language Explanations",
    authors:
      "Tesfaye Fenta Boka, Zhendong Niu, Tekie Tsegay Tewolde, and Ramadhani A. Duma",
    journal: "Neural Networks",
    year: 2025,
  },
  {
    title:
      "A Survey of Sequential Recommendation Systems: Techniques, Evaluation, and Future Directions",
    authors:
      "Tesfaye Fenta Boka, Zhendong Niu, and Rama Bastola Neupane",
    journal: "Information Systems",
    year: 2024,
  },
  {
    title: "A Survey on Deep 3D Human Pose Estimation",
    authors:
      "Rama Bastola Neupane, Kan Li, and Tesfaye Fenta Boka",
    journal: "Artificial Intelligence Review",
    year: 2024,
  },
  {
    title:
      "Leukemia Ontology-Based Decision Supporting System for Diagnosis and Treatment",
    authors:
      "Tesfaye Fenta Boka, Kabada Sori Ayana, Karthikeyan Kaliyaperumal, Megersa Oljira Rase, and Bayisa Natea Sima",
    journal: "Design Engineering",
    year: 2021,
  },
];

export default function Publications() {
  return (
    <section
      id="publications"
      className="scroll-mt-24 border-t border-white/10 bg-slate-900/40 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Publications
        </p>

        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">
              Selected journal articles
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              My publications cover sequential recommendation, cross-domain
              knowledge transfer, deep learning, and intelligent decision
              support systems.
            </p>
          </div>

          <span className="shrink-0 text-sm font-medium text-slate-400">
            {publications.length} selected works
          </span>
        </div>

        <div className="mt-12 space-y-5">
          {publications.map((publication, index) => (
            <article
              key={publication.title}
              className="grid gap-5 rounded-2xl border border-white/10 bg-slate-950 p-6 transition hover:border-cyan-400/50 md:grid-cols-[70px_1fr_auto]"
            >
              <span className="text-lg font-bold text-cyan-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-xl font-semibold leading-8 text-white">
                  {publication.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {publication.authors}
                </p>

                <p className="mt-2 font-medium text-slate-300">
                  {publication.journal}, {publication.year}
                </p>
              </div>

              {publication.status && (
                <span className="h-fit w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  {publication.status}
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
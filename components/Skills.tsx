type SkillGroup = {
  category: string;
  description: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    description:
      "Languages I use for software development, research, and algorithm implementation.",
    skills: ["Python", "Java", "C++", "C#"],
  },
  {
    category: "Machine Learning and Deep Learning",
    description:
      "Frameworks and libraries for developing intelligent systems and research models.",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Hugging Face Transformers",
    ],
  },
  {
    category: "Data Science",
    description:
      "Tools for data preparation, numerical computing, analysis, and visualization.",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Data Visualization",
    ],
  },
  {
    category: "Research and Development Tools",
    description:
      "Platforms and tools that support experimentation, documentation, and collaboration.",
    skills: [
      "Git",
      "GitHub",
      "LaTeX",
      "Linux",
      "Jupyter Notebook",
      "Google Colab",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-white/10 bg-slate-900/40 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          Technical skills
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
          Technologies used in research and software development
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          My technical background includes programming, machine learning,
          deep learning, data analysis, research computing, and collaborative
          software-development tools.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.category}
              className="rounded-2xl border border-white/10 bg-slate-950 p-7"
            >
              <h3 className="text-xl font-semibold text-white">
                {group.category}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {group.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200"
                  >
                    {skill}
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
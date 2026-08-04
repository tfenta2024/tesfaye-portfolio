const contactLinks = [
  {
    label: "Academic email",
    value: "tfenta@bit.edu.cn",
    href: "mailto:tfenta@bit.edu.cn",
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/tfenta2024",
    href: "https://github.com/tfenta2024",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-white/10 bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Contact
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
              Let us connect and explore opportunities for collaboration
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              I welcome discussions about research collaboration, academic
              projects, recommendation systems, artificial intelligence,
              student supervision, and university-focused technology.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:tfenta@bit.edu.cn"
                className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Send an email
              </a>

              <a
                href="/Tesfaye-Fenta-CV.pdf"
                download
                className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Download my CV
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-7">
            <h3 className="text-xl font-semibold text-white">
              Contact information
            </h3>

            <div className="mt-6 space-y-5">
              {contactLinks.map((contact) => (
                <div
                  key={contact.label}
                  className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                >
                  <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                    {contact.label}
                  </p>

                  <a
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noreferrer" : undefined}
                    className="mt-2 inline-block break-all text-lg text-slate-200 transition hover:text-cyan-300"
                  >
                    {contact.value}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
              <p className="text-sm leading-7 text-slate-300">
                Research interests include recommendation systems, machine
                learning, deep learning, data mining, and large language
                models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
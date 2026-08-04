const footerLinks = [
  {
    name: "GitHub",
    href: "https://github.com/tfenta2024",
    external: true,
  },
  {
    name: "Email",
    href: "mailto:tfenta@bit.edu.cn",
    external: false,
  },
  {
    name: "Download CV",
    href: "/Tesfaye-Fenta-CV.pdf",
    external: false,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a
            href="#home"
            className="text-xl font-bold tracking-wide text-white"
          >
            Tesfaye<span className="text-cyan-400">.</span>
          </a>

          <p className="mt-3 text-sm text-slate-400">
            Computer Science researcher, lecturer, and developer.
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-6 gap-y-3"
        >
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="text-sm font-medium text-slate-400 transition hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {currentYear} Tesfaye Fenta. All rights reserved.
        </p>

        <a
          href="#home"
          className="font-medium transition hover:text-cyan-400"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
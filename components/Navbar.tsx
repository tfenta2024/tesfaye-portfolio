const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Research", href: "#research" },
  { name: "Publications", href: "#publications" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="text-lg font-bold tracking-wide text-white"
        >
          Tesfaye<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-slate-700 px-3 py-2 text-sm font-semibold text-slate-200">
            Menu
          </summary>

          <div className="absolute right-0 mt-3 w-48 rounded-lg border border-slate-700 bg-slate-900 p-2 shadow-xl">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-md px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
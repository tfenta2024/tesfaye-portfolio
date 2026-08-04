import Navbar from "../components/Navbar";
import About from "../components/About";
import Research from "../components/Research";
export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen scroll-smooth bg-slate-950 text-white"
    >
      <Navbar />

      <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Academic Portfolio
          </p>

          <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
            Hello, I am Tesfaye Fenta.
          </h1>

          <h2 className="mt-5 text-2xl font-medium text-slate-300">
            Computer Science Lecturer and PhD Candidate
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            I am a lecturer at Bule Hora University and a researcher
            interested in recommender systems, deep learning, and large
            language models.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Learn more about me
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact me
            </a>
          </div>
        </div>
      </section>
      <About />
       <Research />
    </main>
  );
}
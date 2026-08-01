const projects = [
  {
    number: "01",
    category: "Demand generation system",
    title: "ABM Engine",
    description:
      "An evidence-first account research engine with 866 buying-signal definitions, source-backed scoring, and real account cases.",
    details: "Signal library · Research engine · Account intelligence",
    cover: "projects/abm-engine.png",
    href: "https://github.com/reshma-baskaran/abm-engine",
  },
  {
    number: "02",
    category: "Skill + writing system",
    title: "Outbound Research & Writing",
    description:
      "A source-backed method for account research, six-touch sequence design, and pre-launch copy QA.",
    details: "Account research · Message architecture · Sequence QA",
    cover: "projects/outbound-research-and-writing.png",
    href: "https://github.com/reshma-baskaran/outbound-research-and-writing",
  },
  {
    number: "03",
    category: "Agent + knowledge system",
    title: "Relationship Intelligence Second Brain",
    description:
      "An Obsidian system that turns strategic conversations into relationship history, commitments, interests, and recurring briefs.",
    details: "Relationship history · Open items · Recurring briefs",
    cover: "projects/relationship-intelligence-second-brain.png",
    href: "https://github.com/reshma-baskaran/relationship-intelligence-second-brain",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Reshma Baskaran home">
          RB<span className="wordmark-dot">.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a
            className="nav-cta"
            href="https://github.com/reshma-baskaran"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-kicker">
          <span className="status-dot" aria-hidden="true" />
          GTM engineer · Growth hacker · Hybrid athlete
        </div>
        <figure className="hero-portrait">
          <img
            src="reshma-baskaran-headshot.png"
            alt="Reshma Baskaran"
          />
          <figcaption>Reshma Baskaran · India</figcaption>
        </figure>
        <h1>
          Growth, built
          <br />
          like a <em>system.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            I design practical systems that turn research, content, campaigns,
            and AI workflows into more repeatable growth.
          </p>
          <a className="text-link" href="#work">
            Explore the work <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <span className="orbit-track orbit-demand">
            <span className="orbit-label">Demand generation</span>
          </span>
          <span className="orbit-track orbit-research">
            <span className="orbit-label">Market intelligence</span>
          </span>
          <span className="orbit-track orbit-positioning">
            <span className="orbit-label">GTM strategy</span>
          </span>
          <span className="orbit-track orbit-inbound">
            <span className="orbit-label">Integrated marketing</span>
          </span>
          <span className="orbit-track orbit-lifecycle">
            <span className="orbit-label">Lifecycle growth</span>
          </span>
          <span className="orbit-track orbit-revenue">
            <span className="orbit-label">Revenue ownership</span>
          </span>
          <span className="orbit-track orbit-account">
            <span className="orbit-label">Account-based growth</span>
          </span>
          <span className="orbit-track orbit-pipeline">
            <span className="orbit-label">Pipeline creation</span>
          </span>
          <span className="orbit-center">GTM</span>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div className="section-label">
            <span className="section-index">01</span>
            <span className="section-label-text">Selected systems</span>
          </div>
          <h2>What I&apos;m building and documenting.</h2>
        </div>
        <div className="lane-grid">
          {projects.map((project) => (
            <a
              className="lane-card"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.number}
            >
              <img
                className="card-cover"
                src={project.cover}
                alt=""
                aria-hidden="true"
              />
              <div className="card-top">
                <span>{project.number}</span>
                <span className="card-status">{project.category} ↗</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-examples">{project.details}</div>
            </a>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div>
          <div className="section-label">
            <span className="section-index">02</span>
            <span className="section-label-text">About</span>
          </div>
          <h2>
            Part marketer, part operator, <span className="lime-highlight">always curious.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I work at the intersection of go-to-market strategy, demand
            generation, and applied AI. I&apos;m interested in the machinery
            behind growth: how ideas become systems, how systems become habits,
            and how the work becomes easier to understand and improve.
          </p>
          <p>
            This is my working portfolio: a public record of the prompts,
            agents, experiments, scripts, teardowns, and small products I build
            along the way.
          </p>
          <p>
            Outside work, I&apos;m a hybrid athlete training across strength and
            endurance. Both pursuits draw on the same instinct: build a system,
            measure what matters, and keep improving it.
          </p>
        </div>
      </section>

      <section className="scope-section" id="scope">
        <div className="section-heading">
          <div className="section-label">
            <span className="section-index">03</span>
            <span className="section-label-text">Operating range</span>
          </div>
          <h2>
            From category <span className="lime-highlight">creation to scale.</span>
          </h2>
        </div>
        <div className="scope-meta" aria-label="Experience scope">
          <span>5+ years</span>
          <span>India · US · Southeast Asia · Middle East</span>
          <span>Unicorn-scale startup experience</span>
        </div>
        <div className="scope-grid">
          <article className="scope-card">
            <span className="scope-number">−1→0</span>
            <h3>Category creation</h3>
            <p>Working before the market has a shared language or playbook.</p>
          </article>
          <article className="scope-card">
            <span className="scope-number">0→1</span>
            <h3>Build the first motion</h3>
            <p>Turning a new idea into a clear audience, narrative, and GTM system.</p>
          </article>
          <article className="scope-card">
            <span className="scope-number">1→10</span>
            <h3>Make growth repeatable</h3>
            <p>Connecting research, campaigns, lifecycle, and measurement into a system.</p>
          </article>
          <article className="scope-card">
            <span className="scope-number">10→scale</span>
            <h3>Operate through complexity</h3>
            <p>Building with more stakeholders, markets, and operating constraints.</p>
          </article>
        </div>
      </section>

      <section className="contact-section">
        <div className="section-label">
          <span className="section-label-text">Find me</span>
        </div>
        <h2>Follow the builds as they ship.</h2>
        <div className="contact-links">
          <a
            className="button-link"
            href="https://github.com/reshma-baskaran"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a
            className="button-link"
            href="https://www.linkedin.com/in/reshma-baskaran"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a
            className="button-link"
            href="https://x.com/BaskaranReshma"
            target="_blank"
            rel="noreferrer"
          >
            X · @BaskaranReshma <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Reshma Baskaran</span>
        <span>Built in public, one system at a time.</span>
      </footer>
    </main>
  );
}

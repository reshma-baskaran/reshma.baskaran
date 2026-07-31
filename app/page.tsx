const portfolioLanes = [
  {
    number: "01",
    title: "Skills + agents",
    description:
      "Reusable AI workflows built to research, decide, draft, and execute with clear guardrails.",
    examples: "Codex skills · Agent playbooks · Workflow systems",
  },
  {
    number: "02",
    title: "Prompts",
    description:
      "Field-tested prompt systems for research, messaging, analysis, and repeatable GTM work.",
    examples: "Prompt libraries · Context patterns · Evaluation notes",
  },
  {
    number: "03",
    title: "Demand gen systems",
    description:
      "Practical scripts and pipelines that make campaign execution more consistent and measurable.",
    examples: "Campaign scripts · Repurposing pipelines · Operating systems",
  },
  {
    number: "04",
    title: "Experiments + teardowns",
    description:
      "Clear hypotheses, honest results, and close reads of growth systems worth learning from.",
    examples: "Growth experiments · Funnel teardowns · Lessons learned",
  },
  {
    number: "05",
    title: "Personal projects + apps",
    description:
      "Small products and useful tools built to turn an idea into something people can try.",
    examples: "Apps · Utilities · Creative builds",
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
          GTM + growth marketer · Systems builder
        </div>
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
          <span className="orbit-label orbit-label-one">Research</span>
          <span className="orbit-label orbit-label-two">Build</span>
          <span className="orbit-label orbit-label-three">Learn</span>
          <span className="orbit-center">GTM</span>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected systems</p>
          <h2>What I&apos;m building and documenting.</h2>
        </div>
        <div className="lane-grid">
          {portfolioLanes.map((lane) => (
            <article className="lane-card" key={lane.number}>
              <div className="card-top">
                <span>{lane.number}</span>
                <span className="card-status">Publishing soon</span>
              </div>
              <h3>{lane.title}</h3>
              <p>{lane.description}</p>
              <div className="card-examples">{lane.examples}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div>
          <p className="eyebrow">About</p>
          <h2>Part marketer, part operator, always curious.</h2>
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
        </div>
      </section>

      <section className="principles-section">
        <p className="eyebrow">How I work</p>
        <div className="principles-grid">
          <article>
            <span>01</span>
            <h3>Start with the problem</h3>
            <p>Useful work begins with a specific friction worth removing.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Build for reuse</h3>
            <p>Good systems make the next round faster, clearer, and better.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Show the learning</h3>
            <p>The method, tradeoffs, and misses are part of the portfolio.</p>
          </article>
        </div>
      </section>

      <section className="contact-section">
        <p className="eyebrow">Find me</p>
        <h2>Follow the builds as they ship.</h2>
        <a
          className="button-link"
          href="https://github.com/reshma-baskaran"
          target="_blank"
          rel="noreferrer"
        >
          View GitHub profile <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Reshma Baskaran</span>
        <span>Built in public, one system at a time.</span>
      </footer>
    </main>
  );
}

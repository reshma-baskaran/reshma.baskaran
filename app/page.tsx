const projects = [
  {
    number: "01",
    category: "Demand generation system",
    title: "ABM Engine",
    description:
      "A fail-closed account research engine with 21 portable cross-industry signals, the original 866 sector definitions, and approval-gated evidence.",
    details: "Portable signals · Account workflow · Evidence gates",
    visual: "signals" as const,
    href: "https://github.com/reshma-baskaran/abm-engine",
  },
  {
    number: "02",
    category: "Skill + writing system",
    title: "Outbound Research & Writing",
    description:
      "A fail-closed research and writing system requiring complete campaign inputs, claim-level sources, distinct touch roles, and human review.",
    details: "Readiness gate · Claim lineage · Sequence QA",
    visual: "sequence" as const,
    href: "https://github.com/reshma-baskaran/outbound-research-and-writing",
  },
  {
    number: "03",
    category: "Relationship intelligence system",
    title: "Relationship Intelligence Second Brain",
    description:
      "An Obsidian system that separates public intelligence from direct relationships, ingests traceable sources, and generates source-linked briefs.",
    details: "Evidence context · Source ingest · Whole-vault digest",
    visual: "memory" as const,
    href: "https://github.com/reshma-baskaran/relationship-intelligence-second-brain",
  },
];

const capabilities = [
  "Demand generation",
  "B2B integrated marketing",
  "Market intelligence",
  "Lifecycle marketing",
  "Partner marketing",
  "Business development",
  "Revenue ownership",
];

function SystemVisual({ kind }: { kind: "signals" | "sequence" | "memory" }) {
  if (kind === "signals") {
    return (
      <div className="system-visual visual-signals" aria-hidden="true">
        <span className="visual-kicker">Signal → message</span>
        <div className="signal-map">
          <span className="signal-ring signal-ring-outer" />
          <span className="signal-ring signal-ring-inner" />
          <span className="signal-dot signal-dot-coral" />
          <span className="signal-dot signal-dot-blue" />
          <span className="signal-dot signal-dot-ink" />
          <span className="signal-core">
            <strong>21</strong>
            <small>portable</small>
          </span>
        </div>
        <span className="signal-route" />
        <div className="evidence-stack">
          <span>Source</span>
          <span>Context</span>
          <span>Freshness</span>
        </div>
        <div className="message-output">
          <small>Output</small>
          <strong>Relevant message</strong>
          <span />
          <span />
        </div>
      </div>
    );
  }

  if (kind === "sequence") {
    const stages = [
      ["01", "Account"],
      ["02", "Pressure"],
      ["03", "Proof"],
      ["04", "Angle"],
      ["05", "Sequence"],
      ["06", "QA"],
    ];

    return (
      <div className="system-visual visual-sequence" aria-hidden="true">
        <span className="visual-kicker">Research → sequence</span>
        <span className="sequence-rail" />
        <div className="sequence-grid">
          {stages.map(([number, label]) => (
            <span className="sequence-step" key={number}>
              <small>{number}</small>
              <strong>{label}</strong>
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="system-visual visual-memory" aria-hidden="true">
      <span className="visual-kicker">Conversation → context</span>
      <div className="memory-inputs">
        <span>Call</span>
        <span>Note</span>
        <span>Email</span>
      </div>
      <div className="memory-lines memory-lines-left" />
      <div className="memory-core">
        <span />
        <strong>Memory</strong>
        <small>with provenance</small>
      </div>
      <div className="memory-lines memory-lines-right" />
      <div className="memory-outputs">
        <span>Open loop</span>
        <span>Next action</span>
        <span>Brief</span>
      </div>
    </div>
  );
}

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
            data-ph-capture-attribute-portfolio-action="github_profile_nav"
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

        <div
          className="hero-capabilities"
          aria-label="Core marketing capabilities"
        >
          <div className="hero-capabilities-track">
            <div className="hero-capabilities-group">
              {capabilities.map((capability) => (
                <span key={capability}>{capability}</span>
              ))}
            </div>
            <div className="hero-capabilities-group" aria-hidden="true">
              {capabilities.map((capability) => (
                <span key={`repeat-${capability}`}>{capability}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-orbit" aria-hidden="true">
          <span className="orbit-ring orbit-ring-outer" />
          <span className="orbit-ring orbit-ring-middle" />
          <span className="orbit-ring orbit-ring-inner" />
          <span className="orbit-ring orbit-ring-core" />
          <span className="orbit-center">GTM</span>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div className="section-label">
            <span className="section-index">01</span>
            <span className="section-label-text">Selected systems</span>
          </div>
          <h2>What I&apos;m building.</h2>
        </div>
        <div className="lane-grid">
          {projects.map((project) => (
            <a
              className="lane-card"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              data-ph-capture-attribute-portfolio-action={`project_${project.visual}`}
              key={project.number}
            >
              <SystemVisual kind={project.visual} />
              <div className="card-top">
                <span>{project.number}</span>
                <span className="card-status">{project.category} ↗</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-examples">{project.details}</div>
              <span className="card-action">
                View repository on GitHub
                <span className="card-action-icon" aria-hidden="true">
                  ↗
                </span>
              </span>
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

      <section className="proof-section" id="in-the-wild">
        <div className="section-heading proof-heading">
          <div className="section-label">
            <span className="section-index">04</span>
            <span className="section-label-text">In the wild</span>
          </div>
          <h2>
            The work is better when it <span className="lime-highlight">leaves the screen.</span>
          </h2>
        </div>

        <div className="proof-grid">
          <a
            className="feature-story"
            href="https://shorts.growthx.club/p/the-3-people-marketing-team-at-mukesh"
            target="_blank"
            rel="noreferrer"
            aria-label="Read the GrowthX day in the life feature"
            data-ph-capture-attribute-portfolio-action="growthx_profile"
          >
            <div className="feature-masthead">
              <span className="feature-overline">Featured story</span>
              <strong>GrowthX</strong>
              <span className="feature-edition">Member profiles</span>
            </div>
            <div className="feature-dateline">
              <span>Profile / Growth marketing</span>
              <time dateTime="2025-11-20">20 November 2025</time>
            </div>
            <div className="feature-story-copy">
              <h3>A day in the life of Reshma Baskaran.</h3>
              <p>
                An inside look at the calls, channel bets, and operating rhythm
                behind demand generation on a three-person marketing team.
              </p>
              <span className="feature-cta">
                <span>Read my GrowthX profile</span>
                <span className="feature-cta-arrow" aria-hidden="true">↗</span>
              </span>
            </div>
            <div className="feature-footer" aria-hidden="true">
              <span>Growth</span>
              <span>Systems</span>
              <span>Behind the scenes</span>
            </div>
          </a>

          <article className="community-story">
            <div className="proof-card-meta">
              <span>Women-only community</span>
              <span>Bengaluru</span>
            </div>
            <div className="community-photo-grid" aria-label="Photos from That’s What She Sold">
              <img
                className="community-photo community-photo-hero"
                src="events/thats-what-she-sold-group.jpg"
                alt="Women marketers gathered for That’s What She Sold in Bengaluru"
                width="1600"
                height="1200"
                loading="lazy"
              />
              <img
                className="community-photo community-photo-pitch"
                src="events/pitch-challenge.jpg"
                alt="A participant presenting during the That’s What She Sold pitch challenge"
                width="1600"
                height="1200"
                loading="lazy"
              />
              <img
                className="community-photo community-photo-portrait"
                src="events/hosting-close.jpg"
                alt="Reshma Baskaran speaking to women marketers at a community event"
                width="897"
                height="1600"
                loading="lazy"
              />
              <img
                className="community-photo community-photo-portrait"
                src="events/hosting-room.jpg"
                alt="Reshma Baskaran hosting a session for women marketers"
                width="1015"
                height="1600"
                loading="lazy"
              />
              <img
                className="community-photo community-photo-crowd"
                src="events/women-marketers-group.jpg"
                alt="Community photo from a women-only marketing meetup hosted by Reshma Baskaran"
                width="1600"
                height="1200"
                loading="lazy"
              />
              <img
                className="community-photo community-photo-hosts"
                src="events/host-team.jpg"
                alt="The women behind That’s What She Sold in front of the event display"
                width="1600"
                height="1200"
                loading="lazy"
              />
            </div>
            <div className="community-story-copy">
              <h3>I host rooms where women marketers build, pitch, and learn together.</h3>
              <p>
                At That&apos;s What She Sold, I brought 25+ women marketers together
                to take on deliberately difficult briefs and turn them into
                creative pitches in one hour.
              </p>
              <a
                className="proof-link"
                href="https://www.linkedin.com/posts/reshma-baskaran_what-a-day-when-sakshi-a-and-i-hosted-activity-7438838780746170369-cVf7"
                target="_blank"
                rel="noreferrer"
                data-ph-capture-attribute-portfolio-action="event_recap"
              >
                See the event recap <span aria-hidden="true">↗</span>
              </a>
            </div>
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
            data-ph-capture-attribute-portfolio-action="github_profile_contact"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a
            className="button-link"
            href="https://www.linkedin.com/in/reshma-baskaran"
            target="_blank"
            rel="noreferrer"
            data-ph-capture-attribute-portfolio-action="linkedin_profile_contact"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a
            className="button-link"
            href="https://x.com/BaskaranReshma"
            target="_blank"
            rel="noreferrer"
            data-ph-capture-attribute-portfolio-action="x_profile_contact"
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

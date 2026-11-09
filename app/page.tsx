import FooterConcepts from "./FooterConcepts";
import ChessInterlude from "./ChessInterlude";
import InteractiveRange from "./InteractiveRange";
import WorkshopGallery from "./WorkshopGallery";
import ScrollExperience from "./ScrollExperience";
import ScrollScene from "./ScrollScene";

const capabilities = ["Demand generation", "B2B integrated marketing", "Market intelligence", "Lifecycle marketing", "Partner marketing", "Business development", "Revenue ownership"];
const stages = [
    { step: "−1 → 0", title: "Category creation", copy: "Working before the market has a shared language or playbook." },
    { step: "0 → 1", title: "Build the first motion", copy: "Turning a new idea into a clear audience, narrative, and GTM system." },
    { step: "1 → 10", title: "Make growth repeatable", copy: "Connecting research, campaigns, lifecycle, and measurement into a system." },
    { step: "10 → scale", title: "Operate through complexity", copy: "Building with more stakeholders, markets, and operating constraints." },
];
const photos = [
    ["growth-marketing-workshop-group.png", "Reshma Baskaran with participants at a growth marketing workshop in Bangalore"],
    ["growth-marketing-workshop-presenting.png", "Reshma Baskaran presenting at a growth marketing workshop in Bangalore"],
    ["thats-what-she-sold-group.jpg", "Women marketers gathered for That’s What She Sold in Bengaluru"],
    ["hosting-close.jpg", "Reshma Baskaran speaking to women marketers at a community event"],
    ["pitch-challenge.jpg", "A participant presenting during the That’s What She Sold pitch challenge"],
    ["host-team.jpg", "The women behind That’s What She Sold in front of the event display"],
    ["hosting-room.jpg", "Reshma Baskaran hosting a session for women marketers"],
    ["women-marketers-group.jpg", "Community photo from a women-only marketing meetup hosted by Reshma Baskaran"],
];
function Arrow({ diagonal = false }: {
    diagonal?: boolean;
}) { return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "↘"}</span>; }
export default function Home() {
    return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <ScrollExperience>
    <ScrollScene intro id="top" label="Introduction"><header className="site-nav wrap"><a className="wordmark" href="#top" aria-label="Reshma Baskaran home"><img src="/rb-monogram.svg" alt="" width="40" height="40" /></a><nav aria-label="Primary navigation"><a href="#community">Workshops</a><a href="#about">About me</a><a href="#contact">Contact</a></nav><a className="nav-cta" href="https://www.linkedin.com/in/reshma-baskaran" target="_blank" rel="noreferrer" data-ph-capture-attribute-portfolio-action="linkedin_profile_nav">LinkedIn <Arrow diagonal/></a></header>
      <section className="hero wrap" aria-labelledby="hero-title">
        <p className="hero-eyebrow"><span className="status-dot"/>SaaS and AI-native Marketer</p>
        <div className="hero-name" aria-hidden="true"><span>Reshma</span><span>Baskaran</span></div>
        <div className="hero-portrait"><img src="/reshma-hero-cutout.png" alt="Reshma Baskaran" width="1122" height="1402" fetchPriority="high"/></div>
        <div className="hero-copy"><h1 id="hero-title">Leading GTM<br />and growth<br /><em>marketing</em></h1></div><p className="hero-description">I build practical systems that connect research, content, campaigns and AI workflows to drive growth.</p>

      </section>
      <div className="hero-facts wrap"><div><span className="eyebrow">Current role</span><p>GTM at NuPlay AI</p></div><div><span className="eyebrow">Experience</span><p>6+ years <span className="muted">/ Unicorn-scale startups</span></p></div><div><span className="eyebrow">Worked across</span><p>India · US · Southeast Asia</p></div><div><span className="eyebrow">Beyond work</span><p>Hybrid Athlete<br />Building <a className="beyond-work-link" href="https://neighbourhoodfinds.com" target="_blank" rel="noreferrer">neighbourhoodfinds.com</a></p></div></div>
    </ScrollScene>
    <main id="main" className="page-content">
      <ChessInterlude />
      <div className="stacked-sections"><ScrollScene id="about" label="About me"><section className="about-section section wrap" aria-labelledby="about-title"><p className="eyebrow section-label">01 / About me</p><div className="about-layout"><div className="about-aside"><p className="about-greeting">Hello, I’m Reshma</p><div className="about-photo"><img src="/reshma-baskaran-headshot.webp" alt="Portrait of Reshma Baskaran" width="400" height="400" loading="lazy"/></div></div><div className="about-main"><h2 id="about-title">Part marketer,<br />part operator,<br /><em>always curious.</em></h2><div className="systems-inner" id="systems"><p className="eyebrow systems-label" id="systems-title">Systems I built</p><div className="systems-list"><details name="systems" open><summary><span className="systems-number">01</span><span>a context and memory layer</span></summary><p>Brings relevant context from platforms and internal tools into Obsidian, creating a shared memory layer for research, campaign planning and GTM decisions.</p></details><details name="systems"><summary><span className="systems-number">02</span><span>an in-house ABM system</span></summary><p>Turns account research into personalised outbound: identifies relevant intent signals across industries, matches use cases to the company’s value proposition, activates campaigns and learns from performance.</p></details><details name="systems"><summary><span className="systems-number">03</span><span>a website and inbound growth system</span></summary><p>Rebuilt the website and conversion journey across UX, messaging, SEO and content. Keyword and search-led work contributed to 12× qualified leads and 4× inbound leads across the wider GTM programme.</p></details><details name="systems"><summary><span className="systems-number">04</span><span>an integrated marketing system</span></summary><p>Turns account insights, research and performance data into relevant content, webinars and events. Campaign engagement rose 30%, while landing-page and campaign conversion improved 15–20%.</p></details></div></div></div></div></section></ScrollScene>
      <div className="stack-pause" aria-hidden="true"/><ScrollScene id="scope" label="Operating Range and Startups"><section className="scope-section section wrap" aria-labelledby="scope-title"><div className="section-heading"><div><p className="eyebrow section-label">02 / Operating Range and Startups</p><h2 id="scope-title">I have experience<br /><em>across the board.</em></h2></div><p className="section-intro">6+ years across India, the US, and Southeast Asia. Experience inside unicorn-scale startups.</p></div><InteractiveRange /></section></ScrollScene>
      <div className="stack-pause" aria-hidden="true"/><ScrollScene id="community" label="Community"><section className="proof-section community-section section wrap">
        <article className="community-story"><div className="community-heading"><div><p className="eyebrow">Workshops + events / Bangalore</p><h3>Through growth marketing workshops and events, I’ve brought together <em>400+ people in Bangalore.</em></h3></div></div><WorkshopGallery /><div className="gallery-footer"><span>400+ people across multiple events</span><span>Growth marketing workshops / Bangalore</span></div></article></section></ScrollScene>
      </div><ScrollScene id="contact" label="Stay connected">
        <footer className="portfolio-footer" aria-label="Stay connected">
          <div className="wrap">
            <FooterConcepts />
            <div className="footer-bottom"><p>© {new Date().getFullYear()} Reshma Baskaran</p><a href="#top">Back to top <span aria-hidden="true">↑</span></a></div>
          </div>
        </footer>
      </ScrollScene></main>
    </ScrollExperience>
  </>;
}

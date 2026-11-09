"use client";
import posthog from "posthog-js";
import type { MouseEvent } from "react";

function trackOpen(event: MouseEvent<HTMLElement>, system: string) {
  const details = event.currentTarget.parentElement as HTMLDetailsElement | null;
  if (details && !details.open && process.env.NODE_ENV === "production") {
    posthog.capture("portfolio_system_opened", { system });
  }
}

export default function SystemsList() {
  return <div className="systems-inner" id="systems"><p className="eyebrow systems-label" id="systems-title">Systems I built</p><div className="systems-list"><details name="systems" open><summary onClick={(event) => trackOpen(event, "context_memory")}><span className="systems-number">01</span><span>a context and memory layer</span></summary><p>Brings relevant context from platforms and internal tools into Obsidian, creating a shared memory layer for research, campaign planning and GTM decisions.</p></details><details name="systems"><summary onClick={(event) => trackOpen(event, "abm")}><span className="systems-number">02</span><span>an in-house ABM system</span></summary><p>Turns account research into personalised outbound: identifies relevant intent signals across industries, matches use cases to the company’s value proposition, activates campaigns and learns from performance.</p></details><details name="systems"><summary onClick={(event) => trackOpen(event, "website_inbound")}><span className="systems-number">03</span><span>a website and inbound growth system</span></summary><p>Rebuilt the website and conversion journey across UX, messaging, SEO and content. Keyword and search-led work contributed to 12× qualified leads and 4× inbound leads across the wider GTM programme.</p></details><details name="systems"><summary onClick={(event) => trackOpen(event, "integrated_marketing")}><span className="systems-number">04</span><span>an integrated marketing system</span></summary><p>Turns account insights, research and performance data into relevant content, webinars and events. Campaign engagement rose 30%, while landing-page and campaign conversion improved 15–20%.</p></details></div></div>;
}

import posthog from "posthog-js";

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

if (process.env.NODE_ENV === "production" && projectToken && apiHost) {
  posthog.init(projectToken, {
    api_host: apiHost,
    defaults: "2026-05-30",
    autocapture: true,
    capture_pageview: true,
    capture_pageleave: true,
    person_profiles: "identified_only",
    disable_session_recording: true,
    respect_dnt: true,
  });
}

"use client";
import { useRef, useState } from "react";
import posthog from "posthog-js";

const photos = [
  { src: "growth-marketing-workshop-group.webp", alt: "Participants at a growth marketing workshop in Bangalore", title: "Growth marketing workshop", description: "40+ B2B marketers joined a hands-on workshop on building an end-to-end ABM system." },
  { src: "growth-marketing-workshop-presenting.webp", alt: "Presenting at a growth marketing workshop in Bangalore", title: "Growth marketing workshop", description: "Breaking down automated research, persona-based targeting, AI agent skills and a campaign context layer." },
  { src: "thats-what-she-sold-group.webp", alt: "Women marketers gathered for That’s What She Sold", title: "That’s What She Sold", description: "25+ women marketers came together to practise positioning and selling to a challenging audience." },
  { src: "hosting-close.webp", alt: "Hosting a session for women marketers", title: "Hosting the conversation", description: "Hosting a session for women marketers at a Bangalore meetup." },
  { src: "pitch-challenge.webp", alt: "A participant presents during the pitch challenge", title: "The pitch challenge", description: "Teams had 60 minutes to position and pitch an unusual product to a difficult audience." },
  { src: "host-team.webp", alt: "The team behind That’s What She Sold", title: "The people behind the event", description: "Co-hosted with Sakshi Agarwal and Shravika Jain: a hands-on event about the art of selling." },
  { src: "hosting-room.webp", alt: "Hosting a session at the meetup", title: "Finding your voice", description: "Hosting a conversation on finding your voice at a women marketers’ meetup in Bangalore." },
  { src: "women-marketers-group.webp", alt: "A women-only marketing meetup in Bangalore", title: "Finding your voice", description: "Women marketers came together in Bangalore for an event about finding their voice." },
];

export default function WorkshopGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const visiblePhoto = useRef<number | null>(null);
  function reveal(i: number, method: "hover" | "keyboard" | "touch") {
    if (visiblePhoto.current !== i && process.env.NODE_ENV === "production") {
      posthog.capture("portfolio_photo_details_revealed", { photo: photos[i].src, event_title: photos[i].title, method });
    }
    visiblePhoto.current = i;
    setSelected(i);
  }
  function hide() { visiblePhoto.current = null; setSelected(null); }
  return <div className="community-gallery" aria-label="Growth marketing workshops and community events in Bangalore">
    {photos.map((photo, i) => <button
      className={`gallery-photo gallery-photo-${i + 1}${selected === i ? " is-revealed" : ""}`}
      key={photo.src}
      onPointerEnter={(event) => { if (event.pointerType !== "touch") reveal(i, "hover"); }}
      onPointerLeave={(event) => { if (event.pointerType !== "touch") hide(); }}
      onFocus={(event) => { if (event.currentTarget.matches(":focus-visible")) reveal(i, "keyboard"); }}
      onBlur={hide}
      onClick={() => { if (window.matchMedia("(hover: none)").matches) { if (selected === i) hide(); else reveal(i, "touch"); } }}
      aria-expanded={selected === i}
      aria-label={`${photo.alt}: ${photo.description}`}
    >
      <img src={`/events/${photo.src.replace(".webp", "-640.webp")}`} alt="" loading="lazy" decoding="async" />
      {selected === i && <span className="gallery-story"><span className="gallery-story-kicker">Workshops + events</span><span className="gallery-story-title">{photo.title}</span><span className="gallery-story-description">{photo.description}</span></span>}
    </button>)}
  </div>;
}

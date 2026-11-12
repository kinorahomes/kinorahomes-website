
"use client";

import { useState } from "react";
import { Heart, Star, Target } from "lucide-react";
import { Photo, BottomBanner } from "../../components/Story";

// ABOUT KINORA — INTERACTIVE SECTIONS
const sections = [
  {
    name: "Our Story",
    title: "A name rooted in belonging.",
    body: "Kinora brings together two ideas: KIN, representing family, and ORA, representing a new beginning. Together, they express our commitment to connection, care and possibility.",
  },
  {
    name: "Our Mission",
    title: "Care that feels personal.",
    body: "To provide a safe, supportive home where children and youth can belong, grow, build confidence and experience meaningful everyday opportunities.",
  },
  {
    name: "Our Vision",
    title: "A brighter beginning for every child.",
    body: "A community where every child and youth has the opportunity to reach their full potential and experience genuine belonging.",
  },
  {
    name: "Our Purpose",
    title: "Every moment can matter.",
    body: "To create meaningful experiences today that help build stronger, brighter tomorrows.",
  },
];

export default function About() {
  const [active, setActive] = useState(0);

  return (
    <main>
      {/* ABOUT KINORA HERO SECTION */}
      <section className="page-hero pink">
        <div className="page-hero-inner">
          <div className="page-hero-copy">
            <p className="eyebrow">ABOUT KINORA</p>

            <h1>
              Built on care.
              <br />
              Guided by purpose.
            </h1>

            <p>
              Focused on a brighter future, together.
            </p>
          </div>

          <div className="page-hero-art">
            <Photo
              src="/kinora-logo.png"
              alt="A welcoming doorway"
            />
          </div>
        </div>
      </section>

      {/* INTERACTIVE ABOUT TABS */}
      <section className="section about-story">
        <div
          className="about-tabs"
          role="tablist"
          aria-label="About Kinora"
        >
          {sections.map((section, index) => (
            <button
              type="button"
              key={section.name}
              role="tab"
              aria-selected={active === index}
              onClick={() => setActive(index)}
              className={
                active === index ? "selected" : ""
              }
            >
              {section.name}
            </button>
          ))}
        </div>

        {/* SELECTED TAB CONTENT */}
        <div className="about-panel" role="tabpanel">
          <p className="eyebrow">
            {sections[active].name.toUpperCase()}
          </p>

          <h2>{sections[active].title}</h2>

          <p>{sections[active].body}</p>

          {/* MEANING BEHIND KINORA */}
          
{/* SHOW KIN + ORA ONLY UNDER OUR STORY */}
{active === 0 && (
  <div className="name-meaning">
    <div>
      <strong>KIN</strong>
      <span>
        Family • Connection • Belonging
      </span>
    </div>

    <span className="plus">+</span>

    <div>
      <strong>ORA</strong>
      <span>
        New beginnings • Growth • Hope
      </span>
    </div>
  </div>
)}

        </div>
      </section>

      {/* MISSION, VISION AND PURPOSE */}
      <section className="section mission-grid">
        <article>
          <Target />

          <h3>Our Mission</h3>

          <p>
            A safe, supportive home where children
            and youth can belong, grow and thrive.
          </p>
        </article>

        <article>
          <Heart />

          <h3>Our Vision</h3>

          <p>
            Every child and youth has the opportunity
            to reach their full potential.
          </p>
        </article>

        <article>
          <Star />

          <h3>Our Purpose</h3>

          <p>
            Meaningful experiences today for
            brighter tomorrows.
          </p>
        </article>
      </section>

      {/* BOTTOM BANNER */}
      <BottomBanner />
    </main>
  );
}


"use client";

import { useState } from "react";

import {
  Sun,
  BookOpen,
  Users,
  Heart,
  Utensils,
  TreePine,
} from "lucide-react";

import {
  Photo,
  BottomBanner,
} from "../../components/Story";

// LIFE AT KINORA - DAILY EXPERIENCES
const items = [
  {
    time: "Morning",
    desc: "A calm start with routines that build comfort and consistency.",
    category: "breakfast",
    image: "/nutritional.png",
    icon: Sun,
    color: "yellow",
  },
  {
    time: "School & Learning",
    desc: "Encouragement with education, personal interests and new skills.",
    category: "School & Learning",
    image: "/grow.png",
    icon: BookOpen,
    color: "blue",
  },
  {
    time: "Afternoon",
    desc: "Activities, recreation, life skills and time to explore interests.",
    category: "Recreation",
    image: "/outdoor.png",
    icon: TreePine,
    color: "coral",
  },
  {
    time: "Shared Meals",
    desc: "Opportunities to connect over everyday moments.",
    category: "Meals",
    image: "/living.png",
    icon: Utensils,
    color: "green",
  },
  {
    time: "Community",
    desc: "Connections and experiences beyond the home.",
    category: "Community",
    image: "/explore.png",
    icon: Users,
    color: "purple",
  },
  {
    time: "Evening",
    desc: "Time to unwind, reconnect and settle into familiar routines.",
    category: "Daily Life",
    image: "/sharedspace.png",
    icon: Heart,
    color: "pink",
  },
];

// FILTER CATEGORIES
const filters = [
  "Daily Life",
  "Meals",
  "School & Learning",
  "Community",
  "Recreation",
];

export default function LifeAtKinora() {
  const [filter, setFilter] = useState("Daily Life");

  // FILTER DAILY EXPERIENCES
  const visible =
    filter === "Daily Life"
      ? items
      : items.filter((item) => item.category === filter);

  return (
    <main>
      {/* LIFE AT KINORA HEADER */}
      <section className="life-header">
        <p className="eyebrow">
          EVERYDAY EXPERIENCES
        </p>

        <h1>
          Life at <em>Kinora</em>
        </h1>

        <p>
          Everyday experiences that build confidence,
          independence and a sense of belonging.
        </p>

        {/* INTERACTIVE FILTER TABS */}
        <div
          className="filter-tabs"
          role="group"
          aria-label="Explore daily life"
        >
          {filters.map((f) => (
            <button
              type="button"
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={
                filter === f ? "selected" : ""
              }
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* DAILY EXPERIENCES TIMELINE */}
      <section className="section timeline">
        {visible.map(
          ({ time, desc, image, icon: Icon, color }) => (
            <article
              className="timeline-row"
              key={time}
            >
              <div className={"timeline-icon " + color}>
                <Icon size={28} />
              </div>

              <div className="timeline-copy">
                <h2>{time}</h2>
                <p>{desc}</p>
              </div>

              <Photo
                src={image}
                alt={time + " at Kinora"}
              />
            </article>
          )
        )}
      </section>

      {/* BOTTOM BANNER */}
      <BottomBanner
        title="Everyday moments make a bigger tomorrow."
      />
    </main>
  );
}

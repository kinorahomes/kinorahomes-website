
"use client";

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

const items = [
  {
    time: "Morning",
    desc: "A calm start with routines that build comfort and consistency.",
    image: "/food.jpeg",
    icon: Sun,
    color: "yellow",
  },
  {
    time: "School & Learning",
    desc: "Encouragement with education, personal interests and new skills.",
    image: "/library.webp",
    icon: BookOpen,
    color: "blue",
  },
  {
    time: "Afternoon",
    desc: "Activities, recreation, life skills and time to explore interests.",
    image: "/afternoon.png",
    icon: TreePine,
    color: "coral",
  },
  {
    time: "Shared Meals",
    desc: "Opportunities to connect over everyday moments.",
    image: "/living.png",
    icon: Utensils,
    color: "green",
  },
  {
    time: "Community",
    desc: "Connections and experiences beyond the home.",
    image: "/community.jpeg",
    icon: Users,
    color: "purple",
  },
  {
    time: "Evening",
    desc: "Time to unwind, reconnect and settle into familiar routines.",
    image: "/evening.png",
    icon: Heart,
    color: "pink",
  },
];

export default function LifeAtKinora() {
  return (
    <main>
      {/* PAGE HEADER */}
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

        {/* DAILY LIFE TAB ONLY */}
        <div
          className="filter-tabs"
          role="group"
          aria-label="Daily life"
        >
          <span className="daily-life-tab">
            Daily Life
          </span>
        </div>
      </section>

      {/* DAILY ACTIVITIES */}
      <section className="section timeline">
        {items.map(
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

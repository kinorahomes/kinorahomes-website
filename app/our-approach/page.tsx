
import {
  PageHero,
  Photo,
  BottomBanner,
  Values,
} from "../../components/Story";

import {
  Heart,
  Sun,
  Leaf,
  Star,
} from "lucide-react";

const pillars = [
  {
    title: "Relationships",
    copy: "Consistent care and meaningful connections that build trust and a sense of belonging.",
    icon: Heart,
    color: "pink",
    image: "/experience.png",
  },
  {
    title: "Stability",
    copy: "Predictable routines and a safe, structured environment that support everyday well-being.",
    icon: Sun,
    color: "yellow",
    image: "/stability.png",
  },
  {
    title: "Growth",
    copy: "Encouragement, learning and practical life skills that nurture confidence and independence.",
    icon: Leaf,
    color: "green",
    image: "/grow.png",
  },
  {
    title: "Opportunities",
    copy: "Everyday experiences that invite discovery, participation and brighter possibilities.",
    icon: Star,
    color: "blue",
    image: "/opportunities.png",
  },
];

export default function OurApproach() {
  return (
    <main>
      {/* OUR APPROACH HERO SECTION */}
      <PageHero
        eyebrow="OUR APPROACH"
        title="Creating Positive Experiences"
        subtitle="Thoughtful care, meaningful relationships and everyday opportunities for brighter tomorrows."
        image="/arts.png"
        accent="pink"
      />

      {/* FOUR PILLARS OF OUR APPROACH */}
      <section className="section approach-list">
        {pillars.map(
          ({ title, copy, icon: Icon, color, image }, i) => (
            <article
              className={"approach-row " + color}
              key={title}
            >
              <div className="approach-number">
                0{i + 1}
              </div>

              <div className="approach-copy">
                <div className="approach-icon">
                  <Icon size={32} />
                </div>

                <h2>{title}</h2>

                <p>{copy}</p>
              </div>

              <Photo
                src={image}
                alt={title + " at Kinora"}
              />
            </article>
          )
        )}
      </section>

      {/* KINORA VALUES */}
      <Values heading={false} />

      {/* BOTTOM BANNER */}
      <BottomBanner
        title="Real experiences. Meaningful skills. A brighter tomorrow."
      />
    </main>
  );
}

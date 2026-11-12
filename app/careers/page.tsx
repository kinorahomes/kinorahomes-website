
import {
  Heart,
  Users,
  Leaf,
  Star,
} from "lucide-react";

import {
  Photo,
  BottomBanner,
  ButtonLink,
} from "../../components/Story";

// CAREER BENEFITS
const benefits = [
  {
    icon: Heart,
    title: "Meaningful Work",
    text: "Make a positive impact through everyday care.",
  },
  {
    icon: Users,
    title: "Supportive Team",
    text: "Collaborate in a caring, accountable environment.",
  },
  {
    icon: Leaf,
    title: "Growth & Development",
    text: "Build skills and develop professionally.",
  },
  {
    icon: Star,
    title: "Purpose-Driven",
    text: "Be part of something that truly matters.",
  },
];

export default function Careers() {
  return (
    <main>
      {/* CAREERS HERO SECTION */}
      <section className="page-hero yellow">
        <div className="page-hero-inner">
          <div className="page-hero-copy">
            <p className="eyebrow">
              CAREERS AT KINORA
            </p>

            <h1>Join Our Team</h1>

            <h2>Make a Meaningful Difference</h2>

            <p>
              Be part of a supportive team that helps
              children and youth build brighter futures.
            </p>

            <ButtonLink href="/contact">
              Get in Touch
            </ButtonLink>
          </div>

          <div className="page-hero-art">
            <Photo
              src="/staff.png"
              alt="Warm inviting Kinora environment"
            />
          </div>
        </div>
      </section>

      {/* WHY WORK AT KINORA */}
      <section className="section">
        <div className="center-heading">
          <p className="eyebrow">
            WORK WITH PURPOSE
          </p>

          <h2>Why Work at Kinora?</h2>
        </div>

        <div className="career-benefits">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon size={38} />

              <h3>{title}</h3>

              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* GROW WITH US */}
      <section className="section warm-section">
        <div className="two-col">
          <div>
            <p className="eyebrow">
              GROW WITH US
            </p>

            <h2>
              Real people.
              <br />
              <em>Real impact.</em>
            </h2>

            <p>
              Our team provides consistent, respectful
              and compassionate support. We value
              collaboration, accountability and a
              commitment to the well-being of children
              and youth.
            </p>

            <p>
              Interested in future opportunities?
              Contact our team to introduce yourself
              and learn more.
            </p>

            <ButtonLink href="/contact">
              Contact Our Team
            </ButtonLink>
          </div>

          <Photo
            src="/apply.png"
            alt="Apply"
          />
        </div>
      </section>

      {/* BOTTOM BANNER */}
      <BottomBanner />
    </main>
  );
}

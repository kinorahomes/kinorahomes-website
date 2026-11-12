
import Image from "next/image";
import {
  Values,
  ButtonLink,
  Photo,
  BottomBanner,
  FeatureStrip,
} from "../components/Story";

export default function Home() {
  return (
    <main>
      {/* HOMEPAGE HERO */}
      <section className="storybook-hero">
        <div className="storybook-hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">
              WELCOME TO KINORA HOMES
            </p>

            <h1>
              A Place
              <br />
              <span className="green-ink">To</span>{" "}
              <span className="coral-ink">Belong</span>
            </h1>

            <p>
              Explore the spaces, experiences and
              relationships that make Kinora a place
              for children and youth to truly belong.
            </p>

            <ButtonLink href="/our-home">
              Explore Our Home
            </ButtonLink>

            <div className="hero-sign">
              Rooted in Care.
              <br />
              Growing with Hope.
            </div>
          </div>

          {/* NEW HOMEPAGE IMAGE */}
          <div className="hero-home-photo">
            <Image
              src="/home.png"
              alt="Kinora Homes welcoming living room, kitchen and dining area"
              width={1600}
              height={900}
              priority
              className="hero-home-image"
            />
          </div>
        </div>
      </section>

      {/* KINORA VALUES */}
      <Values />

      {/* A PLACE TO BELONG */}
      <section className="section warm-section">
        <div className="two-col">
          <div>
            <p className="eyebrow">
              A NEW CHAPTER
            </p>

            <h2>
              Where Connections Grow.
              <br />
              <em>New Chapters Begin.</em>
            </h2>

            <p>
              At Kinora Homes, we create a warm,
              structured environment where children
              and youth can build connections,
              develop confidence and experience
              the comfort of everyday routines.
            </p>

            <ButtonLink href="/our-approach">
              Our Approach
            </ButtonLink>
          </div>

          <div className="photo-mosaic">
            <Photo
              src="/connect.png"
              alt="Cozy family living room"
              caption="Connect"
            />

            <Photo
              src="/learn.png"
              alt="Creative learning space"
              caption="Learn"
            />

            <Photo
              src="/explore.png"
              alt="Outdoor green space"
              caption="Explore"
            />
          </div>
        </div>
      </section>

      {/* LIFE AT KINORA */}
      <section className="section blue-section">
        <div className="two-col">
          <div>
            <p className="eyebrow">
              LIFE AT KINORA
            </p>

            <h2>
              Creating Together.
              <br />
              <em>Growing Every Day.</em>
            </h2>

            <p>
              Through creativity, shared experiences and meaningful connections, children and youth have opportunities to express themselves, discover their strengths, and build confidence in a supportive environment.
            </p>

            <ButtonLink href="/life-at-kinora" light>
              See Life at Kinora
            </ButtonLink>
          </div>

          <Photo
            src="/experience.png"
            alt="Bright inviting home interior"
          />
        </div>
      </section>

      {/* ADDITIONAL FEATURES */}
      <FeatureStrip />

      {/* BOTTOM BANNER */}
      <BottomBanner />
    </main>
  );
}

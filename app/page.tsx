
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
              A Place to
              <br />
              Belong.
              <br />
              A Place to Grow.
            </h1>

            <p>
              Every child deserves to feel safe, respected, heard
              and valued. At Kinora Homes, we believe that a sense of
              belonging and supportive relationships can help children
              and youth recognize their strengths, build confidence and 
              work toward meaningful goals.
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
              src="/living2.png"
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
              <em className="sage-ink">
                New Chapters Begin.
              </em>
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
            <div className="explore-full-image">
            <Photo
              src="/library.webp"
              alt="Creative learning space"
              caption="Learn"
            />
            </div>
            <Photo
              src="/community.jpeg"
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

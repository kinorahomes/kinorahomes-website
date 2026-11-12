
import {
  PageHero,
  Photo,
  BottomBanner,
  FeatureStrip,
} from "../../components/Story";

export default function OurHome() {
  return (
    <main>
      {/* OUR HOME HERO SECTION */}
      <PageHero
        eyebrow="OUR HOME"
        title="Designed for Everyday Living"
        subtitle="A warm, comfortable and supportive environment where children and youth can feel safe, supported and at home."
        image="/living.png"
      />

      {/* HOME FEATURES */}
      <section className="section">
        <div className="stats">
          <div>
            <strong>Family-style</strong>
            <span>Living environment</span>
          </div>

          <div>
            <strong>24-hour</strong>
            <span>Staffed supervision</span>
          </div>

          <div>
            <strong>Individual</strong>
            <span>Support and care</span>
          </div>

          <div>
            <strong>Everyday</strong>
            <span>Comfort and routines</span>
          </div>
        </div>

        {/* HOME PHOTO GALLERY */}
        <div className="gallery-grid">
          <Photo
            src="/sharedspace.png"
            alt="Comfortable living space"
            caption="Comfortable shared spaces"
          />

          <Photo
            src="/welcoming.png"
            alt="Warm residential interior"
            caption="A welcoming atmosphere"
          />

          <Photo
            src="/outdoor.png"
            alt="Green outdoor setting"
            caption="Room to enjoy the outdoors"
          />
        </div>
      </section>

      {/* A PLACE TO FEEL AT HOME */}
      <section className="section warm-section">
        <div className="two-col">
          <div>
            <p className="eyebrow">
              A PLACE TO FEEL AT HOME
            </p>

            <h2>
              Space for comfort.
              <br />
              <em>Room to grow.</em>
            </h2>

            <p>
              Kinora Homes is designed to support a
              consistent daily rhythm, meaningful
              relationships and individual needs.
              Our staffed residential model offers
              care in a welcoming, home-like setting.
            </p>

            <p>
              We prioritize safety, respect, privacy
              and the everyday experiences that help
              a place feel like home.
            </p>
          </div>

          <Photo
            src="/craft.jpg"
            alt="image"
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

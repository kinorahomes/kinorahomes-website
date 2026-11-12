
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* FOOTER BRANDING */}
        <div>
          <p className="eyebrow">
            KINORA HOMES
          </p>

          <h2>
            Rooted in Care.
            <br />
            <em>Growing with Hope.</em>
          </h2>

          <p>
            A welcoming home built on connection, stability 
            <br />
            and meaningful everyday experiences.
          </p>
        </div>

        {/* FOOTER NAVIGATION LINKS */}
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/our-home">Our Home</Link>
          <Link href="/our-approach">Our Approach</Link>
          <Link href="/life-at-kinora">Life at Kinora</Link>
          <Link href="/about">About Us</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      {/* FOOTER BOTTOM SECTION */}
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Kinora Homes Inc.
        </span>

        <span>
          Care • Connection • New Beginnings
        </span>
      </div>
    </footer>
  );
}

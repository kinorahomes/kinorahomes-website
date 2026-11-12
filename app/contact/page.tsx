
"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";

import { Photo } from "../../components/Story";

export default function Contact() {
  // CONTACT FORM STATE
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // PREPARE EMAIL
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const body = `Name: ${name}
Email: ${email}

${message}`;

    window.location.href = `mailto:care@kinorahomes.ca?subject=${encodeURIComponent(
      subject || "Kinora Homes inquiry"
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main>
      {/* CONTACT US HERO SECTION */}
      <section className="page-hero pink">
        <div className="page-hero-inner">
          <div className="page-hero-copy">
            <p className="eyebrow">
              CONTACT US
            </p>

            <h1>Get in Touch</h1>

            <h2>We’re here to help.</h2>

            <p>
              Whether you have a question, would
              like to learn more about our programs,
              or are interested in working with us,
              we’d love to hear from you.
            </p>

            {/* CONTACT INFORMATION */}
            <div className="contact-details">
              <a href="mailto:care@kinorahomes.ca">
                <Mail />
                care@kinorahomes.ca
              </a>

              <span>
                <MapPin />
                Ontario, Canada
              </span>
            </div>
          </div>

          <div className="page-hero-art">
            <Photo
              src="/getintouch.png"
              alt="Get in touch"
            />
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="section contact-section">
        <div>
          <p className="eyebrow">
            START A CONVERSATION
          </p>

          <h2>
            Questions today.
            <br />
            <em>Brighter tomorrows together.</em>
          </h2>

          <p>
            Use the form to prepare an email to
            our team. Your email application will
            open so you can review and send it.
          </p>
        </div>

        {/* CONTACT FORM */}
        <form
          className="contact-form"
          onSubmit={submit}
        >
          <label>
            Your name
            <input
              required
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Full name"
            />
          </label>

          <label>
            Email address
            <input
              type="email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="you@example.com"
            />
          </label>

          <label>
            Subject
            <input
              value={subject}
              onChange={(e) =>
                setSubject(e.target.value)
              }
              placeholder="What is your inquiry about?"
            />
          </label>

          <label>
            Message
            <textarea
              required
              rows={6}
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              placeholder="How can we help?"
            />
          </label>

          <button
            className="pill-button"
            type="submit"
          >
            Prepare Email
            <Send size={17} />
          </button>

          <small>
            This form opens your email application;
            it does not submit information directly
            to the website.
          </small>
        </form>
      </section>
    </main>
  );
}


"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { Photo } from "../../components/Story";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setStatus("");

    const data = new URLSearchParams({
      "form-name": "kinora-contact",
      name,
      email,
      subject,
      message,
    });

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data.toString(),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("Thank you! Your message has been submitted.");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setStatus(
        "Your message could not be sent. Please try again or email admin@kinorahomes.ca."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <main>
      {/* CONTACT HERO */}
      <section className="page-hero pink">
        <div className="page-hero-inner">
          <div className="page-hero-copy">
            <p className="eyebrow">CONTACT US</p>

            <h1>Get in Touch</h1>
            <h2>We’re here to help.</h2>

            <p>
              Whether you have a question, would like to
              learn more about our programs, or are
              interested in working with us, we’d love
              to hear from you.
            </p>

            <div className="contact-details">
              <a href="mailto:admin@kinorahomes.ca">
                <Mail />
                admin@kinorahomes.ca
              </a>
            </div>
          </div>

          <div className="page-hero-art">
            <Photo
              src="/getintouch.png"
              alt="Get in touch with Kinora Homes"
            />
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section contact-section">
        <div>
          <p className="eyebrow">
            START A CONVERSATION
          </p>

          <h2>
            Reach Out Today.
            <br />
            <em>Let's Support Brighter Tomorrows.</em>
          </h2>

          <p>
            Have a question or inquiry? Complete the form
            and our team will get back to you.
          </p>
        </div>

        <form
          className="contact-form"
          name="kinora-contact"
          method="POST"
          data-netlify="true"
          onSubmit={submit}
        >
          <input
            type="hidden"
            name="form-name"
            value="kinora-contact"
          />

          <label>
            Your name
            <input
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
            />
          </label>

          <label>
            Email address
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </label>

          <label>
            Subject
            <input
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="What is your inquiry about?"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help?"
            />
          </label>

          <button
            className="pill-button"
            type="submit"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message"}
            <Send size={17} />
          </button>

          {status && (
            <p role="status" aria-live="polite">
              {status}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

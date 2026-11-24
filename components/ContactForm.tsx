"use client";

import { useState } from "react";

// Nothing is stored or sent from the page — it opens the visitor's mail app with a drafted email.
export default function ContactForm({ email }: { email: string }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${name || "your portfolio"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="glass contact-form reveal" onSubmit={onSubmit}>
      <h3>Send a message</h3>
      <label>
        <span>Name</span>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required />
      </label>
      <label>
        <span>Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project or opportunity…"
          rows={5}
          required
        />
      </label>
      <button type="submit" className="btn btn-glow">Draft email ↗</button>
      <p className="form-note">
        Quick note: this form doesn&apos;t store your data — it just drafts an email for you.
      </p>
    </form>
  );
}

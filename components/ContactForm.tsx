"use client";

import React, { useState } from "react";
import Button from "./Button";

const yearLevels = [
  "Prep",
  "Year 1",
  "Year 2",
  "Year 3",
  "Year 4",
  "Year 5",
  "Year 6",
  "Multiple children / Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    childYear: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Replace this with your real Formspree endpoint after signing up at formspree.io
  // Example: https://formspree.io/f/xxxxxx
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID_HERE";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Tutoring Enquiry from Website",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form after success
        setTimeout(() => {
          setFormData({ name: "", email: "", childYear: "", message: "" });
          setSubmitted(false);
        }, 4200);
      } else {
        throw new Error("Failed to send. Please try again or email directly.");
      }
    } catch (err) {
      setError("Something went wrong. Please try emailing Chloe directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="card p-8 text-center bg-white">
        <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-sage-light flex items-center justify-center">
          <span className="text-3xl">✓</span>
        </div>
        <h3 className="text-sage-dark mb-2">Thank you! Your message has been received.</h3>
        <p className="text-text-muted">
          Chloe will get back to you within 24 hours to arrange your free consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-8 space-y-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name">Parent / Guardian Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="email">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="childYear">Child&apos;s Year Level *</label>
        <select
          id="childYear"
          name="childYear"
          required
          value={formData.childYear}
          onChange={handleChange}
          className="form-input"
        >
          <option value="">Select year level</option>
          {yearLevels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message">How can Chloe help your child? *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="form-input resize-y min-h-[120px]"
          placeholder="E.g. My Year 2 son needs help with reading fluency and building confidence with maths. We are available Tuesday and Thursday afternoons."
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm -mt-2">{error}</p>
      )}

      <div className="pt-2">
        <Button type="submit" variant="primary" className="w-full md:w-auto px-10" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message & Request Consultation"}
        </Button>
        <p className="mt-4 text-xs text-text-muted">
          Chloe will reply personally within 24 hours. We respect your privacy.
        </p>
      </div>
    </form>
  );
}

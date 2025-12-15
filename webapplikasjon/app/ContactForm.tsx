"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("http://localhost:3001/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Backend feil:", response.status, errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Feil ved sending:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm">
          Navn
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-white outline-none transition focus:border-green-500"
            placeholder="Ola Nordmann"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          E-post
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-white outline-none transition focus:border-green-500"
            placeholder="deg@firma.no"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm">
        Hva trenger du?
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-white outline-none transition focus:border-green-500"
          placeholder="Antall skjermer, type innhold, lokasjon ..."
        />
      </label>
      {submitStatus === "success" && (
        <div className="rounded-lg bg-green-500/20 border border-green-500/50 px-4 py-2 text-sm text-green-300">
          Takk for henvendelsen! Vi kontakter deg snart.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="rounded-lg bg-red-500/20 border border-red-500/50 px-4 py-2 text-sm text-red-300">
          Noe gikk galt. Prøv igjen eller kontakt oss direkte.
        </div>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sender..." : "Send forespørsel"}
      </button>
      <p className="text-xs text-zinc-500">
        Vi lagrer din henvendelse og kontakter deg innen én arbeidsdag.
      </p>
    </form>
  );
}


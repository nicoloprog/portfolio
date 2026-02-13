"use client";

import React, { useState } from "react";

interface ContactUsFormProps extends React.HTMLAttributes<HTMLFormElement> {}

const ContactUsForm = ({ className, ...props }: ContactUsFormProps) => {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      // Switched to native fetch for better compatibility
      const response = await fetch("/api/insertGsheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, info, message }),
      });

      if (!response.ok) throw new Error("Failed to send");

      alert(
        "Message envoyé avec succès ! Nous vous contacterons dans les plus brefs délais.",
      );
      setName("");
      setInfo("");
      setMessage("");
    } catch (e) {
      alert("Erreur lors de l'envoi d'information. Essayez de nouveau.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-6 w-full max-w-2xl mx-auto ${className}`}
      {...props}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2 text-left">
          <input
            required
            type="text"
            placeholder="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#12131E]/50 border border-white/10 text-white focus:border-[#C39E6F] outline-none transition-all placeholder:text-gray-400"
          />
        </div>
        <div className="space-y-2 text-left">
          <input
            required
            type="text"
            placeholder="email@example.com"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#12131E]/50 border border-white/10 text-white focus:border-[#C39E6F] outline-none transition-all placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="space-y-2 text-left w-full">
        <textarea
          required
          placeholder="Votre message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-lg bg-[#12131E]/50 border border-white/10 text-white focus:border-[#C39E6F] outline-none transition-all placeholder:text-gray-400 resize-none"
          rows={5}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full h-12 rounded-lg bg-primary text-background-dark font-display font-bold text-base hover:bg-gray-700/30 transition-all glow-effect"
      >
        {isLoading ? "Envoi en cours..." : "Envoyer"}
      </button>
    </form>
  );
};

export default ContactUsForm;

"use client";

import { X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

const ContactModal = ({ open, onClose }: ContactModalProps) => {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    await fetch("https://formsubmit.co/ajax/tommyonik@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    });
    setSending(false);
    setSent(true);
  };

  const handleClose = useCallback(() => {
    onClose();
    setSent(false);
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, handleClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleClose}
    >
      <div
        className="bg-white p-6 w-full max-w-md mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          <X size={20} strokeWidth={1.5} />
        </button>
        {sent ? (
          <p className="text-sm py-4">Thank you! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <h2 className="text-lg font-medium mb-1">Contact me</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={4}
              className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500 resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="bg-black text-white py-2 text-sm hover:bg-gray-800 cursor-pointer disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;

"use client";

import { X } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: { sitekey: string }) => string;
      reset: (id?: string) => void;
      remove: (id?: string) => void;
    };
  }
}

const ENDPOINT = "https://form-relay-eta.vercel.app/f/tnma-contact";
const TURNSTILE_SITE_KEY = "0x4AAAAAADi0RqimZ7HsP72J";
const TURNSTILE_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

const ContactModal = ({ open, onClose }: ContactModalProps) => {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const widgetEl = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | undefined>(undefined);

  // Render the Turnstile widget each time the modal opens. The modal unmounts
  // its DOM on close, so the widget must be re-created per open — a plain
  // auto-rendering script tag would only work on the first open.
  useEffect(() => {
    if (!open || sent) return;

    const render = () => {
      if (widgetEl.current && window.turnstile && widgetId.current === undefined) {
        widgetId.current = window.turnstile.render(widgetEl.current, {
          sitekey: TURNSTILE_SITE_KEY,
        });
      }
    };

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${TURNSTILE_SRC}"]`
    );
    if (window.turnstile) {
      render();
    } else {
      if (!script) {
        script = document.createElement("script");
        script.src = TURNSTILE_SRC;
        script.async = true;
        document.head.appendChild(script);
      }
      script.addEventListener("load", render);
    }

    return () => {
      script?.removeEventListener("load", render);
      if (widgetId.current !== undefined) {
        window.turnstile?.remove(widgetId.current);
        widgetId.current = undefined;
      }
    };
  }, [open, sent]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setError(false);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
      window.turnstile?.reset(widgetId.current);
    }
  };

  const handleClose = useCallback(() => {
    onClose();
    setSent(false);
    setError(false);
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleClose}
      role="presentation"
    >
      <div
        className="relative w-full max-w-md bg-white p-8 font-light"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 id="contact-modal-title" className="text-[0.95rem] font-medium">
            {sent ? "" : "Contact me"}
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
            aria-label="Close"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {sent ? (
          <p className="text-sm py-2">Thank you! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                maxLength={200}
                className="w-full border border-gray-300 px-3 py-2 text-base md:text-sm font-light focus:outline-none focus:border-gray-500 bg-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full border border-gray-300 px-3 py-2 text-base md:text-sm font-light focus:outline-none focus:border-gray-500 bg-white"
              />
              <textarea
                name="message"
                placeholder="Message"
                required
                maxLength={5000}
                rows={4}
                className="w-full border border-gray-300 px-3 py-2 text-base md:text-sm font-light focus:outline-none focus:border-gray-500 bg-white resize-none"
              />
            </div>

            <div
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 overflow-hidden opacity-0"
            >
              <label htmlFor="fr-honey">Leave this field empty</label>
              <input
                id="fr-honey"
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div ref={widgetEl} />

            <div className="flex flex-col gap-2">
              <button
                type="submit"
                disabled={sending}
                className="w-full border border-gray-300 px-3 py-2 text-base md:text-sm font-light cursor-pointer disabled:opacity-50 text-center transition-colors hover:bg-black hover:text-white hover:border-black"
              >
                {sending ? "Sending..." : "Send"}
              </button>
              {error && (
                <p className="text-xs text-gray-500">
                  Something went wrong — please try again.
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;

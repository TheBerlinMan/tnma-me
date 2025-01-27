"use client";

import React from "react";

const EmailForm = () => {
  return (
    <form
      action="https://formsubmit.co/tommyonik@gmail.com"
      method="POST"
      className="flex flex-col gap-2 items-start"
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full bg-transparent border border-black px-2 py-1 rounded text-sm"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        className="w-full bg-transparent border border-black px-2 py-1 rounded text-sm"
      />
      <button
        type="submit"
        className="font-bold border border-black px-3 py-1 mt-1 rounded text-black text-sm"
      >
        Send
      </button>
    </form>
  );
};

export default EmailForm;

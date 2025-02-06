"use client";

import React from "react";

const EmailForm = () => {
  return (
    <form
      action="https://formsubmit.co/tommyonik@gmail.com"
      method="POST"
      className="flex flex-col gap-2 items-start"
    >
      <label htmlFor="email" className="text-sm">Email</label>
      <input
        type="email"
        name="email"
        required
        className="w-full bg-transparent border border-white p-2 rounded text-sm"
      />
      <label htmlFor="subject" className="text-sm">Subject</label>
      <input
        type="subject"
        name="subject"
        required
        className="w-full bg-transparent border border-white p-2 rounded text-sm"
      />
      <label htmlFor="message" className="text-sm">Message</label>
      <textarea
        name="message"
        rows={6}
        required
        className="w-full bg-transparent border border-white p-2 rounded text-sm"
      />
      <button
        type="submit"
        className="font-bold bg-white px-3 py-2 mt-4 rounded text-black text-sm cursor-pointer"
      >
        Send
      </button>
    </form>
  );
};

export default EmailForm;

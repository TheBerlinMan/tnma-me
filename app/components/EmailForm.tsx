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
        className="w-full bg-transparent border border-black px-4 py-2 rounded"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        className="w-full bg-transparent border border-black px-4 py-2 rounded"
      />
      <button
        type="submit"
        className="font-bold border border-black px-3 py-1 mt-1 rounded text-black text-sm"
      >
        Submit
      </button>
    </form>
  );
};

export default EmailForm;

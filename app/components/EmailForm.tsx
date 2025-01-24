"use client";

import React from "react";

const EmailForm = () => {
  return (
    <form
      action="https://formsubmit.co/tommyonik@gmail.com"
      method="POST"
      className="flex flex-col gap-2 items-end pr-8"
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full bg-transparent border-2 border-black px-4 py-2 rounded"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        className="w-full bg-transparent border-2 border-black px-4 py-2 rounded"
      />
      <button
        type="submit"
        className="font-bold border-2 border-black px-3 py-1 mt-1 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default EmailForm;

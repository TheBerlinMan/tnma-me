"use client";

import React, { useState } from "react";
import { getRandomColor } from "@/lib/functions";

const EmailForm = () => {
  const [hoverColor, setHoverColor] = useState(getRandomColor());

  const handleMouseEnter = () => {
    // Update the hover background color while ensuring it is different from the previous one
    setHoverColor(getRandomColor(hoverColor));
  };

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
        onMouseEnter={handleMouseEnter}
        className={`w-full font-bold bg-white hover:bg-${hoverColor} px-3 py-2 mt-4 rounded text-black text-sm cursor-pointer transition-colors`}
      >
        Send
      </button>
    </form>
  );
};

export default EmailForm;

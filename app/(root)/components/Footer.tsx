"use client";

import { getCurrentYear } from "@/lib/functions";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-500 text-sm text-center">
      <hr className="border-gray-500 border-1 mb-4" />
      <div className="flex justify-between items-center gap-3 flex-col sm:flex-row m-7">
        <p>Tommy Onik © {getCurrentYear()}</p>
        <div className="flex gap-3">
          <Link
            href="https://www.instagram.com/im.tnma"
            target="_blank"
            className="text-sm"
          >
            <Instagram size={20} />
          </Link>
          <Link
            href="https://github.com/TheBerlinMan"
            target="_blank"
            className="text-sm"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/thomas-onik/"
            target="_blank"
            className="text-sm"
          >
            <Linkedin size={20} />
          </Link>
        </div>
        {/* <p>© {getCurrentDateLong()}</p> */}
      </div>
    </footer>
  );
};

export default Footer;

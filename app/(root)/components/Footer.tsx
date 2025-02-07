"use client";

import { getCurrentDateLong } from "@/lib/functions";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

interface FooterProps {
  mobile?: boolean;
}

const Footer = ({ mobile }: FooterProps) => {
  return (
    <footer className="text-sm text-gray-500 text-center">
      {!mobile && <hr className="border-gray-500 border-1 mb-4" />}
      <div
        className={
          mobile
            ? "flex flex-col p-4 justify-center items-center space-y-2"
            : "flex justify-between items-center gap-3 flex-col sm:flex-row m-7"
        }
      >
        {mobile ? (
          <>
            <div className="flex gap-3">
              <Link href="https://www.instagram.com/im.tnma" target="_blank">
                <Instagram size={20} strokeWidth={1} />
              </Link>
              <Link href="https://github.com/TheBerlinMan" target="_blank">
                <Github size={20} strokeWidth={1} />
              </Link>
              <Link href="https://www.linkedin.com/in/thomas-onik/" target="_blank">
                <Linkedin size={20} strokeWidth={1} />
              </Link>
            </div>
            <p>Tommy Onik © All Rights Reserved</p>
            {/* <p>{getCurrentDateLong()}</p> */}
          </>
        ) : (
          <>
            <p>Tommy Onik © All Rights Reserved</p>
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
          </>
        )}
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import EmailForm from "../components/EmailForm";

const Contact = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8">
      <div className="flex flex-col gap-3 w-1/2">
        <h1 className="text-md font-bold">Socials</h1>
        <div className="flex flex-row gap-2">
          <Github />
          <Link href="https://github.com/TheBerlinMan" target="_blank" className="text-sm">
            @theberlinman
          </Link>
        </div>
        <div className="flex flex-row gap-2">
          <Linkedin />
          <Link href="https://www.linkedin.com/in/thomas-onik/" target="_blank" className="text-sm">
            @tommyonik
          </Link>
        </div>
        <div className="flex flex-row gap-2">
          <Instagram />
          <Link href="https://www.instagram.com/im.tnma" target="_blank" className="text-sm">
            @im.tnma
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full sm:w-1/2 pr-8">
        <h1 className="text-md font-bold">Get in touch...</h1>
        <EmailForm />
      </div>
    </div>
  );
};

export default Contact;

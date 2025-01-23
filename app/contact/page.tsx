import React from "react";
import { Github, Instagram, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
const Contact = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row gap-2">
        <Github strokeWidth={2} />
        <Link href="https://github.com/TheBerlinMan" target="_blank" >
          : @TheBerlinMan
        </Link>
      </div>
      <div className="flex flex-row gap-2">
        <Linkedin strokeWidth={3}/>
        <Link href="https://www.linkedin.com/in/thomas-onik/" target="_blank">
          : @tommyonik
        </Link>
      </div>
      <div className="flex flex-row gap-2">
        <Instagram strokeWidth={3} />
        <Link href="https://www.instagram.com/im.tnma" target="_blank">
          : @im.tnma
        </Link>
      </div>
      <div className="flex flex-row gap-2">
        <Mail strokeWidth={3} />
        <p>: tommyonik@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;

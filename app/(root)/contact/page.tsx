import React from "react";
import EmailForm from "../components/EmailForm";

const Contact = () => {
  return (
      <div className="w-full max-w-xl fade-in">
        <h1 className="text-lg font-bold mb-1">Send A Message</h1>
        <p className="text-sm mb-6">
          I&apos;d love to meet more people. If you&apos;d like your photo
          taken, a website built, or just want to grab a coffee, please get in touch.
        </p>
        <EmailForm />
      </div>          
  );
};

export default Contact;

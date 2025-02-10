import React from "react";
import Card from "../components/Card";

const artCards = [
  {
    title: "Antonia-bara.com",
    description: "A personal website for artist Antônia Bara. Built with Next.js, Tailwind, and TypeScript.",
    imagePath: "/projects/Screenshot 2025-02-09 at 11.09.11 PM.png",
    githubLink: "https://github.com/TheBerlinMan/antoniabara",
    websiteLink: "https://antonia-bara.com"
  },
  {
    title: "Blackjack", 
    description: "My first coding project. Built with HTML, CSS, and JavaScript.",
    imagePath: "/projects/Screenshot 2025-02-09 at 11.10.10 PM.png",
    githubLink: "https://github.com/TheBerlinMan/Blackjack",
    websiteLink: "https://to-blackjack.netlify.app/"
  }
];

const page = () => {
  return (
    <div className="max-w-xl flex flex-col gap-6 cursor-default">
      {artCards.map((card) => (
          <Card
          key={card.title}
            title={card.title}
            description={card.description}
            imagePath={card.imagePath}
            githubLink={card.githubLink}
            websiteLink={card.websiteLink}
          />
      ))}
    </div>
  );
};

export default page;

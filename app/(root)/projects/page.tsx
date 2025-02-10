import React from "react";
import Card from "../components/Card";
import Link from "next/link";

const artCards = [
  {
    route: "/projects/antoniabara",
    title: "Antonia-bara.com",
    description: "A personal website built with Next.js, Tailwind, and TypeScript.",
    imagePath: "/projects/Screenshot 2025-02-09 at 11.09.11 PM.png",
    githubLink: "https://github.com/antoniabara/antonia-bara",
    websiteLink: "https://antonia-bara.com"
  },
  {
    route: "/projects/blackjack",
    title: "Blackjack", 
    description: "My first coding project. Built with HTML, CSS, and JavaScript.",
    imagePath: "/projects/Screenshot 2025-02-09 at 11.10.10 PM.png",
    githubLink: "https://github.com/antoniabara/blackjack",
    websiteLink: "https://antoniabara.github.io/blackjack/"
  }
];

const page = () => {
  return (
    <div className="max-w-xl flex flex-col gap-6">
      {artCards.map((card) => (
        <Link href={card.route} key={card.title} >
          <Card
            title={card.title}
            description={card.description}
            imagePath={card.imagePath}
            githubLink={card.githubLink}
            websiteLink={card.websiteLink}
          />
        </Link>
      ))}
    </div>
  );
};

export default page;

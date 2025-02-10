import React from "react";
import Card from "../components/Card";
import Link from "next/link";

const artCards = [
  {
    route: "/art/photography",
    title: "Photography",
    dateStarted: "2016",
    description: "A collection of my favorite street, portrait, and landscape photos.",
    imagePath: "/photos/landscapes/New York City, Feb 2022-1.jpg"
  },
  {
    route: "/art/drawings",
    title: "Drawings", 
    dateStarted: "2022",
    description: "A collection of my favorite drawings.",
    imagePath: "/drawings/PinkSquare.jpg"
  },
  { 
    route: "/art/jewelry",
    title: "Jewelry",
    dateStarted: "2021",
    description: "A collection of prototype pieces.",
    imagePath: "/jewelry/IMG_4912.JPG"
  }
];

const page = () => {
  return (
    <div className="max-w-lg flex flex-col gap-6">
      {artCards.map((card) => (
        <Link href={card.route} key={card.title} >
          <Card
            title={card.title}
            dateStarted={card.dateStarted}
            description={card.description}
            imagePath={card.imagePath}
          />
        </Link>
      ))}
    </div>
  );
};

export default page;

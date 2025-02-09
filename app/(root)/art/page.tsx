import React from "react";
import Card from "../components/Card";

const page = () => {
  return (
    <div className="max-w-lg space-y-6">
      <Card title="Photography" dateStarted="2024" />
      <Card title="Drawings" dateStarted="2024" />
      <Card title="Jewelry" dateStarted="2024" />
    </div>
  );
};

export default page;


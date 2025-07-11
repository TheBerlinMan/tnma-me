import React from "react";
import BackRedirect from "@/app/(root)/components/BackRedirect";

const page = () => {
  return (
    <div>
      <BackRedirect />
      <div className="text-sm max-w-lg">
        I started shooting analog in 2016. Since then, I&apos;ve accumulated
        over 3,000 film photos and these are all of my favorites.
      </div>
    </div>
  );
};

export default page;

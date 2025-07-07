import React from "react";
import BackRedirect from "@/app/(root)/components/BackRedirect";

const page = () => {
  return (
    <div>
      <BackRedirect />
      <div className="max-w-xl font-light">
        The Nape is an ongoing series of photographs dedicated to documenting
        the subtleties of the true self in public spaces. When a person knows
        that their portrait is being taken, a wall is subconsciously erected
        which hides the persons honest self. A persons true self is on display
        only within the moments when they forget that they are being observed.
      </div>
    </div>
  );
};

export default page;

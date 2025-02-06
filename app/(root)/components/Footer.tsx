"use client";

import { getCurrentYear } from "@/lib/functions";
import React from "react";

const Footer = () => {
  //   const currentDate = new Date();
  //   const currentMonth = currentDate.getMonth(); // 0-11 where 0 is January

  //   const getMessage = () => {
  //     if (currentMonth === 0 || currentMonth === 1) { // January or February
  //       return "&quot;Just keep swimming.&quot;";
  //     } else if (currentMonth >= 11 || currentMonth <= 3) { // December to April
  //       return "&quot;Just keep swimming.&quot;";
  //     } else {
  //       return "&quot;Just keep swimming";
  //     }
  //   };

  return (
    <footer className="mt-auto text-gray-500 text-sm text-center">
      <hr className="border-gray-500 border-1 mb-4" />
      <div className="flex justify-between flex-col sm:flex-row m-7">
        <p className="text-gray-500 text-sm">
          {/* {getMessage()} */}
          Just keep swimming.
        </p>
        {/* <p>© {getCurrentDateLong()}</p> */}
        <p>Tommy Onik © {getCurrentYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;

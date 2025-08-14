import React from "react";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="">
      <div className="mb-8"></div>
      <div className="space-y-4">
        <div>
          {/* Title + Description */}
          <div className="text-lg font-medium mb-4">Projects</div>

          <div className="font-light max-w-prose text-gray-500">
            A collection of creative and technical projects spanning design, development, 
            and research. These works explore the intersection of technology, art, and 
            human experience through various mediums and methodologies.
          </div>
        </div>

        <div>
          <div className="my-4 font-medium">Projects</div>
          <div className="ml-3 text-sm font-light">
            <table className="border-collapse">
              <tbody>
                <tr className="h-8">
                  <td className="pr-8 font-medium text-left align-top">
                    ...
                  </td>
                  <td className="pr-8 text-left">
                    <Link
                      href="/projects/bluebook"
                      className=""
                    >
                      Blue Book
                    </Link>
                  </td>
                  <td className=" text-gray-500 text-left">
                    2024
                  </td>
                </tr>
                <tr className="h-8">
                  <td className="pr-3 font-medium text-left align-top">
                    ...
                  </td>
                  <td className="pr-3 text-left">
                    <Link href="/projects/creatorshub" className="">
                      Creators Hub
                    </Link>
                  </td>
                  <td className="text-gray-500 text-left">
                    2024
                  </td>
                </tr>
                <tr className="h-8">
                  <td className="pr-3 font-medium text-left align-top">
                    ...
                  </td>
                  <td className="pr-3 text-left">
                    <Link href="/projects/25thnecklace" className="">
                      25th Necklace
                    </Link>
                  </td>
                  <td className=" text-gray-500 text-left">
                    2023
                  </td>
                </tr>
                <tr className="h-8">
                  <td className="pr-3 font-medium text-left align-top">
                    ...
                  </td>
                  <td className="pr-3 text-left">
                    <Link href="/projects/prattmodels" className="">
                      Pratt Models
                    </Link>
                  </td>
                  <td className=" text-gray-500 text-left">
                    2022
                  </td>
                </tr>
                <tr className="h-8">
                  <td className="pr-3 font-medium text-left align-top">
                    ...
                  </td>
                  <td className="pr-3 text-left">
                    <Link href="/projects/undergradthesis" className="">
                      Undergraduate Thesis
                    </Link>
                  </td>
                  <td className=" text-gray-500 text-left">
                    2021
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from "react";
import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <div className="space-y-4">
        <div>
          <div className="text-lg font-medium mb-4">Projects</div>
          <div className="font-light max-w-prose text-gray-500">
            A collection of creative and technical projects spanning art,
            design, and research, consisting of a variety of different mediums
            and materials.
          </div>
        </div>

        <table className="border-collapse font-light ml-3">
          <tbody>
            <tr className="h-8">
              <td className="pr-3 font-medium text-left align-top">...</td>
              <td className="pr-8 text-left">
                <Link href="/projects/undergradthesis">
                  Undergraduate Thesis
                </Link>
              </td>
              <td className=" text-gray-500 text-left">2018</td>
            </tr>

            <tr className="h-8">
              <td className="pr-3 font-medium text-left align-top">...</td>
              <td className="pr-3 text-left">
                <Link href="/projects/jewelry">Jewelry</Link>
              </td>
              <td className=" text-gray-500 text-left">2021</td>
            </tr>

            <tr className="h-8">
              <td className="pr-3 font-medium text-left align-top">...</td>
              <td className="pr-3 text-left">
                <Link href="/projects/prattmodels">Pratt Models</Link>
              </td>
              <td className=" text-gray-500 text-left">2022</td>
            </tr>

            <tr className="h-8">
              <td className="pr-3 font-medium text-left align-top">...</td>
              <td className="pr-3 text-left">
                <Link href="/projects/creatorshub">Creators Hub</Link>
              </td>
              <td className="text-gray-500 text-left">2023</td>
            </tr>

            <tr className="h-8">
              <td className="pr-8 font-medium text-left align-top">...</td>
              <td className="pr-8 text-left">
                <Link href="/projects/bluebook">Blue Book</Link>
              </td>
              <td className=" text-gray-500 text-left">2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

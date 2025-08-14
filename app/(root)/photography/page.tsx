import React from "react";
import Link from "next/link";

export default function Photography() {
  return (
    <div className="">
      <div className="mb-8"></div>
      <div className="space-y-4">
        <div>
          {/* Title + Description */}
          <div className="mb-4 text-lg font-medium">Photography</div>
          <div className="font-light max-w-prose">
            Moments, emotions, and perspectives caught on analog film.
            A collection of photographs capturing moments, emotions, and 
            perspectives from 2016 until today. Through portraiture, landscapes, 
            and street photography, I explore the intimate connections between 
            people and places, seeking to document both the extraordinary in the 
            ordinary and the quiet poetry of everyday life.
          </div>
        </div>

        

        <div className="my-4 font-medium">Series</div>
        <div className="ml-3 text-sm font-light">
          <table className="border-collapse">
            <tbody>
              <tr className="h-8">
                <td className="pr-8 font-medium text-left align-top">
                  ...
                </td>
                <td className="pr-8 text-left ">
                  <Link
                    href="/photography/series/publicintimacy"
                    className=""
                  >
                    Public Intimacy
                  </Link>
                </td>
                <td className="text-xs text-gray-500 text-left ">
                  In Progress
                </td>
              </tr>
              <tr className="h-8">
                <td className="pr-3 font-medium text-left align-top">
                  ...
                </td>
                <td className="pr-3 text-left">
                  <Link href="/photography/series/nape" className="">
                    The Nape
                  </Link>
                </td>
                <td className="text-xs text-gray-500 text-left">
                  In Progress
                </td>
              </tr>
              <tr className="h-8">
                <td className="pr-3 font-medium text-left align-top">
                  ...
                </td>
                <td className="pr-3 text-left">
                  <Link
                    href="/photography/series/portals"
                    className=""
                  >
                    Portals
                  </Link>
                </td>
                <td className="text-xs text-gray-500 text-left">
                  In Progress
                </td>
              </tr>
              <tr className="h-8">
                <td className="pr-3 font-medium text-left align-top">
                  ...
                </td>
                <td className="pr-3 text-left">
                  <Link
                    href="/photography/series/nyc"
                    className=""
                  >
                    NYC
                  </Link>
                </td>
                <td className="text-xs text-gray-500 text-left">
                  In Progress
                </td>
              </tr>
              <tr className="h-8">
                <td className="pr-3 font-medium text-left align-top">
                  ...
                </td>
                <td className="pr-3 text-left">
                  <Link
                    href="/photography/series/nyc"
                    className=""
                  >
                    Abstraction
                  </Link>
                </td>
                <td className="text-xs text-gray-500 text-left">
                  In Progress
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="font-medium mt-6 ">
          <Link href="/photography/index" className="">
            Index
          </Link>
        </div>
      </div>
    </div>
  );
}

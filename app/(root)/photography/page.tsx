import React from "react";
import Link from "next/link";
import BackRedirect from "../components/BackRedirect";

export default function Photography() {
  return (
    <div className="">
      
      
      <div className="mb-16">
        <BackRedirect />
      </div>
      <div className="flex flex-col gap-1">
        <div>
          {/* Title + Description */}
          <div className="mt text-lg font-medium">Photography</div>
          <div className="font-light max-w-prose">
            A collection of photographs capturing moments, emotions, and 
            perspectives from 2016 until today. Through portraiture, landscapes, 
            and street photography, I explore the intimate connections between 
            people and places, seeking to document both the extraordinary in the 
            ordinary and the quiet poetry of everyday life.
          </div>
        </div>

        

        <div className="mt-6 font-medium">Series</div>
        <div className="ml-4 text-sm font-light">
          <table className="border-collapse">
            <tbody>
              <tr className="h-8">
                <td className="pr-8 mb-2 font-medium text-left align-top">
                  ...
                </td>
                <td className="pr-8 text-left align-top">
                  <Link
                    href="/photography/series/publicintimacy"
                    className=""
                  >
                    Public Intimacy
                  </Link>
                </td>
                <td className="text-xs text-gray-500 text-left align-top">
                  In Progress
                </td>
              </tr>
              <tr className="h-8">
                <td className="pr-3 mb-1 font-medium text-left align-top">
                  ...
                </td>
                <td className="pr-3 text-left align-top">
                  <Link href="/photography/series/nape" className="">
                    The Nape
                  </Link>
                </td>
                <td className="text-xs text-gray-500 text-left align-top">
                  In Progress
                </td>
              </tr>
              <tr className="h-8">
                <td className="pr-3 mb-1 font-medium text-left align-top">
                  ...
                </td>
                <td className="pr-3 text-left align-top">
                  <Link
                    href="/photography/series/portals"
                    className=""
                  >
                    Portals
                  </Link>
                </td>
                <td className="text-xs text-gray-500 text-left align-top">
                  In Progress
                </td>
              </tr>
              <tr className="h-8">
                <td className="pr-3 mb-1 font-medium text-left align-top">
                  ...
                </td>
                <td className="pr-3 text-left align-top">
                  <Link
                    href="/photography/series/nyc"
                    className=""
                  >
                    NYC
                  </Link>
                </td>
                <td className="text-xs text-gray-500 text-left align-top">
                  In Progress
                </td>
              </tr>
              <tr className="h-8">
                <td className="pr-3 mb-1 font-medium text-left align-top">
                  ...
                </td>
                <td className="pr-3 text-left align-top">
                  <Link
                    href="/photography/series/nyc"
                    className=""
                  >
                    Abstraction
                  </Link>
                </td>
                <td className="text-xs text-gray-500 text-left align-top">
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

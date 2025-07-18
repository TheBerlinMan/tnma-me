import React from "react";
import Link from "next/link";
import BackRedirect from "../components/BackRedirect";

export default function Drawings() {
  return (
    <div className="">
      
      
      <div className="mb-16">
        <BackRedirect />
      </div>
      <div className="flex flex-col gap-1">
        <div>
          {/* Title + Description */}
          <div className="mt text-lg font-medium">Drawing</div>
          {/* <div className="font-light">
            I have always had a special place in my heart for color. Inspired by
            the likes of Albers, Rothko, and Martin I became curious about the
            ability of color to describe complex emotions. I feel that words are
            often lacking in apt descriptors in a way that color is able to.
            Color is able to represent concepts that words cannot. It is able to
            represent entire emotions, ideas, and concepts. I have been
            experimenting with color in my drawings for the past few years.
          </div> */}

          <div className="font-light max-w-prose">
            Inspired by Albers and Rothko,
            I became curious about the power of color to convey complex emotions. I found that color
            has no shortage of ways to represent concepts, where 
            
             I found that 
            when describing 
            
             In some cases,
            words lack sufficient descriptors when portrating complex emotions
            like love, fear, or grief.
            
             that words often failed to capture.
            Unlike color, words can fail when describing complex emotions, like
            love, fear, or grief.


            in the way that 
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
                    href="/drawings/series/initialcolorexploration"
                    className=""
                  >
                    Initial Exploration
                  </Link>
                </td>
                <td className="text-xs text-gray-500 text-left align-top">
                  Summer 2022
                </td>
              </tr>
              <tr className="h-8">
                <td className="pr-3 mb-1 font-medium text-left align-top">
                  ...
                </td>
                <td className="pr-3 text-left align-top">
                  <Link href="/drawings/series/cangalha" className="">
                    Cangalha
                  </Link>
                </td>
                <td className="text-xs text-gray-500 text-left align-top">
                  Summer 2023
                </td>
              </tr>
              <tr className="h-8">
                <td className="pr-3 mb-1 font-medium text-left align-top">
                  ...
                </td>
                <td className="pr-3 text-left align-top">
                  <Link
                    href="/drawings/series/selfportraits"
                    className=""
                  >
                    Anxious
                  </Link>
                </td>
                <td className="text-xs text-gray-500 text-left align-top">
                  Fall 2024
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="font-medium mt-6 ">
          <Link href="/drawings/index" className="">
            Index
          </Link>
        </div>
      </div>
    </div>
  );
}

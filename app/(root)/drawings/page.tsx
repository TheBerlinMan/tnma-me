import React from "react";
import Link from "next/link";

export default function Drawings() {
  return (
    <div>
      <div className="space-y-4">
        <div>
          <div className="text-lg font-medium mb-4">Drawings</div>
          <div className="font-light max-w-prose text-gray-500">
            I use color to describe complex emotions that I would fail to
            describe in words. Color has an infinite depth that measurable
            diction cannot begin match. Inspired by Albers and Rothko, I became
            curious about the power of color to convey complex emotions. I found
            that color has no shortage of ways to represent concepts, where I
            found that when describing In some cases, words lack sufficient
            descriptors when portrating complex emotions like love, fear, or
            grief. that words often failed to capture. Unlike color, words can
            fail when describing complex emotions, like love, fear, or grief. in
            the way that
          </div>
        </div>

        <div>
          <div className="my-4 font-medium">Series</div>
          <div className="ml-3 text-sm font-light">
            <table className="border-collapse">
              <tbody>
                <tr className="h-8">
                  <td className="pr-8 font-medium text-left align-top">...</td>
                  <td className="pr-8 text-left">
                    <Link href="/drawings/series/initialcolorexploration">
                      Initial Exploration
                    </Link>
                  </td>
                  <td className=" text-gray-500 text-left">Summer 2022</td>
                </tr>
                <tr className="h-8">
                  <td className="pr-3 font-medium text-left align-top">...</td>
                  <td className="pr-3 text-left">
                    <Link href="/drawings/series/cangalha">Cangalha</Link>
                  </td>
                  <td className="text-gray-500 text-left">Summer 2023</td>
                </tr>
                <tr className="h-8">
                  <td className="pr-3 font-medium text-left align-top">...</td>
                  <td className="pr-3 text-left">
                    <Link href="/drawings/series/anxious">Anxious</Link>
                  </td>
                  <td className=" text-gray-500 text-left">Fall 2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="font-medium mt-6 ">
          <Link href="/drawings/index">Index</Link>
        </div>
      </div>
    </div>
  );
}

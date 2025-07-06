
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Home = () => {


  return (
    <div className="flex flex-col gap-6 fade-in">
      <div className="text-sm text-gray-500 -mt-8">
        {/* <p>based in NYC</p> */}
        <p>b. 03131996</p>
      </div>
      <div className="font-light mt-2 font-light">
        <p>First-generation American-Soviet-Jew</p>
        {/* <p>Artist & Designer</p> */}
        {/* <p>Detail-obsessed generalist</p> */}
        <p>Detail-Obsessed Generalist</p>
        {/* <p>Generalist in love with theory crafting</p> */}
        <p>Based in NYC</p>
      </div>

      <div className=" mt-4 font-light">
        <div className="flex gap-16">
          <div className="flex flex-col">
            <div className="text-sm font-light mb-4 text-gray-500">Work</div>
            <div>Software Engineer @ Evernorth</div>
            <div className="flex items-center gap-1">
              Founder @
              <Link
                href="https://domaproject.vercel.app/"
                className="underline"
              >
                Doma
              </Link>
              <ArrowUpRight strokeWidth="1px" size={"16px"} />
            </div>
            <div className="text-sm font-light my-4 text-gray-500">
              Past Work
            </div>
            <div>Financial Analyst @ MediaMath</div>
            <div>FP&A + PPNR Modeler @ UBS</div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-light mb-4 text-gray-500">Hobbies</div>
            <Link
              href="/photography"
              className="underline"
            >
              Photography
            </Link>

            <Link
              href="/art/drawings"
              className="underline"
            >
              Drawing
            </Link>

            <Link
              href="/projects"
              className="underline"
            >
              Making Things
            </Link>

            <div className="flex items-center gap-1">
              <Link
                href="https://www.chess.com/member/pigeonmania"
                className="underline"
              >
                Playing Chess
              </Link>
              <ArrowUpRight strokeWidth="1px" size={"16px"} />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-light mb-4 text-gray-500">
              Education
            </div>
            <div>Software Engineering Bootcamp @ General Assembly</div>
            <div>
              M.Arch @ The Pratt Institute{" "}
              <span className="text-xs text-gray-500 italic">(inc)</span>
            </div>
            <div>Graphic Design + Color Theory @ SVA Continuing Education</div>
            <div>B.A. in Mathematics @ Pace University</div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;

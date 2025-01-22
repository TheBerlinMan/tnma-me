import Link from "next/link";

export default function Home() {
  return (
    <>
      <GroupDiv>
        <div className="text-xl font-bold" style={{ flex: "0 0 150px" }}>
          <h1>TNMA</h1>
        </div>
        <DescDiv>
          <p>First-generation American-Soviet-Jew</p>
          <p>Detail-obsessed problem-solver</p>
          <p>Good with my hands and mind</p>
        </DescDiv>
      </GroupDiv>
      {/* <hr className="border-gray-500 border-1 mb-4"/> */}
      <GroupDiv>
        <TitleDiv>
          <h1>Current</h1>
        </TitleDiv>
        <DescDiv>
          <p>
            Software developer at{" "}
            <Link
              className="font-bold"
              href="https://evernorth.com"
              target="_blank"
            >
              Evernorth
            </Link>{" "}
            <RedirectIcon />
          </p>
          <p>
            Building{" "}
            <Link className="font-bold" href="/" target="_blank">
              Artgrp
            </Link>{" "}
            <RedirectIcon />
          </p>
          <p>
            Designing{" "}
            <Link className="font-bold" href="/" target="_blank">
              Doma Project
            </Link>{" "}
            <RedirectIcon />
          </p>
        </DescDiv>
      </GroupDiv>
      <GroupDiv>
        <TitleDiv>
          <h1>History</h1>
        </TitleDiv>
        <DescDiv>
          <p>General Assembly Software Engineering bootcamp graduate</p>
          <p>Financial analyst working within advertising and banking </p>
          <p>B.A. in mathematics from Pace University</p>
        </DescDiv>
      </GroupDiv>
      <GroupDiv>
        <TitleDiv>
          <h1>Hobbies</h1>
        </TitleDiv>
        <DescDiv>
          <p>
            Playing chess{" "}
            <Link
              className="font-bold"
              href="https://chess.com/member/pigeonmania"
              target="_blank"
            >
              @pigeonmania
            </Link>{" "}
            <RedirectIcon />
          </p>
          <p>
            Replacing therapy with{" "}
            <Link className="font-bold" href="/art/drawings">
              oil pastels
            </Link>{" "}
            <RedirectIcon />
          </p>
          <p>
            Exploring the world with{" "}
            <Link className="font-bold" href="/art/photography">
              photography
            </Link>{" "}
            <RedirectIcon />{" "}
          </p>
          <p>
            Musing, and occasionally{" "}
            <Link
              className="font-bold"
              href="/"
              // href="https://berlins-blog.vercel.app/"
              target="_blank"
            >
              writing
            </Link>{" "}
            <RedirectIcon />
          </p>
        </DescDiv>
      </GroupDiv>
    </>
  );
}

// Styled Divs
const GroupDiv = ({ children }: React.HTMLProps<HTMLDivElement>) => {
  return <div className="flex mb-6">{children}</div>;
};

const TitleDiv = ({ children }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className="text-sm text-gray-500"
      style={{ flex: "0 0 150px", fontWeight: "500" }}
    >
      {children}
    </div>
  );
};

const DescDiv = ({ children }: React.HTMLProps<HTMLDivElement>) => {
  return <div className="text-sm flex flex-col gap-1.5">{children}</div>;
};

//Icon
const RedirectIcon = () => {
  return (
    <span style={{ fontSize: "0.8em", verticalAlign: "super" }}>&#x2197;</span>
  );
};

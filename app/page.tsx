export default function Home() {
  return (
    <>
      <GroupDiv>
        <div className="text-xl font-bold" style={{ flex: "0 0 150px" }}>
          <h1>TNMA</h1>
        </div>
        <DescDiv>
          <p>First-generation American-Soviet-Jew</p>
          <p>Grew up a mostly quiet observer</p>
          <p>Became a detail-obsessed adult</p>
          <p>Interested in many things</p>
          <p>Namely, the human experience</p>
        </DescDiv>
      </GroupDiv>
      {/* <hr className="border-gray-500 border-1 mb-4"/> */}
      <GroupDiv>
        <TitleDiv>
          <h1>Current</h1>
        </TitleDiv>
        <DescDiv>
          <p>Full-stack software developer at Evernorth</p>
          <p>Building Artgrp</p>
          <p>Designing Doma Project</p>
        </DescDiv>
      </GroupDiv>
      <GroupDiv>
        <TitleDiv>
          <h1>History</h1>
        </TitleDiv>
        <DescDiv>
          <p>Financial analyst working within advertising and banking </p>
          <p>General Assembly Bootcamp Graduate</p>
          <p>Math Bachelor&apos;s from Pace University</p>
        </DescDiv>
      </GroupDiv>
      <GroupDiv>
        <TitleDiv>
          <h1>Hobbies</h1>
        </TitleDiv>
        <DescDiv>
          <p>
            Exploring physical spaces with photography and etheral spaces with
            color
          </p>
          <p>Thinking, thinking, and overthinking.</p>
          <p>Playing chess @pigeonmania</p>
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
    <div className="text-md" style={{ flex: "0 0 150px", fontWeight: "500" }}>
      {children}
    </div>
  );
};

const DescDiv = ({ children }: React.HTMLProps<HTMLDivElement>) => {
  return <div className="text-sm flex flex-col gap-1.5">{children}</div>;
};

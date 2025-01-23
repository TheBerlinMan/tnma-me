import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-6 text-sm">
      <div className="flex flex-col gap-2">
        <p>My name is Tommy David Onik and I&apos;m based in Brooklyn, NY.</p>
        <p>
          &apos;TNMA&apos; is my russian name written in
          english letters.
        </p>
        {/* <p>It&apos;s pronounced &apos;Tee-muh&apos;.</p> */}
        <p>
          You can just call me Tommy, though.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p>
          My undergruate thesis advisor once called me a polymath and I liked that
          - maybe too much.
        </p>
        <p>
          I code, I play chess, I design jewelry, I take photos, I draw, I cook,
          I dance, I fight.
        </p>
        <p>
          Life is just more fun as a generalist, I think.
        </p>
      </div>
      {/* <div className="flex flex-col gap-3">
        <p>If you&apos;re here, thank you.</p>
        
      </div> */}
    </div>
  );
};

export default About;

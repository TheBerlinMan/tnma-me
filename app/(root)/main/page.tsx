
import Link from "next/link";

const Main = () => {
  return (
    <div className="flex flex-col gap-6 text-sm sm:max-w-xl fade-in">
      <div className="flex flex-col gap-2">
        <p>
          &quot;TNMA&quot; is my Russian name rendered in English letters.
          I&apos;m a first-generation American-Soviet-Jew, and my experiences in
          this world have been primarily shaped by the hybrid nature of my
          identity- making the moniker a nice summary of who I am. But, you can
          just call me Tommy.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p>
          Professionally, I&apos;m a{" "}
          <Link className="underline" href="/projects">
            software developer
          </Link>{" "}
          with a background in mathematics. Casually, I&apos;m an{" "}
          <Link className="underline" href="/art">
            artist and designer
          </Link>{" "}
          with a{" "}
          <Link
            className="underline"
            href="https://chess.com/member/pigeonmania"
            target="_blank"
          >
            chess addiction
          </Link>
          . Above all, though, I just consider myself a generalist with a
          passion for design, logical systems, and the human experience.
        </p>
      </div>
      <hr className="border-gray-500 w-4" />
      <div className="flex flex-col gap-2">
        <p>
          I&apos;d love to meet more people, so if you&apos;d like your photo
          taken, a website built, or just want to grab a coffee, please feel
          free to get in{" "}
          <Link className="underline" href="/contact">
            contact
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Main;
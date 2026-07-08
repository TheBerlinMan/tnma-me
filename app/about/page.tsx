import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <p className="text-sm">permanently under construction</p>
      </div>
      <footer className="flex justify-center pb-8">
        <Link href="/" className="text-sm hover:underline">
          back
        </Link>
      </footer>
    </div>
  );
};

export default AboutPage;

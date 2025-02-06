import Link from "next/link";
export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Link href="/" className="flex items-center justify-center w-32 h-32 rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
        <span className="text-xl font-bold">TNMA</span>
      </Link>
    </div>
  );
}


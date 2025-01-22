import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <Link href="/" className="font-bold text-xl">TNMA</Link>
            {/* <hr className="border-gray-500 border-1 mt-4 mb-6"/> */}
            {children}
        </main>
    );
}
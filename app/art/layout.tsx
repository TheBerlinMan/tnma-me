import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            <Link href="/" className="font-bold text-xl">TNMA</Link>
            {children}
        </main>
    );
}
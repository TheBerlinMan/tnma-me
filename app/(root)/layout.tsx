import Header from "@/app/(root)/components/Header";
import Footer from "@/app/(root)/components/Footer";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen flex flex-col fade-in m-7">
            <Header />
            <div className="flex-grow  ">
                {children}
            </div>
            <Footer />
        </main>
    );
}
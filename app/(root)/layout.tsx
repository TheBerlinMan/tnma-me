import Header from "@/app/(root)/components/Header";
import Footer from "@/app/(root)/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 m-7">
                {children}
            </div>
            <div className="hidden md:block">
                <Footer />
            </div>
        </div>
    );
}
import Header from "@/app/(root)/components/Header";
import Footer from "@/app/(root)/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col p-24">
            <Header />
            <div className="flex-1">
                {children}
            </div>
            {/* <div>
                <Footer />
            </div> */}
        </div>
    );
}
import Header from "@/app/(root)/components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col p-12 md:p-24">
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
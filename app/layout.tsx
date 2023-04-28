import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/app/(shared)/Navbar";
import Footer from "@/app/(shared)/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata = {
    title: "AI Blog App",
    description: "Next.js App that user OpenAi API to generate blog posts",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className={`${inter.variable}`} lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

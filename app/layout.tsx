import "./globals.css";
import { Inter } from "next/font/google";

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
            <body>{children}</body>
        </html>
    );
}

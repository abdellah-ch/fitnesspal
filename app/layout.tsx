import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//import Header from "@/components/molucules/Header";
//import { ToastContainer } from "react-toastify";
//import Footer from "@/components/molucules/Footer";
//import Menu from "@/components/organisms/Menu";
import { AuthProvider } from "@/providers/AuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "FitnessPal",
    description: "Generated by create next app",
};
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>

                <AuthProvider>
                    {children}
                </AuthProvider>

            </body>
        </html>
    );
}

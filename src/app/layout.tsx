import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionContext from "@/context/SessionProvider";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer/Footer";
import ThemeContext from "@/context/ThemeContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FB Clone By Adarsh",
  description: "Facebook Clone created by Adarsh Rangare, Who is the Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionContext>
        <body
          className={`${inter.className} bg-body-light dark:bg-body-dark text-primary-light dark:text-primary-dark`}
        >
          <ThemeContext>
            <Toaster position="bottom-center" />
            {children}
            <Footer />
          </ThemeContext>
        </body>
      </SessionContext>
    </html>
  );
}

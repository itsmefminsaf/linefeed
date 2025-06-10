import "../ui/tailwind.css";
import NavBar from "@/ui/components/NavBar";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "LineFeed | Share Your Poetry",
    template: "%s | LineFeed",
  },
  description:
    "LineFeed is a open-sourced poem sharing platform. Share your poems, read others, and connect with fellow poetry enthusiasts.",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${roboto.className} light antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

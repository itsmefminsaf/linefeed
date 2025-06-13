import "../ui/tailwind.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { cookies } from "next/headers";
import { cookies } from "next/headers";

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

const RootLayout = async ({
  children,
  nav,
}: Readonly<{ children: React.ReactNode; nav: React.ReactNode }>) => {
  const theme = (await cookies()).get("theme")?.value || "light";
  return (
    <html lang="en" className={theme === "dark" ? "dark" : ""}>
      <body className={`${roboto.className} bg antialiased`}>
        {nav}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

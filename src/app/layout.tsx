import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/globals.css";
import { Flex, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Rubik } from "next/font/google";
import { PropsWithChildren } from "react";

const rubik = Rubik({ subsets: ["arabic"], variable: "--rubik" });

export const metadata: Metadata = {
  title: "AI Story Hub",
  description: "Personalized Stories by AI",
};

const RootLayout: React.FC<PropsWithChildren> = async ({ children }) => (
  <html className={rubik.variable} lang="en" suppressHydrationWarning>
    <body>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Theme>
          <Flex className="min-h-screen" direction="column">
            <Header />
            {children}
            <Footer />
          </Flex>
        </Theme>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;

import { Flex, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Story Hub",
  description: "Personalized Stories by AI",
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Theme accentColor="gray">
          <Flex className="min-h-screen" direction="column">
            {children}
          </Flex>
        </Theme>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;

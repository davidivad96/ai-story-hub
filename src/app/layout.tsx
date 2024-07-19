import { auth } from "@/auth";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/globals.css";
import { Flex, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Story Hub",
  description: "Personalized Stories by AI",
};

const RootLayout: React.FC<PropsWithChildren> = async ({ children }) => {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Theme accentColor="gray">
            <Flex className="min-h-screen" direction="column">
              <Header loggedIn={session !== null} />
              {children}
              <Footer />
            </Flex>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

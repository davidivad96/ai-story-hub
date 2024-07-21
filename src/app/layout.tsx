import { auth } from "@/auth";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/globals.css";
import { Story } from "@/types";
import { getKvKey } from "@/utils";
import { Flex, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { kv } from "@vercel/kv";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Rubik } from "next/font/google";
import { PropsWithChildren } from "react";

const rubik = Rubik({ subsets: ["arabic"], variable: "--rubik" });

export const metadata: Metadata = {
  title: "AI Story Hub",
  description: "Personalized Stories by AI",
};

const RootLayout: React.FC<PropsWithChildren> = async ({ children }) => {
  const session = await auth();
  const stories = await kv.hgetall<Record<string, Story>>(
    getKvKey(session?.user?.email ?? "guest")
  );

  return (
    <html className={rubik.variable} lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Theme>
            <Flex className="min-h-screen" direction="column">
              <Header
                user={session?.user}
                stories={Object.values(stories ?? [])}
              />
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

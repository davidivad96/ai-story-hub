"use client";

import { GitHubLogoIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Flex, Heading, IconButton } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import Image from "next/image";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Flex justify="between" align="center" p="16px 24px">
      <Flex align="center" gap="4">
        <Image
          src={theme === "dark" ? "/white_logo.svg" : "/logo.svg"}
          alt="logo"
          width={50}
          height={50}
        />
        <Heading size="6">AI Story Hub</Heading>
      </Flex>
      <Flex align="center" gap="4">
        <IconButton variant="ghost">
          <a href="https://github.com/davidivad96/ai-story-hub" target="_blank">
            <GitHubLogoIcon width="20" height="20" />
          </a>
        </IconButton>
        <IconButton
          variant="ghost"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <MoonIcon width="20" height="20" />
          ) : (
            <SunIcon width="20" height="20" />
          )}
        </IconButton>
      </Flex>
    </Flex>
  );
};

export default Header;

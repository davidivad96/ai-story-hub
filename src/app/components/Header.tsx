"use client";

import { GitHubLogoIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Flex, Heading, IconButton } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import Logo from "./Logo";

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Flex justify="between" align="center" p="16px 24px">
      <Flex align="center" gap="4">
        <Logo />
        <Heading size="6">AI Story Hub</Heading>
      </Flex>
      <Flex align="center" gap="4">
        <IconButton variant="ghost">
          <a href="https://github.com/davidivad96/ai-story-hub" target="_blank">
            <GitHubLogoIcon width="20" height="20" />
          </a>
        </IconButton>
        <IconButton variant="ghost" onClick={switchTheme}>
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

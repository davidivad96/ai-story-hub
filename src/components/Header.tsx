"use client";

import { logout } from "@/actions";
import { getNameInitials } from "@/utils";
import { GitHubLogoIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Avatar, Box, Flex, Heading, IconButton, Text } from "@radix-ui/themes";
import { User } from "next-auth";
import { signIn } from "next-auth/react";
import { useTheme } from "next-themes";
import Logo from "./Logo";
import PowerOffLogo from "./PowerOffLogo";

type Props = {
  user?: User | null;
};

const Header: React.FC<Props> = ({ user }) => {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Flex
      justify="between"
      align="center"
      p="16px 24px"
      className="bg-background-secondary"
    >
      <Flex align="center" gap="4">
        <Logo />
        <Heading
          size="6"
          className="bg-gradient-primary bg-clip-text text-transparent"
        >
          AI Story Hub
        </Heading>
      </Flex>
      <Flex align="center" gap="4">
        <IconButton variant="ghost">
          <a href="https://github.com/davidivad96/ai-story-hub" target="_blank">
            <GitHubLogoIcon width="20" height="20" color="var(--primary)" />
          </a>
        </IconButton>
        <IconButton variant="ghost" onClick={switchTheme}>
          {theme === "dark" ? (
            <MoonIcon width="20" height="20" color="var(--primary)" />
          ) : (
            <SunIcon width="20" height="20" color="var(--primary)" />
          )}
        </IconButton>
        {user ? (
          <>
            <IconButton
              variant="solid"
              onClick={() => logout()}
              className="w-auto p-2"
            >
              <PowerOffLogo />
              <Box mr="4px" />
              <Text className="text-button-text">Logout</Text>
            </IconButton>
            <Avatar
              src={user.image ?? ""}
              fallback={getNameInitials(user.name ?? "")}
              className="rounded-full"
            />
          </>
        ) : (
          <IconButton
            variant="solid"
            onClick={() => signIn("github")}
            className="w-auto p-2"
          >
            <Text className="text-button-text">Login</Text>
          </IconButton>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;

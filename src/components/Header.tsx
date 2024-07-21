"use client";

import { logout } from "@/actions";
import { Story } from "@/types";
import { getNameInitials } from "@/utils";
import {
  GitHubLogoIcon,
  HamburgerMenuIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import {
  Avatar,
  Box,
  DropdownMenu,
  Flex,
  Heading,
  IconButton,
  ScrollArea,
  Separator,
  Text,
} from "@radix-ui/themes";
import { User } from "next-auth";
import { signIn } from "next-auth/react";
import { useTheme } from "next-themes";
import Logo from "./Logo";
import PowerOffLogo from "./PowerOffLogo";
import StoryCard from "./StoryCard";

type Props = {
  user?: User | null;
  stories: Story[];
};

const Header: React.FC<Props> = ({ user, stories }) => {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Flex
        justify="between"
        align="center"
        p="16px 24px"
        className="bg-background-secondary"
        gap="3"
      >
        <Flex align="center" gap="4">
          <Logo />
          <Heading
            size={{ initial: "5", xs: "6" }}
            className="bg-gradient-primary bg-clip-text text-transparent"
          >
            AI Story Hub
          </Heading>
        </Flex>
        <Flex align="center" gap="4">
          <IconButton variant="ghost">
            <a
              href="https://github.com/davidivad96/ai-story-hub"
              target="_blank"
            >
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
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <IconButton variant="ghost" className="sm:hidden">
                <HamburgerMenuIcon />
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content sideOffset={5}>
              <Box p="3">
                {user ? (
                  <Flex justify="end" align="center" gap="2">
                    <IconButton
                      variant="solid"
                      onClick={() => logout()}
                      className="w-auto p-2"
                    >
                      <PowerOffLogo />
                      <Text className="text-button-text ml-1">Logout</Text>
                    </IconButton>
                    <Avatar
                      src={user.image ?? ""}
                      fallback={getNameInitials(user.name ?? "")}
                      className="rounded-full"
                    />
                  </Flex>
                ) : (
                  <IconButton
                    variant="solid"
                    onClick={() => signIn("github")}
                    className="w-auto p-2"
                  >
                    <Text className="text-button-text">Login</Text>
                  </IconButton>
                )}
                <Separator className="my-4 w-full" />
                <Text>{user ? "Your Stories:" : "Guest Stories:"}</Text>
                <ScrollArea className="h-full mt-4">
                  {stories.length > 0 ? (
                    stories.map((story) => (
                      <StoryCard
                        key={story.id}
                        story={story}
                        canDelete={!!user}
                      />
                    ))
                  ) : (
                    <Text className="text-gray-500 text-center mt-4">
                      No stories yet
                    </Text>
                  )}
                </ScrollArea>
              </Box>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <Box className="hidden sm:block">
            {user ? (
              <Flex align="center" gap="2">
                <IconButton
                  variant="solid"
                  onClick={() => logout()}
                  className="w-auto p-2"
                >
                  <PowerOffLogo />
                  <Text className="text-button-text ml-1">Logout</Text>
                </IconButton>
                <Avatar
                  src={user.image ?? ""}
                  fallback={getNameInitials(user.name ?? "")}
                  className="rounded-full"
                />
              </Flex>
            ) : (
              <IconButton
                variant="solid"
                onClick={() => signIn("github")}
                className="w-auto p-2"
              >
                <Text className="text-button-text">Login</Text>
              </IconButton>
            )}
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;

import { auth } from "@/auth";
import { Story } from "@/types";
import { getKvKey } from "@/utils";
import { GitHubLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Box,
  DropdownMenu,
  Flex,
  Heading,
  IconButton,
  Link,
  ScrollArea,
  Separator,
  Text,
} from "@radix-ui/themes";
import { kv } from "@vercel/kv";
import Logo from "./Logo";
import StoriesList from "./StoriesList";
import ThemeSwitcher from "./ThemeSwitcher";
import UserSection from "./UserSection";

const Header: React.FC = async () => {
  const session = await auth();
  const user = session?.user;
  const stories = await kv.hgetall<Record<string, Story>>(
    getKvKey(session?.user?.email ?? "guest")
  );
  const storiesArray = Object.values(stories ?? []);

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
          <Heading className="bg-gradient-primary bg-clip-text text-transparent">
            AI Story Hub
          </Heading>
        </Flex>
        <Flex align="center" gap="4">
          <IconButton variant="ghost">
            <Link
              href="https://github.com/davidivad96/ai-story-hub"
              target="_blank"
            >
              <GitHubLogoIcon width="20" height="20" color="var(--primary)" />
            </Link>
          </IconButton>
          <ThemeSwitcher />
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <IconButton variant="ghost" className="sm:hidden">
                <HamburgerMenuIcon />
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content sideOffset={5}>
              <Box p="3">
                <UserSection user={user} />
                <Separator className="my-4 w-full" />
                <Text>{user ? "Your Stories:" : "Guest Stories:"}</Text>
                <ScrollArea className="h-full mt-4">
                  <StoriesList stories={storiesArray} canDelete={!!user} />
                </ScrollArea>
              </Box>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <Box className="hidden sm:block">
            <UserSection user={user} />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Header;

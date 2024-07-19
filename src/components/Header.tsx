"use client";

import { logout } from "@/actions";
import {
  ArrowLeftIcon,
  GitHubLogoIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { Box, Flex, Heading, IconButton } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";
import PowerOffLogo from "./PowerOffLogo";

type Props = {
  loggedIn: boolean;
};

const Header: React.FC<Props> = ({ loggedIn }) => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

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
        {pathname === "/" ? (
          loggedIn ? (
            <IconButton variant="ghost" onClick={() => logout()}>
              <PowerOffLogo />
              <Box mr="4px" />
              Logout
            </IconButton>
          ) : (
            <IconButton variant="ghost" onClick={() => router.push("/login")}>
              <ArrowLeftIcon className="mr-1" /> Go back
            </IconButton>
          )
        ) : null}
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

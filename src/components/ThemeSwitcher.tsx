"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { useTheme } from "next-themes";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <IconButton variant="ghost" onClick={switchTheme}>
      {theme === "dark" ? (
        <MoonIcon width="20" height="20" color="var(--primary)" />
      ) : (
        <SunIcon width="20" height="20" color="var(--primary)" />
      )}
    </IconButton>
  );
};

export default ThemeSwitcher;

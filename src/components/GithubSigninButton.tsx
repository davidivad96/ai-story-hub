"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button, Text } from "@radix-ui/themes";
import { signIn } from "next-auth/react";

const GithubSigninButton: React.FC = () => (
  <Button
    variant="outline"
    onClick={() => signIn("github")}
    className="flex flex-1 justify-between items-center min-w-40 max-h-10"
  >
    <Text>GitHub Login</Text>
    <GitHubLogoIcon />
  </Button>
);

export default GithubSigninButton;

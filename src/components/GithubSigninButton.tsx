"use client";

import { Button } from "@radix-ui/themes";
import { signIn } from "next-auth/react";

const GithubSigninButton: React.FC = () => (
  <Button variant="outline" onClick={() => signIn("github")}>
    Login with GitHub
  </Button>
);

export default GithubSigninButton;

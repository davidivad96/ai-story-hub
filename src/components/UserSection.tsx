"use client";

import { logout } from "@/actions";
import { getNameInitials } from "@/utils";
import { Avatar, Flex, IconButton, Text } from "@radix-ui/themes";
import { User } from "next-auth";
import { signIn } from "next-auth/react";
import PowerOffLogo from "./PowerOffLogo";

type Props = {
  user?: User | null;
};

const UserSection: React.FC<Props> = ({ user }) =>
  user ? (
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
  );

export default UserSection;

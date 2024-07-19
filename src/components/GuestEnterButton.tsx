"use client";

import { PersonIcon } from "@radix-ui/react-icons";
import { Button, Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

const GuestEnterButton: React.FC = () => {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      onClick={() => router.push("/")}
      className="flex flex-1 justify-between items-center min-w-40 max-h-10"
    >
      <Text>Enter as Guest</Text>
      <PersonIcon />
    </Button>
  );
};

export default GuestEnterButton;

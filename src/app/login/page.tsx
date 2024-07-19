import { auth } from "@/auth";
import GithubSigninButton from "@/components/GithubSigninButton";
import GuestEnterButton from "@/components/GuestEnterButton";
import { Flex } from "@radix-ui/themes";
import { redirect } from "next/navigation";

const Login: React.FC = async () => {
  const session = await auth();
  if (session) {
    redirect("/");
  }

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      gap="2"
      className="flex-1"
    >
      <GithubSigninButton />
      <GuestEnterButton />
    </Flex>
  );
};

export default Login;

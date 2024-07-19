import { auth } from "@/auth";
import GithubSigninButton from "@/components/GithubSigninButton";
import { Flex } from "@radix-ui/themes";
import { redirect } from "next/navigation";

const Login: React.FC = async () => {
  const session = await auth();
  console.log("SESSION", session);
  if (session) {
    redirect("/");
  }

  return (
    <Flex justify="center" align="center" style={{ flex: 1 }}>
      <GithubSigninButton />
    </Flex>
  );
};

export default Login;

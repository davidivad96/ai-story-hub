import { auth } from "@/auth";
import { Story } from "@/types";
import { getKvKey } from "@/utils";
import { Card, Flex, Heading } from "@radix-ui/themes";
import { kv } from "@vercel/kv";
import StoriesList from "./StoriesList";

const Sidebar: React.FC = async () => {
  const session = await auth();
  const stories = await kv.hgetall<Record<string, Story>>(
    getKvKey(session?.user?.email ?? "guest")
  );
  const storiesArray = Object.values(stories ?? []);

  return (
    <Card className="p-4 w-72 hidden sm:block">
      <Flex direction="column" height="100%">
        <Heading mb="4">{session ? "Your Stories" : "Guest Stories"}</Heading>
        <StoriesList stories={storiesArray} canDelete={!!session} />
      </Flex>
    </Card>
  );
};

export default Sidebar;

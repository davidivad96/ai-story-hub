import { auth } from "@/auth";
import { Story } from "@/types";
import { getKvKey } from "@/utils";
import { Card, Flex, Heading, ScrollArea } from "@radix-ui/themes";
import { kv } from "@vercel/kv";
import StoryCard from "./StoryCard";

const Sidebar: React.FC = async () => {
  const session = await auth();
  const stories = await kv.hgetall<Record<string, Story>>(
    getKvKey(session?.user?.email ?? "guest")
  );

  return (
    <Card className="p-4 w-72" style={{ height: "calc(100vh - 166px)" }}>
      <Flex direction="column" height="100%">
        <Heading mb="4">{session ? "Your Stories" : "Guest Stories"}</Heading>
        <ScrollArea className="h-full">
          {Object.values(stories ?? []).map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </ScrollArea>
      </Flex>
    </Card>
  );
};

export default Sidebar;

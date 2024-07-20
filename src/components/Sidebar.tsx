import { auth } from "@/auth";
import { Story } from "@/types";
import { getKvKey } from "@/utils";
import { Card, Flex, Heading, ScrollArea, Text } from "@radix-ui/themes";
import { kv } from "@vercel/kv";
import StoryCard from "./StoryCard";

const Sidebar: React.FC = async () => {
  const session = await auth();
  const stories = await kv.hgetall<Record<string, Story>>(
    getKvKey(session?.user?.email ?? "guest")
  );
  const storiesArray = Object.values(stories ?? []);

  return (
    <Card className="p-4 w-72" style={{ height: "calc(100vh - 166px)" }}>
      <Flex direction="column" height="100%">
        <Heading mb="4">{session ? "Your Stories" : "Guest Stories"}</Heading>
        <ScrollArea className="h-full">
          {storiesArray.length > 0 ? (
            Object.values(storiesArray).map((story) => (
              <StoryCard key={story.id} story={story} canDelete={!!session} />
            ))
          ) : (
            <Text className="text-gray-500 text-center mt-4">
              No stories yet
            </Text>
          )}
        </ScrollArea>
      </Flex>
    </Card>
  );
};

export default Sidebar;

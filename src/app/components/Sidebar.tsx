import { Card, Flex, Heading, ScrollArea } from "@radix-ui/themes";
import { kv } from "@vercel/kv";
import { Story } from "../types";
import StoryCard from "./StoryCard";

const Sidebar: React.FC = async () => {
  const stories = await kv.hgetall<Record<string, Story>>("stories");

  return (
    <Card style={{ width: 300, height: "calc(100vh - 166px)", padding: 16 }}>
      <Flex direction="column" height="100%">
        <Heading mb="4">Stories</Heading>
        <ScrollArea style={{ height: "100%" }}>
          {Object.values(stories ?? []).map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </ScrollArea>
      </Flex>
    </Card>
  );
};

export default Sidebar;

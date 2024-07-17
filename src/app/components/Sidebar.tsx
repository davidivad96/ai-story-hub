import { Card, Flex, Heading } from "@radix-ui/themes";
import { kv } from "@vercel/kv";
import { Story } from "../types";
import StoryCard from "./StoryCard";

const Sidebar: React.FC = async () => {
  const stories = await kv.hgetall<Record<string, Story>>("stories");

  return (
    <Card style={{ width: 300, padding: 16 }}>
      <Flex direction="column" gap="4">
        <Heading mb="4">Stories</Heading>
        {Object.entries(stories ?? []).map(([id, story]) => (
          <StoryCard key={id} id={id} story={story} />
        ))}
      </Flex>
    </Card>
  );
};

export default Sidebar;

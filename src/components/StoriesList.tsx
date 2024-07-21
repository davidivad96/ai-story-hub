import { Story } from "@/types";
import { Text } from "@radix-ui/themes";
import StoryCard from "./StoryCard";

type Props = {
  stories: Story[];
  canDelete?: boolean;
};

const StoriesList: React.FC<Props> = ({ stories, canDelete = false }) =>
  stories.length > 0 ? (
    stories.map((story) => (
      <StoryCard key={story.id} story={story} canDelete={canDelete} />
    ))
  ) : (
    <Text className="text-gray-500 text-center mt-4">No stories yet</Text>
  );

export default StoriesList;

import { Story } from "@/types";
import { Badge, Card, Dialog, Flex, Heading } from "@radix-ui/themes";
import DeleteStoryButton from "./DeleteStoryButton";
import StoryModalContent from "./StoryModalContent";

type Props = {
  story: Story;
  canDelete?: boolean;
};

const StoryCard: React.FC<Props> = ({
  story: { id, title, genre, narrativeStyle, theme, language, content },
  canDelete,
}) => (
  <Dialog.Root>
    <Dialog.Trigger>
      <Card key={id} mb="4" className="cursor-pointer max-w-72">
        <Flex justify="between" mb="2">
          <Heading size="4">{title}</Heading>
          {canDelete && <DeleteStoryButton storyId={id} />}
        </Flex>
        <Flex gap="2" className="flex-wrap">
          {genre && <Badge>{genre}</Badge>}
          {narrativeStyle && <Badge>{narrativeStyle}</Badge>}
          {theme && <Badge>{theme}</Badge>}
          {language && <Badge>{language}</Badge>}
        </Flex>
      </Card>
    </Dialog.Trigger>
    <StoryModalContent title={title} content={content} />
  </Dialog.Root>
);

export default StoryCard;

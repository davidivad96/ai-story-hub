import { Story } from "@/types";
import { Badge, Card, Dialog, Flex, Heading } from "@radix-ui/themes";
import DeleteStoryButton from "./DeleteStoryButton";
import StoryModalContent from "./StoryModalContent";

type Props = {
  story: Story;
};

const StoryCard: React.FC<Props> = ({
  story: { id, title, genre, narrativeStyle, theme, language, content },
}) => (
  <Dialog.Root>
    <Dialog.Trigger>
      <Card key={id} mb="4" className="cursor-pointer">
        <Flex justify="between" align="center" mb="2">
          <Heading size="4">{title}</Heading>
          <DeleteStoryButton storyId={id} />
        </Flex>
        {genre && <Badge mr="2">{genre}</Badge>}
        {narrativeStyle && <Badge mr="2">{narrativeStyle}</Badge>}
        {theme && <Badge mr="2">{theme}</Badge>}
        {language && <Badge>{language}</Badge>}
      </Card>
    </Dialog.Trigger>
    <StoryModalContent title={title} content={content} />
  </Dialog.Root>
);

export default StoryCard;

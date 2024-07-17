import { Badge, Card, Dialog, Heading } from "@radix-ui/themes";
import { Story } from "../types";
import StoryModalContent from "./StoryModalContent";

type Props = {
  id: string;
  story: Story;
};

const StoryCard: React.FC<Props> = ({
  id,
  story: { title, genre, narrativeStyle, theme, language, content },
}) => (
  <Dialog.Root>
    <Dialog.Trigger>
      <Card key={id} style={{ cursor: "pointer" }}>
        <Heading size="4" mb="2">
          {title}
        </Heading>
        <Badge mr="2">{genre}</Badge>
        <Badge mr="2">{narrativeStyle}</Badge>
        <Badge mr="2">{theme}</Badge>
        <Badge>{language}</Badge>
      </Card>
    </Dialog.Trigger>
    <StoryModalContent title={title} content={content} />
  </Dialog.Root>
);

export default StoryCard;

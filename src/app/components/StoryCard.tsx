import { Badge, Card, Dialog, Heading } from "@radix-ui/themes";
import { Story } from "../types";
import StoryModalContent from "./StoryModalContent";

type Props = {
  story: Story;
};

const StoryCard: React.FC<Props> = ({
  story: { id, title, genre, narrativeStyle, theme, language, content },
}) => (
  <Dialog.Root>
    <Dialog.Trigger>
      <Card key={id} mb="4" style={{ cursor: "pointer" }}>
        <Heading size="4" mb="2">
          {title}
        </Heading>
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

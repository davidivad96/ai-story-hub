import { Cross1Icon } from "@radix-ui/react-icons";
import { Dialog, IconButton, Text } from "@radix-ui/themes";

type Props = {
  title: string;
  content: string;
};

const StoryModalContent: React.FC<Props> = ({ title, content }) => (
  <Dialog.Content maxWidth="800px">
    <Dialog.Close style={{ float: "right" }}>
      <IconButton variant="ghost">
        <Cross1Icon />
      </IconButton>
    </Dialog.Close>
    <Dialog.Title>{title}</Dialog.Title>
    <Dialog.Description size="2" mb="4">
      <Text className="whitespace-pre-wrap">{content}</Text>
    </Dialog.Description>
  </Dialog.Content>
);

export default StoryModalContent;

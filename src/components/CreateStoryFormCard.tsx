import { Card, Container, Flex, Heading } from "@radix-ui/themes";
import StoryCreationForm from "./StoryCreationForm";

const CreateStoryFormCard: React.FC = () => (
  <Container size="3">
    <Flex direction="column">
      <Heading mb="4">Create your story</Heading>
      <Card className="p-4">
        <StoryCreationForm />
      </Card>
    </Flex>
  </Container>
);

export default CreateStoryFormCard;

import { Card, Container, Flex, Heading } from "@radix-ui/themes";
import Form from "./Form";

const CreateStoryFormCard: React.FC = () => (
  <Container size="3">
    <Flex direction="column">
      <Heading mb="4">Create your story</Heading>
      <Card style={{ padding: 16 }}>
        <Form />
      </Card>
    </Flex>
  </Container>
);

export default CreateStoryFormCard;

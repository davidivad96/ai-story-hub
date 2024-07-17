import { Card, Flex, Heading } from "@radix-ui/themes";

const Sidebar: React.FC = () => (
  <Card style={{ width: 300, padding: 16 }}>
    <Flex direction="column" align="center">
      <Heading>Previous stories</Heading>
    </Flex>
  </Card>
);

export default Sidebar;

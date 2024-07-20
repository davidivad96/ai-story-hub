import { Flex, Text } from "@radix-ui/themes";

const Footer: React.FC = () => (
  <Flex
    justify="center"
    align="center"
    p="16px 24px"
    className="bg-background-secondary"
  >
    <Text size="2">© 2024 AI Story Hub</Text>
  </Flex>
);

export default Footer;
